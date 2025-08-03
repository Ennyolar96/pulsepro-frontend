import { SitemapStream, streamToPromise } from "sitemap";
import fs from "fs";

// Define your URLs here
const urls = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/about-us", changefreq: "monthly", priority: 0.7 },
  { url: "/contact-us", changefreq: "monthly", priority: 0.7 },
  { url: "/training", changefreq: "daily", priority: 1.0 },
  { url: "/career", changefreq: "weekly", priority: 0.7 },
  { url: "/news", changefreq: "daily", priority: 1.0 },
  { url: "/new/:slug", changefreq: "daily", priority: 1.0 },
  { url: "/galleries", changefreq: "monthly", priority: 0.7 },
  // Add more URLs as needed
];

const sitemapStream = new SitemapStream({
  hostname: "https://pulsepronigeria.com",
});

streamToPromise(sitemapStream)
  .then((data) => {
    fs.writeFileSync("./public/sitemap.xml", data.toString());
    console.log("Sitemap generated: /public/sitemap.xml");
  })
  .catch((error) => {
    console.error("Error generating sitemap:", error);
  });

// Write URLs to the sitemap
urls.forEach((url) => sitemapStream.write(url));
sitemapStream.end();
