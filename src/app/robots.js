export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/admin",
    },
    sitemap: "https://www.egyptfortravel.com/sitemap.xml",
  };
}
