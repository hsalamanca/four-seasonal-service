import { CallTextCtas } from "@/components/CallTextCtas";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { SERVICES } from "@/lib/constants";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { createMetadata } from "@/lib/seo";
import Link from "next/link";

const service = SERVICES.find((s) => s.slug === "lawn-care")!;

export const metadata = createMetadata({
  title: "Lawn Care & Mowing in Dale City, VA | Four Seasonal",
  description:
    "Lawn care and lawn mowing in Dale City, VA for homes & businesses. Weekly cuts, edging, and cleanups. Call (703) 400-1671 for a free quote. Serving Prince William County.",
  path: service.href,
});

const faqs = [
  {
    q: "How often do you mow?",
    a: "Most Dale City lawns do best weekly in peak growth. Biweekly works for some yards—we’ll recommend based on your grass and schedule.",
  },
  {
    q: "What’s included in a standard visit?",
    a: "Mow, edge, trim, and blow-off hard surfaces. Ask about hedge trimming or cleanup add-ons when you text us.",
  },
  {
    q: "Do you serve Woodbridge and Manassas too?",
    a: "Yes. Lawn care routes cover Dale City, Woodbridge, Manassas, and broader Prince William County.",
  },
];

export default function LawnCarePage() {
  return (
    <>
      <JsonLd data={serviceSchema("lawn-care")} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Lawn Care", path: service.href },
        ])}
      />
      <PageHero
        compact
        defaultService="Lawn Care"
        imageSrc={service.image}
        imageAlt={service.imageAlt}
        headline="Lawn Care & Lawn Mowing in Dale City, VA"
        support="Consistent cuts, clean edges, and a yard that looks finished—not just shorter. Request a free quote."
      />

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <SectionHeading
              eyebrow="Lawn care"
              title="Weekly lawn service built for Northern Virginia yards"
              description="Cool-season turf in Dale City and Prince William County needs a steady rhythm—especially through spring growth and fall recovery. We keep the schedule simple and the finish clean."
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
              Looking for beds and mulch too? Pair lawn care with our{" "}
              <Link href="/services/landscaping" className="font-semibold text-canopy underline-offset-2 hover:underline">
                landscaping services
              </Link>
              . Prefer local details? See{" "}
              <Link href="/areas/dale-city" className="font-semibold text-canopy underline-offset-2 hover:underline">
                lawn care in Dale City
              </Link>
              .
            </p>
          </div>
          <aside className="rounded-md border border-line bg-snow p-6 md:p-8">
            <h2 className="font-display text-xl font-semibold text-ink">Get a lawn quote</h2>
            <p className="mt-2 text-sm text-muted">
              Use the form above or call. We’ll reply with next steps—no pressure, no fake online pricing.
            </p>
            <CallTextCtas className="mt-6 text-ink" />
          </aside>
        </div>

        <div className="mt-16">
          <h2 className="font-display text-2xl font-semibold text-ink">Lawn care FAQ</h2>
          <div className="mt-6">
            <FaqList items={faqs} />
          </div>
        </div>
      </section>
    </>
  );
}
