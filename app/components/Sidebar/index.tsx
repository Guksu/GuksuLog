import { DarkModeToggle } from "@/components";
import IconBox from "./IconBox";
import MenuBox from "./MenuBox";
import ProfileBox from "./ProfileBox";

export default function Sidebar() {
  return (
    <aside className="w-full md:w-2/5">
      <div className="flex flex-col gap-3 p-8">
        <ProfileBox />
        <div className="flex gap-5 items-center mt-2">
          <IconBox />
          <DarkModeToggle />
        </div>
        <MenuBox />
      </div>
    </aside>
  );
}
