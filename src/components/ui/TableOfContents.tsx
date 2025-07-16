"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

interface HeadingElement {
  id: string;
  text: string;
  level: number;
  element: HTMLElement;
}

interface TableOfContentsProps {
  /**
   * Maximum heading level to include in TOC (1-6)
   * @default 3
   */
  maxLevel?: number;
  /**
   * Maximum number of headings to show
   * @default undefined (show all)
   */
  maxItems?: number;
  /**
   * Container selector to search for headings within
   * @default undefined (searches entire document)
   */
  containerSelector?: string;
  /**
   * Custom CSS class for the TOC container
   */
  className?: string;
  /**
   * Custom CSS class for TOC links
   */
  linkClassName?: string;
  /**
   * Whether to use Roman numerals for numbering
   * @default false
   */
  useRomanNumerals?: boolean;
  /**
   * Whether to show numbering at all
   * @default true
   */
  showNumbering?: boolean;
  /**
   * Title for the table of contents
   * @default "Table of Contents"
   */
  title?: string;
  /**
   * Whether to skip the first h1 element (page title)
   * @default true
   */
  skipFirstH1?: boolean;
  /**
   * Additional CSS selectors to exclude from TOC
   * @default []
   */
  excludeSelectors?: string[];
}

const romanNumerals = [
  "",
  "I",
  "II",
  "III",
  "IV",
  "V",
  "VI",
  "VII",
  "VIII",
  "IX",
  "X",
  "XI",
  "XII",
  "XIII",
  "XIV",
  "XV",
  "XVI",
  "XVII",
  "XVIII",
  "XIX",
  "XX",
];

const generateId = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/--+/g, "-") // Replace multiple hyphens with single
    .trim();
};

const extractHeadings = (
  container: Document | HTMLElement,
  maxLevel: number,
  maxItems?: number,
  skipFirstH1: boolean = true,
  excludeSelectors: string[] = []
): HeadingElement[] => {
  const headingSelectors = Array.from(
    { length: maxLevel },
    (_, i) => `h${i + 1}`
  ).join(", ");
  const headingElements = container.querySelectorAll(headingSelectors);

  const headings: HeadingElement[] = [];
  let isFirstH1 = true;

  // Default exclusion selectors
  const defaultExcludeSelectors = [
    '[role="dialog"]',
    "[data-radix-dialog-content]",
    "[data-radix-dialog-overlay]",
    '[data-state="open"]',
    '[data-state="closed"]',
    ".sr-only",
    ".command-dialog",
    "[data-dialog]",
    '[aria-label="Table of contents"]',
    ".table-of-contents",
    ".toc",
    "[data-toc-ignore]",
    ".search-dialog",
    ".modal",
    ".popover",
    ".tooltip",
    ".dropdown-content",
    ".command",
    "[cmdk-root]",
    "[cmdk-dialog]",
    "[cmdk-overlay]",
    "[data-cmdk-root]",
    '[data-slot="command"]',
    '[data-slot="command-input-wrapper"]',
    ".fixed.inset-0",
    ".fixed.left-\\[50\\%\\]",
    // Exclude any element with position fixed (likely dialogs/modals)
    // Note: This will be checked programmatically below
  ];

  const allExcludeSelectors = [...defaultExcludeSelectors, ...excludeSelectors];

  for (let i = 0; i < headingElements.length; i++) {
    if (maxItems && headings.length >= maxItems) break;

    const element = headingElements[i] as HTMLElement;
    const text = element.textContent || "";
    const level = parseInt(element.tagName.charAt(1));

    // Skip the first h1 element (page title) if skipFirstH1 is true
    if (level === 1 && isFirstH1 && skipFirstH1) {
      isFirstH1 = false;
      continue;
    }

    // Skip headings inside excluded containers
    const isExcluded = allExcludeSelectors.some((selector) => {
      try {
        return element.closest(selector);
      } catch (e) {
        // Invalid selector, skip it
        return false;
      }
    });

    // Additional check for dialog/modal components
    const isInDialog =
      element.closest('[role="dialog"]') ||
      element.closest("[data-radix-dialog-content]") ||
      element.closest("[data-state]") ||
      element.closest("[cmdk-root]") ||
      element.closest("[data-cmdk-root]") ||
      element.closest('[data-slot="command"]') ||
      // Check if element is within a fixed positioned container (likely a modal)
      (() => {
        let parent = element.parentElement;
        while (parent) {
          const style = window.getComputedStyle(parent);
          if (
            style.position === "fixed" &&
            style.zIndex !== "auto" &&
            parseInt(style.zIndex) > 40
          ) {
            return true;
          }
          parent = parent.parentElement;
        }
        return false;
      })();

    // Skip headings that are visually hidden or not displayed
    const computedStyle = window.getComputedStyle(element);
    const isHidden =
      computedStyle.display === "none" ||
      computedStyle.visibility === "hidden" ||
      computedStyle.opacity === "0" ||
      computedStyle.position === "fixed" ||
      element.hidden;

    // Skip screen reader only elements (common pattern for sr-only)
    const isSrOnly =
      computedStyle.position === "absolute" &&
      computedStyle.width === "1px" &&
      computedStyle.height === "1px" &&
      computedStyle.padding === "0px" &&
      computedStyle.margin === "-1px" &&
      computedStyle.overflow === "hidden" &&
      computedStyle.clip === "rect(0px, 0px, 0px, 0px)" &&
      computedStyle.whiteSpace === "nowrap" &&
      computedStyle.border === "0px";

    // Skip headings with data-toc-ignore attribute
    const hasIgnoreAttribute =
      element.hasAttribute("data-toc-ignore") ||
      element.closest("[data-toc-ignore]");

    if (
      isExcluded ||
      isInDialog ||
      isHidden ||
      isSrOnly ||
      hasIgnoreAttribute
    ) {
      continue;
    }

    // Generate or use existing ID
    let id = element.id;
    if (!id) {
      // Check if parent section has an ID we can use
      const parentSection = element.closest("section");
      if (parentSection && parentSection.id) {
        id = parentSection.id;
      } else {
        id = generateId(text);
        element.id = id;
      }
    }

    headings.push({
      id,
      text,
      level,
      element,
    });
  }

  return headings;
};

