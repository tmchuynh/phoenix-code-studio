"use client";

import {
  loadSidebarState,
  saveSidebarState,
  SIDEBAR_KEYBOARD_SHORTCUT,
} from "@/lib/utils/sidebar";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  // Initialize sidebar state from localStorage or default to true for desktop
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mounted, setMounted] = useState(false);

  // Load sidebar preference from localStorage on mount
  useEffect(() => {
    const savedState = loadSidebarState(true);
    setSidebarOpen(savedState);
    setMounted(true);
  }, []);

  // Save sidebar state to localStorage whenever it changes
  useEffect(() => {
    if (mounted) {
      saveSidebarState(sidebarOpen);
    }
  }, [sidebarOpen, mounted]);

  // Add keyboard shortcut for toggling sidebar (Ctrl/Cmd + B)
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        (event.ctrlKey || event.metaKey) &&
        event.key === SIDEBAR_KEYBOARD_SHORTCUT
      ) {
        event.preventDefault();
        toggleSidebar();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />

      {/* Main content area */}
      <div
        className={`flex flex-1 flex-col min-w-0 transition-all duration-300 ${
          sidebarOpen ? "lg:ml-96" : "lg:ml-0"
        }`}
      >
        {/* Top navbar */}
        <TopNavbar onToggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />

        {/* Main content */}
        <main className="flex-1">
          <div className="mx-auto px-4 lg:px-8 py-8">{children}</div>
        </main>
      </div>
    </div>
  );
}
