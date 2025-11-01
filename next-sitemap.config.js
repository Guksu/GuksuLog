/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const siteUrl = "https://www.guksulog.com/";

async function getPosts() {
  const postsDir = path.join(__dirname, "posts");
  const files = fs.readdirSync(postsDir);

  const posts = files
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
    .map((filename) => {
      const filePath = path.join(postsDir, filename);
      const fileContents = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContents);

      return {
        slug: filename.replace(/\.mdx?$/, ""),
        lastmod: data.date || new Date().toISOString(),
      };
    });

  return posts;
}

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: "daily",
  priority: 0.7,

  additionalPaths: async () => {
    const posts = await getPosts();

    return posts.map((post) => ({
      loc: `/posts/${post.slug}`,
      lastmod: post.lastmod,
      priority: 1,
    }));
  },
};
