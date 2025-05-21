"use client";

import { useDarkModeStore } from "@/store/darkModeStore";
import { useRouter, usePathname } from "next/navigation";

export default function BackBtn() {
  const router = useRouter();
  const pathname = usePathname();

  const { isDarkMode } = useDarkModeStore();

  const handleBack = () => {
    const dynamicPostRegex = /^\/posts\/\d+$/;
    if (dynamicPostRegex.test(pathname)) {
      router.replace("/posts");
    } else {
      router.replace("/");
    }
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
