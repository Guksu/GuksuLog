"use client";

import { useDarkModeStore } from "@/store/darkModeStore";
import { useEffect } from "react";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (prefersDarkMode) {
      useDarkModeStore.setState({ isDarkMode: prefersDarkMode });
      document.documentElement.classList.add("dark");
    }
  }, []);

  return <>{children}</>;
}
