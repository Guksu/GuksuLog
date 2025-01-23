import { RecentPosts, Sidebar } from "./components";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar />
      <main className="w-full md:w-3/5 p-8">
        <RecentPosts />
      </main>
    </div>
  );
}
