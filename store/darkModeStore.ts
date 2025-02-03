import { create } from "zustand";

interface DarkModeState {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const useDarkModeStore = create<DarkModeState>((set) => ({
  isDarkMode: false,
  toggleDarkMode: () => {
    set((state) => {
      const newDarkModeState = !state.isDarkMode;
      if (newDarkModeState) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return { isDarkMode: newDarkModeState };
    });
  },
}));
