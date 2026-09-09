import { CallTextCtas } from "@/components/CallTextCtas";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { AREAS, IMAGES, SERVICES } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/schema";
import { createMetadata } from "@/lib/seo";
import Link from "next/link";

type AreaSlug = (typeof AREAS)[number]["slug"];

const areaCopy: Record<
  AreaSlug,
  {
    title: string;
    metaTitle: string;
    metaDescription: string;
    headline: string;
    intro: string;
    localNote: string;
  }
> = {
  "dale-city": {
    title: "Dale City",
    metaTitle: "Dale City Landscaping, Lawn Care & Snow Removal",
    metaDescription:
      "Dale City landscaping, lawn care, and snow removal from Four Seasonal Services. Call or text (703) 400-1671 for a free quote in Prince William County.",
    headline: "Landscaping & Lawn Care in Dale City, VA",
    intro:
      "Four Seasonal Services is based around Dale City—serving local neighborhoods with weekly lawn care, residential landscaping, and winter snow removal.",
    localNote:
      "From quieter cul-de-sacs off Minnieville Road to busier corridors near the Prince William Parkway, Dale City yards need a crew that shows up on a schedule and knows suburban HOA expectations.",
  },
  "prince-william-county": {
    title: "Prince William County",
    metaTitle: "Prince William County Landscaping & Lawn Care",
    metaDescription:
      "Landscaping, lawn care, and snow removal across Prince William County, VA. Call Four Seasonal Services at (703) 400-1671 for a free quote.",
    headline: "Landscaping Services in Prince William County, VA",
    intro:
      "Year-round property care across Prince William County—lawn mowing, landscaping, and snow clearing from one local team.",
    localNote:
      "Prince William covers a lot of ground. We focus on reliable residential routes so you get consistent service whether you’re closer to Dale City, Woodbridge, or Manassas.",
  },
  woodbridge: {
    title: "Woodbridge",
    metaTitle: "Woodbridge VA Landscaping & Lawn Care | Four Seasonal",
    metaDescription:
      "Woodbridge VA landscaping, lawn care, and snow removal. Call or text Four Seasonal Services at (703) 400-1671 for a free quote.",
    headline: "Landscaping & Lawn Care in Woodbridge, VA",
    intro:
      "Lawn mowing, landscaping, and snow removal for Woodbridge homes—backed by a Dale City / Prince William local crew.",
    localNote:
      "Woodbridge properties benefit from steady growing-season maintenance and a snow plan before winter storms stack up on driveways and walks.",
  },
  manassas: {
    title: "Manassas",
    metaTitle: "Manassas VA Landscaping & Lawn Care | Four Seasonal",
    metaDescription:
      "Manassas VA landscaping, lawn care, and snow removal from Four Seasonal Services. Call (703) 400-1671 for a free quote.",
    headline: "Landscaping & Lawn Care in Manassas, VA",
    intro:
      "Reliable lawn care, landscaping, and snow services for Manassas and nearby Prince William County communities.",
    localNote:
      "Whether you need weekly mowing or a pre-season snow standby, we keep communication simple: call or text and we’ll get you scheduled.",
  },
};

export function generateAreaMetadata(slug: AreaSlug) {
  const copy = areaCopy[slug];
  const area = AREAS.find((a) => a.slug === slug)!;
  return createMetadata({
    title: copy.metaTitle,
    description: copy.metaDescription,
    path: area.href,
  });
}

export function AreaPage({ slug }: { slug: AreaSlug }) {
  const copy = areaCopy[slug];
  const area = AREAS.find((a) => a.slug === slug)!;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Areas", path: "/areas" },
          { name: copy.title, path: area.href },
        ])}
      />
      <PageHero
        compact
        defaultCity={copy.title}
        imageSrc={IMAGES.neighborhood}
        imageAlt={`Residential property care in ${copy.title}, Virginia`}
        headline={copy.headline}
        support={copy.intro}
      />

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <SectionHeading
          eyebrow={copy.title}
          title={`Property care for ${copy.title} neighbors`}
          description={copy.localNote}
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {SERVICES.map((service) => (
            <Link
              key={service.slug}
              href={service.href}
              className="border-b border-line pb-5 transition hover:border-canopy"
            >
              <h2 className="font-display text-xl font-bold text-ink">
                {service.shortName}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {service.summary}
              </p>
              <span className="mt-4 inline-block text-sm font-semibold text-canopy">
                {service.shortName} details →
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-14 border border-line bg-snow p-6 md:p-8">
          <h2 className="font-display text-2xl font-bold text-ink">
            Get a free quote for {copy.title}
          </h2>
          <p className="mt-2 max-w-2xl text-muted">
            Call or text with your address and the service you need. We reply
            with clear next steps for lawn care, landscaping, or snow removal.
          </p>
          <CallTextCtas className="mt-6 text-ink" />
        </div>
      </section>
    </>
  );
}
