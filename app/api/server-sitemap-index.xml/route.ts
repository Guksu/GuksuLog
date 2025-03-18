import { getServerSideSitemapIndex } from "next-sitemap";

export async function GET() {
  return getServerSideSitemapIndex([
    "http://localhost:3000/posts/1.xml",
    "http://localhost:3000/posts/2.xml",
    "http://localhost:3000/posts/3.xml",
    "http://localhost:3000/posts/4.xml",
    "http://localhost:3000/posts/5.xml",
    "http://localhost:3000/posts/6.xml",
    "http://localhost:3000/posts/7.xml",
    "http://localhost:3000/posts/8.xml",
    "http://localhost:3000/posts/9.xml",
    "http://localhost:3000/posts/10.xml",
    "http://localhost:3000/posts/11.xml",
    "http://localhost:3000/posts/12.xml",
  ]);
}
