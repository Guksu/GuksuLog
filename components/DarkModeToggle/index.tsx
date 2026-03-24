"use client";

import { useDarkModeStore } from "@/store/darkModeStore";

export default function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkModeStore();

  return (
    <button onClick={toggleDarkMode} aria-label="Toggle dark mode">
      <img
        src={`/icons/${isDarkMode ? "sun" : "moon"}.svg`}
        alt="darkMode-icon"
        className="p-2 w-10 h-10"
      />
    </button>
  );
}
