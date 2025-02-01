"use client";

import { useDarkModeStore } from "@/store/darkModeStore";

export default function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkModeStore();

  return (
    <button onClick={toggleDarkMode}>
      <img
        src={`/icons/${isDarkMode ? "sun" : "moon"}.svg`}
        alt="darkMode-icon"
      />
    </button>
  );
}
