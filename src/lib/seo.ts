import type { Metadata } from "next";
import { BUSINESS } from "./constants";

const SITE_NAME = BUSINESS.name;

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  return `${BUSINESS.domain}${path.startsWith("/") ? path : `/${path}`}`;
}

type PageSeo = {
  title: string;
  description: string;
  path: string;
};

export function createMetadata({
  title,
  description,
  path,
}: PageSeo): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(BUSINESS.domain),
  title: {
    default: `${BUSINESS.name} | Landscaping Dale City, VA`,
    template: `%s | ${BUSINESS.name}`,
  },
  description:
    "Lawn care, landscaping, and snow removal in Dale City and Prince William County, VA. Call or text (703) 400-1671 for a free quote.",
  applicationName: BUSINESS.name,
  keywords: [
    "landscaping Dale City VA",
    "lawn care Dale City",
    "lawn mowing Prince William County",
    "snow removal Dale City",
    "Four Seasonal Services",
  ],
  authors: [{ name: BUSINESS.name }],
  creator: BUSINESS.name,
  publisher: BUSINESS.name,
  formatDetection: { telephone: true, email: false, address: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BUSINESS.domain,
    siteName: BUSINESS.name,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};
