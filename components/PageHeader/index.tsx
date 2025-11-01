"use client";

import { useRouter, usePathname } from "next/navigation";
import BackBtn from "../BackBtn";
import DarkModeToggle from "../DarkModeToggle";

interface Props {
  headerTitle: string;
}

export default function PageHeader({ headerTitle }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  const handleClickTitle = () => {
    if (pathname.includes("/posts")) {
      router.replace("/posts");
    } else {
      router.replace("/");
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-10 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="flex items-center justify-between max-w-3xl mx-auto py-4 px-5">
        <div className="w-20 flex items-center">
          <BackBtn />
        </div>
        <div className="flex-grow text-center">
          <h2
            className="font-bold text-2xl text-teal-500 cursor-pointer transition-colors hover:text-teal-600 dark:hover:text-teal-400"
            onClick={handleClickTitle}
          >
            {headerTitle}
          </h2>
        </div>
        <div className="w-20 flex items-center justify-end">
          <DarkModeToggle />
        </div>
      </div>
    </header>
  );
}
