module.exports = {
  // siteUrl: "https://guksu-log.vercel.app/",
  siteUrl: "http://localhost:3000/",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "daily",
  priority: 1,
  exclude: ["/server-sitemap-index.xml"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [],
      },
    ],
    additionalSitemaps: ["http://localhost:3000/server-sitemap-index.xml"],
  },
};