const TableOfContents: React.FC<TableOfContentsProps> = ({
  maxLevel = 3,
  maxItems,
  containerSelector,
  className = "",
  linkClassName = "",
  useRomanNumerals = false,
  showNumbering = true,
  title = "Table of Contents",
  skipFirstH1 = true,
  excludeSelectors = [],
}) => {
  const [headings, setHeadings] = useState<HeadingElement[]>([]);
  const [activeHeading, setActiveHeading] = useState<string>("");

  // Memoize the exclude selectors to prevent unnecessary re-renders
  const memoizedExcludeSelectors = useMemo(() => {
    return excludeSelectors.length > 0 ? excludeSelectors : [];
  }, [excludeSelectors.join(",")]);

  // Memoize the update headings function
  const updateHeadings = useCallback(() => {
    const container = containerSelector
      ? (document.querySelector(containerSelector) as HTMLElement | null)
      : document;

    if (!container) return;

    const extractedHeadings = extractHeadings(
      container,
      maxLevel,
      maxItems,
      skipFirstH1,
      memoizedExcludeSelectors
    );
    setHeadings(extractedHeadings);
  }, [
    containerSelector,
    maxLevel,
    maxItems,
    skipFirstH1,
    memoizedExcludeSelectors,
  ]);

  // Effect for initial extraction and re-extraction when dependencies change
  useEffect(() => {
    updateHeadings();
  }, [updateHeadings]);

  // Separate effect for intersection observer to avoid infinite loops
  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHeading(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -80% 0px",
      }
    );

    // Observe all headings
    headings.forEach((heading) => {
      observer.observe(heading.element);
    });

    return () => {
      observer.disconnect();
    };
  }, [headings]);

  const getNumbering = (index: number): string => {
    if (!showNumbering) return "";

    if (useRomanNumerals) {
      return romanNumerals[index + 1] || (index + 1).toString();
    }

    return (index + 1).toString();
  };

  const getIndentationClass = (level: number): string => {
    switch (level) {
      case 1:
        return "";
      case 2:
        return "pl-0";
      case 3:
        return "pl-4";
      case 4:
        return "pl-8";
      case 5:
        return "pl-12";
      case 6:
        return "pl-16";
      default:
        return "";
    }
  };

  const handleClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      // Update URL hash
      window.history.pushState(null, "", `#${id}`);
    }
  };

  if (headings.length === 0) {
    return null;
  }

  return (
    <div className={`mb-8 ${className}`}>
      <h2 className="mb-4 font-semibold text-xl">{title}</h2>
      <nav className="space-y-2" aria-label="Table of contents">
        {headings.map((heading, index) => {
          const numbering = getNumbering(index);
          const isActive = activeHeading === heading.id;

          return (
            <a
              key={heading.id}
              href={`#${heading.id}`}
              onClick={(e) => handleClick(e, heading.id)}
              className={`
                block underline-offset-2 hover:underline decoration-1 decoration-accent
                transition-colors duration-200
                ${getIndentationClass(heading.level)}
                ${isActive ? "text-accent font-medium" : ""}
                ${linkClassName}
              `}
              aria-current={isActive ? "location" : undefined}
            >
              {numbering && `${numbering}. `}
              {heading.text}
            </a>
          );
        })}
      </nav>
    </div>
  );
};

export default TableOfContents;
