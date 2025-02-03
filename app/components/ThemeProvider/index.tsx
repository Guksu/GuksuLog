"use client";

import { useDarkModeStore } from "@/store/darkModeStore";
import { useEffect } from "react";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isDarkMode } = useDarkModeStore();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return <>{children}</>;
}
