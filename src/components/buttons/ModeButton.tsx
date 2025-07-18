"use client";
import { Toggle } from "@radix-ui/react-toggle";
import { useTheme } from "next-themes";
import { JSX, useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

/**
 * A component that provides a theme toggle button to switch between light and dark modes.
 *
 * @component
 * @example
 * ```tsx
 * <ThemeToggle />
 * ```
 *
 * @returns {JSX.Element | null} A toggle button component that switches between light/dark themes,
 * or null if the component hasn't mounted yet.
 *
 * @remarks
 * This component uses the useTheme hook to manage theme state.
 * It handles system theme preferences and persists user theme choices.
 * The component renders a toggle button with sun/moon icons depending on the current theme.
 * Component mounts with a null render to prevent hydration issues.
 */
export const ModeButton = (): JSX.Element | null => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!theme || theme === "system") {
      setTheme(systemTheme || "light");
    }
  }, [systemTheme, theme, setTheme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="z-10 flex items-center bg-primary/50 mx-4 rounded-lg text-accent dark:text-tertiary">
      <p className="sr-only">Toggle theme</p>
      <Toggle
        aria-label="Toggle theme"
        onClick={toggleTheme}
        className="flex justify-center items-center hover:bg-muted p-2 border hover:border-secondary border-transparent rounded-lg hover:text-secondary"
      >
        {currentTheme === "dark" ? (
          <>
            <p className="sr-only">Toggle to dark mode</p>
            <FiMoon className="w-4 h-4" />
          </>
        ) : (
          <>
            <p className="sr-only">Toggle to light mode</p>
            <FiSun className="w-4 h-4" />
          </>
        )}
      </Toggle>
    </div>
  );
};
