import { CallTextCtas } from "@/components/CallTextCtas";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { SERVICES } from "@/lib/constants";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { createMetadata } from "@/lib/seo";
import Link from "next/link";

const service = SERVICES.find((s) => s.slug === "landscaping")!;

export const metadata = createMetadata({
  title: "Landscaping in Dale City, VA | Four Seasonal Services",
  description:
    "Landscaping in Dale City, VA for homes & businesses. Mulch, beds, cleanups, and plantings. Call (703) 400-1671 for a free quote. Serving Prince William County.",
  path: service.href,
});

const faqs = [
  {
    q: "What landscaping jobs do you handle?",
    a: "Bed refresh, mulch, seasonal plantings, weeding, shrub shaping, and spring/fall cleanups for residential properties.",
  },
  {
    q: "Can you combine landscaping with mowing?",
    a: "Yes. Many customers keep weekly lawn care and schedule bed work or cleanups as needed through the year.",
  },
  {
    q: "Do you work across Prince William County?",
    a: "Yes—Dale City, Woodbridge, Manassas, and surrounding Prince William communities.",
  },
];

export default function LandscapingPage() {
  return (
    <>
      <JsonLd data={serviceSchema("landscaping")} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Landscaping", path: service.href },
        ])}
      />
      <PageHero
        compact
        defaultService="Landscaping"
        imageSrc={service.image}
        imageAlt={service.imageAlt}
        headline="Landscaping Services in Dale City, VA"
        support="Beds, mulch, plantings, and cleanups that keep curb appeal strong from spring through fall."
      />

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <SectionHeading
              eyebrow="Landscaping"
              title="Curb appeal that holds up in Prince William County"
              description="Northern Virginia yards take a beating from clay soil, summer heat, and heavy leaf drop. We focus on practical residential landscaping that looks good and stays manageable."
            />
            <ul className="mt-8 space-y-3">
              {service.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 text-ink">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-harvest" />
                  {bullet}
                </li>
              ))}
            </ul>
            <p className="mt-8 leading-relaxed text-muted">
              Keep the grass matching the beds with{" "}
              <Link href="/services/lawn-care" className="font-semibold text-canopy underline-offset-2 hover:underline">
                lawn care &amp; mowing
              </Link>
              . When winter arrives, stay covered with{" "}
              <Link href="/services/snow-removal" className="font-semibold text-canopy underline-offset-2 hover:underline">
                snow removal
              </Link>
              .
            </p>
          </div>
          <aside className="border border-line bg-snow p-6 md:p-8">
            <h2 className="font-display text-xl font-bold text-ink">
              Free landscaping quote
            </h2>
            <p className="mt-2 text-sm text-muted">
              Share photos of your beds or yard by text—fastest way to get a clear estimate.
            </p>
            <CallTextCtas className="mt-6 text-ink" />
          </aside>
        </div>

        <div className="mt-16">
          <h2 className="font-display text-2xl font-bold text-ink">Landscaping FAQ</h2>
          <dl className="mt-6 divide-y divide-line border-y border-line">
            {faqs.map((faq) => (
              <div key={faq.q} className="py-5">
                <dt className="font-semibold text-ink">{faq.q}</dt>
                <dd className="mt-2 text-muted leading-relaxed">{faq.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
