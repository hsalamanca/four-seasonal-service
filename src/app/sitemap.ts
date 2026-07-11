import type { MetadataRoute } from "next";
import { AREAS, BUSINESS, SERVICES } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    "",
    "/services",
    "/areas",
    "/about",
    "/contact",
    "/privacy",
  ].map((path) => ({
    url: `${BUSINESS.domain}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const serviceRoutes = SERVICES.map((service) => ({
    url: `${BUSINESS.domain}${service.href}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const areaRoutes = AREAS.map((area) => ({
    url: `${BUSINESS.domain}${area.href}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: area.slug === "dale-city" ? 0.9 : 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes, ...areaRoutes];
}
