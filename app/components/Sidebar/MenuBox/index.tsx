import Link from "next/link";

type MenuType = {
  title: "Posts" | "Resume";
  href: "/posts" | "/resume";
};

export default function MenuBox() {
  const Menu: MenuType[] = [
    {
      title: "Posts",
      href: "/posts",
    },
    {
      title: "Resume",
      href: "/resume",
    },
  ];

  return (
    <nav className="mt-4">
      <ul className="flex flex-col gap-1">
        {Menu.map((menu) => (
          <li key={menu.title}>
            <Link
              href={menu.href}
              className="py-2 text-base font-medium text-slate-600 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
            >
              {menu.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
