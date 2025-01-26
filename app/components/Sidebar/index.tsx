import Link from "next/link";

type MenuType = {
  title: "Posts" | "Resume";
  href: "/posts" | "/resume";
};

type ICONS = {
  title: "github" | "linkedin" | "email";
  href: string;
  src: string;
  type: "web" | "mail";
};

export default function Sidebar() {
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

  const ICONS: ICONS[] = [
    {
      title: "github",
      href: "https://github.com/Guksu",
      src: "/icons/github.svg",
      type: "web",
    },
    {
      title: "linkedin",
      href: "https://www.linkedin.com/in/%EC%A2%85%EB%AF%BC-%EA%B9%80-1104a8347/",
      src: "/icons/linkedin.svg",
      type: "web",
    },
    {
      title: "email",
      href: "yung3152@gmail.com",
      src: "/icons/mail.svg",
      type: "mail",
    },
  ];

  return (
    <aside className="w-full md:w-2/5">
      <div className="flex flex-col gap-3 p-8">
        <img
          className="w-16 h-16 rounded-full"
          src="/common/profile.jpeg"
          alt="profile"
        />
        <h3 className="font-semibold text-base">김종민</h3>
        <p className="text-sm  text-gray-500">
          프론트엔드 개발자입니다.
          <br />
          개발하면서 발생한 이슈나 이야깃거리를 정리하고 있습니다
        </p>
        <div>
          <ul className="flex gap-6 mt-2">
            {ICONS.map((icon) => (
              <li
                key={icon.title}
                className="relative group border border-gray-200 rounded-full"
              >
                <a
                  href={icon.type === "web" ? icon.href : `mailto:${icon.href}`}
                  target={icon.type === "web" ? "_blank" : "_self"}
                  rel="noreferrer"
                  className="block "
                >
                  <img
                    src={icon.src}
                    alt={icon.title}
                    className="p-2 w-full h-full"
                  />
                </a>
                <span className="pointer-events-none absolute bottom-[-35px] left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {icon.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <nav className="mt-6">
          <ul className="flex flex-col gap-2">
            {Menu.map((menu) => (
              <li key={menu.title}>
                <Link
                  href={menu.href}
                  className="w-autu text-gray-700 font-mono hover:text-teal-400"
                >
                  {menu.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
