import { RecentPosts, Sidebar } from "./components";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar />
      <main className="w-full md:w-3/5 px-8 py-10 md:py-16">
        <RecentPosts />
      </main>
    </div>
  );
}
