import type { MetadataRoute } from "next";
import { BUSINESS } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/wp-admin",
          "/wp-login.php",
          "/xmlrpc.php",
          "/.env",
          "/.git",
        ],
      },
      {
        userAgent: [
          "GPTBot",
          "CCBot",
          "Bytespider",
          "Amazonbot",
          "ClaudeBot",
          "dataforseo",
        ],
        disallow: "/",
      },
    ],
    sitemap: `${BUSINESS.domain}/sitemap.xml`,
    host: BUSINESS.domain,
  };
}
