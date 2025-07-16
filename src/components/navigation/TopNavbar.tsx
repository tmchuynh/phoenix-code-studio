"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import CommandSearch from "./CommandSearch";

interface TopNavbarProps {
  onToggleSidebar: () => void;
  sidebarOpen: boolean;
}

export default function TopNavbar({
  onToggleSidebar,
  sidebarOpen,
}: TopNavbarProps) {
  const [commandOpen, setCommandOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Ensure component is mounted before showing theme-dependent content
  useEffect(() => {
    setMounted(true);
  }, []);

  // Keyboard shortcut for command palette
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setCommandOpen(true);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleSearchClick = () => {
    setCommandOpen(true);
  };

  return (
    <header
      className={cn(
        "fixed right-0 top-0 z-[60] bg-background dark:bg-background-dark shadow-sm border-b border-border h-16 duration-500 transition-all ease-in-out",
        {
          "w-full left-0": !sidebarOpen,
          "w-[calc(100%-25rem)] left-[25rem]": sidebarOpen,
        }
      )}
    >
      <div className="flex items-center justify-between px-4 lg:px-6 py-3">
        {/* Left side - Mobile menu button */}
        <div className="flex items-center">
          {/* Mobile toggle button */}
          <button
            onClick={onToggleSidebar}
            className="lg:hidden hover:bg-gray-100 dark:hover:bg-gray-800 -ml-2 p-2 rounded-md text-gray-500 hover:text-gray-700 dark:hover:text-gray-200 dark:text-gray-400"
            aria-label="Toggle sidebar"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Desktop toggle button */}
          <button
            onClick={onToggleSidebar}
            className="lg:flex hidden hover:bg-gray-100 dark:hover:bg-gray-800 -ml-2 p-2 rounded-md text-gray-500 hover:text-gray-700 dark:hover:text-gray-200 dark:text-gray-400 transition-colors"
            aria-label="Toggle sidebar"
            title={`${sidebarOpen ? "Hide" : "Show"} sidebar (Ctrl+B)`}
          >
            {sidebarOpen ? (
              // Hide sidebar icon (sidebar with arrow pointing left)
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
                />
              </svg>
            ) : (
              // Show sidebar icon (sidebar with arrow pointing right)
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 5l7 7-7 7M5 5l7 7-7 7"
                />
              </svg>
            )}
          </button>

          {/* Mobile logo - only visible when sidebar is closed */}
          <div className="lg:hidden ml-2">
            <div className="flex items-center space-x-2">
              <span className="font-bold text-lg">PCS</span>
            </div>
          </div>

          {/* Desktop logo - visible when sidebar is hidden */}
          {!sidebarOpen && (
            <div className="lg:flex hidden ml-2">
              <div className="flex items-center space-x-2 mb-1">
                <p className="font-bold text-sidebar-text text-xl">
                  Phoenix Code Studio
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Center - Search bar */}
        <div className="flex-1 mx-auto">
          <div className="relative flex justify-end w-[95%]">
            {/* Desktop search bar */}
            <div className="md:block hidden max-w-lg w-full">
              <Input
                className="mx-7 w-full cursor-pointer"
                type="text"
                placeholder="Search topics, categories, and pages..."
                value=""
                readOnly
                onClick={handleSearchClick}
              />
              <div className="absolute -right-5 top-1/2 text-muted-foreground text-xs -translate-y-1/2">
                <kbd className="inline-flex gap-1 items-center bg-muted opacity-100 px-1.5 border rounded h-5 font-medium font-mono text-[10px] text-muted-foreground pointer-events-none select-none">
                  <span className="text-xs">⌘</span>K
                </kbd>
              </div>
            </div>

            {/* Mobile search button */}
            <div className="md:hidden">
              <Button
                onClick={handleSearchClick}
                variant="outline"
                size="icon"
                className="shadow-none mx-auto"
                aria-label="Open search"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>

        {/* Right side - Theme toggle */}
        <div className="flex items-center space-x-4 ml-2">
          {/* Theme toggle */}
          <Button
            onClick={toggleTheme}
            size={"icon"}
            variant="outline"
            aria-label="Toggle theme"
            className="shadow-none"
          >
            {!mounted ? (
              // Placeholder icon while theme is loading
              <div className="h-5 w-5" />
            ) : theme === "dark" ? (
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </Button>
        </div>
      </div>

      {/* Command Search Dialog */}
      <CommandSearch open={commandOpen} onOpenChange={setCommandOpen} />
    </header>
  );
}
