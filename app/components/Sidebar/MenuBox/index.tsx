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
    <nav className="mt-6">
      <ul className="flex flex-col gap-2">
        {Menu.map((menu) => (
          <li key={menu.title}>
            <Link
              href={menu.href}
              className="text-gray-700 dark:text-gray-300 font-mono hover:text-teal-400 dark:hover:text-teal-300"
            >
              {menu.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
