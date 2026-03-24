import IconBox from "./IconBox";
import MenuBox from "./MenuBox";
import ProfileBox from "./ProfileBox";

export default function Sidebar() {
  return (
    <aside className="w-full md:w-2/5 md:sticky md:top-0 md:h-screen md:overflow-y-auto md:border-r md:border-gray-100 dark:md:border-gray-700/60">
      <div className="flex flex-col gap-6 p-8 md:py-16">
        <ProfileBox />
        <div className="flex gap-4 items-center mt-1">
          <IconBox />
        </div>
        <MenuBox />
      </div>
    </aside>
  );
}
