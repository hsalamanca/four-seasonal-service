import { AREAS, BUSINESS, SERVICES } from "./constants";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": `${BUSINESS.domain}/#business`,
    name: BUSINESS.name,
    url: BUSINESS.domain,
    telephone: BUSINESS.phoneTel,
    image: `${BUSINESS.domain}/opengraph-image`,
    logo: `${BUSINESS.domain}/icon-512.png`,
    priceRange: BUSINESS.priceRange,
    description:
      "Year-round lawn care, landscaping, and snow removal for Dale City and Prince William County, Virginia.",
    address: {
      "@type": "PostalAddress",
      addressLocality: BUSINESS.city,
      addressRegion: BUSINESS.region,
      postalCode: BUSINESS.postalCode,
      addressCountry: "US",
    },
    areaServed: [
      { "@type": "City", name: "Dale City" },
      { "@type": "City", name: "Woodbridge" },
      { "@type": "City", name: "Manassas" },
      { "@type": "AdministrativeArea", name: "Prince William County" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [...BUSINESS.hours.days],
        opens: BUSINESS.hours.opens,
        closes: BUSINESS.hours.closes,
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Outdoor property services",
      itemListElement: SERVICES.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          url: `${BUSINESS.domain}${service.href}`,
          description: service.description,
        },
      })),
    },
  };
}

export function serviceSchema(slug: (typeof SERVICES)[number]["slug"]) {
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return null;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    serviceType: service.name,
    description: service.description,
    url: `${BUSINESS.domain}${service.href}`,
    provider: { "@id": `${BUSINESS.domain}/#business` },
    areaServed: AREAS.map((area) => ({
      "@type": area.slug === "prince-william-county" ? "AdministrativeArea" : "City",
      name: area.name,
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${BUSINESS.domain}${item.path}`,
    })),
  };
}

export function contactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact ${BUSINESS.name}`,
    url: `${BUSINESS.domain}/contact`,
    mainEntity: { "@id": `${BUSINESS.domain}/#business` },
  };
}
