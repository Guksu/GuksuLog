"use client";

import { useDarkModeStore } from "@/store/darkModeStore";
import { useRouter } from "next/navigation";

export default function BackBtn() {
  const router = useRouter();
  const { isDarkMode } = useDarkModeStore();

  const handleBack = () => {
    router.back();
  };

  return (
    <img
      src={`/icons/arrow-left_${isDarkMode ? "white" : "dark"}.svg`}
      alt="back"
      className="cursor-pointer"
      onClick={handleBack}
    />
  );
}
