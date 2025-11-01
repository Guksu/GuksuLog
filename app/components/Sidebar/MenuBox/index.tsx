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
    <nav className="mt-8">
      <ul className="flex flex-col gap-4">
        {Menu.map((menu) => (
          <li key={menu.title}>
            <Link
              href={menu.href}
              className="text-lg font-semibold text-slate-700 dark:text-slate-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
            >
              {menu.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
