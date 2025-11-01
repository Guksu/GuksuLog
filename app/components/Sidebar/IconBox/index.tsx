"use client";

import { useDarkModeStore } from "@/store/darkModeStore";

type ICONS = {
  title: "github" | "linkedin" | "email";
  href: string;
  src: string;
  type: "web" | "mail";
};

export default function IconBox() {
  const { isDarkMode } = useDarkModeStore();

  const ICONS: ICONS[] = [
    {
      title: "github",
      href: "https://github.com/Guksu",
      src: `/icons/github_${isDarkMode ? "white" : "dark"}.svg`,
      type: "web",
    },
    {
      title: "linkedin",
      href: "https://www.linkedin.com/in/%EC%A2%85%EB%AF%BC-%EA%B9%80-1104a8347/",
      src: `/icons/linkedin_${isDarkMode ? "white" : "dark"}.svg`,
      type: "web",
    },
    {
      title: "email",
      href: "yung3152@gmail.com",
      src: `/icons/mail_${isDarkMode ? "white" : "dark"}.svg`,
      type: "mail",
    },
  ];

  return (
    <ul className="flex gap-4">
      {ICONS.map((icon) => (
        <li
          key={icon.title}
          className="relative group border-2 border-gray-200 dark:border-gray-700 rounded-full hover:border-teal-500 dark:hover:border-teal-400 transition-colors shadow-sm"
        >
          <a
            href={icon.type === "web" ? icon.href : `mailto:${icon.href}`}
            target={icon.type === "web" ? "_blank" : "_self"}
            rel="noreferrer"
            className="block"
          >
            <img
              src={icon.src}
              alt={icon.title}
              className="p-2 w-10 h-10"
            />
          </a>
          <span className="pointer-events-none absolute bottom-[-38px] left-1/2 transform -translate-x-1/2 bg-slate-800 dark:bg-slate-700 text-white text-xs font-medium py-1.5 px-3 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-lg">
            {icon.title}
          </span>
        </li>
      ))}
    </ul>
  );
}
