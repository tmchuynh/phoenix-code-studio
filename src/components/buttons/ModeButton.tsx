"use client";

import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";
import { useEffect, useState } from "react";
import { Button, ButtonProps } from "../ui/button";

/**
 * `ModeButton` is a React component that renders a button to toggle between light and dark themes.
 * It uses the `useTheme` hook to get and set the current theme.
 *
 * @component
 * @param {ButtonProps} props - The properties passed to the button component.
 * @param {string} [props.className] - Additional class names for the button.
 * @param {React.Ref<HTMLButtonElement>} ref - The ref to be forwarded to the button element.
 *
 * @returns {JSX.Element | null} A button element that toggles the theme or null if the component is not mounted.
 *
 * @example
 * ```tsx
 * <ModeButton className="custom-class" />
 * ```
 *
 * @remarks
 * - The button listens for a keyboard event (Ctrl + Alt + L) to toggle the theme.
 * - If the current path is "/info/programs", the component will re-mount to apply the theme change.
 * - The button displays a sun icon for dark mode and a moon icon for light mode.
 */
const ModeButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className }, ref) => {
    const { theme = "light", setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
    }, [theme]);

    useEffect(() => {
      const handleKeydown = (e: KeyboardEvent) => {
        if (e.ctrlKey && e.altKey && e.key === "l") {
          setTheme(theme === "dark" ? "light" : "dark");
        }
      };

      window.addEventListener("keydown", handleKeydown);

      return () => {
        window.removeEventListener("keydown", handleKeydown);
      };
    }, []);

    if (!mounted || !theme) {
      return null;
    }

    /**
     * Toggles the theme between "dark" and "light". If the current path is "/info/programs",
     * it temporarily unmounts and remounts the component to trigger a re-render.
     */
    const handleThemeToggle = () => {
      setTheme(theme === "dark" ? "light" : "dark");
      if (window.location.pathname === "/info/programs") {
        setMounted(false);
        requestAnimationFrame(() => setMounted(true));
      }
    };

    return (
      <Button
        size="icon"
        variant="ghost"
        type="button"
        onClick={handleThemeToggle}
        className={cn(
          `${className} ${
            className ? "hover:bg-transparent hover:text-secondary" : ""
          }`
        )}
        ref={ref}
      >
        {theme === "dark" ? (
          <Sun
            className="m-auto h-full transition-all rotate-0 scale-100"
            role="img"
            aria-label="toggle light mode"
          />
        ) : (
          <Moon
            className="m-auto h-full transition-all rotate-0 scale-100"
            role="img"
            aria-label="toggle dark mode"
          />
        )}
      </Button>
    );
  }
);

ModeButton.displayName = "ModeButton";

export { ModeButton };
