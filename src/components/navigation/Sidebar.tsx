import { useNavigation } from "@/hooks/useNavigation";
import { NavigationItem } from "@/lib/interfaces";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import NavigationSection from "./NavigationSection";

export default function Sidebar({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();
  const { navigation, loading } = useNavigation();
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [initialPathname, setInitialPathname] = useState<string | null>(null);

  // Track initial pathname and close sidebar on subsequent navigation
  useEffect(() => {
    if (initialPathname === null) {
      // First load - just set the initial pathname
      setInitialPathname(pathname);
    } else if (pathname !== initialPathname) {
      // Pathname changed after initial load - close sidebar
      onClose();
      setInitialPathname(pathname);
    }
  }, [pathname, initialPathname, onClose]);

  // Recursive function to check if any item or its children contain the path
  const checkItemContainsPath = useCallback(
    (items: NavigationItem[], path: string): boolean => {
      for (const item of items) {
        // Check direct match
        if (item.href === path) {
          return true;
        }
        // Check if path starts with this item's path (for sub-routes)
        if (path.startsWith(item.href + "/") && item.href !== "#") {
          return true;
        }
        // Recursively check children
        if (item.children && checkItemContainsPath(item.children, path)) {
          return true;
        }
      }
      return false;
    },
    []
  );

  // Function to find which section contains the current path
  const findSectionForPath = useCallback(
    (path: string) => {
      for (const section of navigation) {
        if (checkItemContainsPath(section.items, path)) {
          return section.title;
        }
      }
      return null;
    },
    [navigation, checkItemContainsPath]
  );

  // Set the section containing the current page as open by default
  useEffect(() => {
    if (navigation.length > 0 && openSection === null) {
      const currentSection = findSectionForPath(pathname);
      if (currentSection) {
        setOpenSection(currentSection);
      } else {
        // Fallback to first section if no match found
        setOpenSection(navigation[0].title);
      }
    }
  }, [navigation, openSection, findSectionForPath, pathname]);

  // Handle escape key to close sidebar
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => {
        document.removeEventListener("keydown", handleEscape);
      };
    }
  }, [isOpen, onClose]);

  const handleSectionToggle = (sectionTitle: string) => {
    setOpenSection(openSection === sectionTitle ? null : sectionTitle);
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden bg-background bg-opacity-50 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        id="sidebar"
        className={`
        bg-sidebar-bg max-w-screen border-border text-sidebar-text fixed top-0 left-0 z-50 w-[25rem] h-full border-r
        transform transition-transform duration-500 ease-in-out overflow-hidden
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        lg:${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        <div className="flex flex-col">
          {/* Header with close button for mobile */}
          <div className="flex items-center justify-between lg:hidden px-4 py-3 border-b border-border">
            <span className="font-semibold text-lg text-sidebar-text">
              Phonenix Code Studio
            </span>
            <button
              onClick={onClose}
              className="hover:bg-sidebar-hover-bg p-2 rounded-lg text-sidebar-text hover:text-sidebar-active-text transition-colors"
              aria-label="Close sidebar"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Home Button */}
          <div className="pb-4 pt-4 px-4 border-border">
            <Link
              href="/"
              onClick={onClose}
              className={cn(
                "flex items-center space-x-3 py-2 rounded-lg font-extrabold text-sidebar-text hover:text-sidebar-active-text uppercase duration-200 transition-colors",
                {
                  "text-sidebar-active-text": pathname === "/",
                }
              )}
            >
              Home
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-x-hidden overflow-y-auto">
            <div className="pt-3 px-4">
              <div className="space-y-6">
                {loading ? (
                  <div className="animate-pulse">
                    <div className="bg-sidebar-hover-bg mb-3 rounded h-4"></div>
                    <div className="space-y-2 bg-sidebar-hover-bg">
                      <div className="bg-sidebar-hover-bg rounded h-3"></div>
                      <div className="bg-sidebar-hover-bg rounded h-3"></div>
                      <div className="bg-sidebar-hover-bg rounded h-3"></div>
                    </div>
                  </div>
                ) : (
                  navigation.map((section) => (
                    <NavigationSection
                      key={section.title}
                      title={section.title}
                      items={section.items}
                      isOpen={openSection === section.title}
                      onToggle={() => handleSectionToggle(section.title)}
                    />
                  ))
                )}
              </div>
            </div>
          </nav>
        </div>
      </aside>
    </>
  );
}
