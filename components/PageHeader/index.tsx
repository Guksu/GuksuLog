import BackBtn from "../BackBtn";
import DarkModeToggle from "../DarkModeToggle";

interface Props {
  headerTitle?: string;
}

export default function PageHeader({ headerTitle }: Props) {
  return (
    <header className="fixed top-0 left-0 w-full z-10 bg-white dark:bg-slate-800">
      <div className="flex items-center justify-between max-w-5xl mx-auto py-10 px-5">
        <div className="w-16 flex items-center">
          <BackBtn />
        </div>
        <div className="flex-grow text-center">
          <p className="font-mono font-semibold text-xl text-teal-500">
            {headerTitle}
          </p>
        </div>
        <div className="w-16 flex items-center">
          <DarkModeToggle />
        </div>
      </div>
    </header>
  );
}
