import { CallTextCtas } from "@/components/CallTextCtas";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { SERVICES } from "@/lib/constants";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { createMetadata } from "@/lib/seo";
import Link from "next/link";

const service = SERVICES.find((s) => s.slug === "snow-removal")!;

export const metadata = createMetadata({
  title: "Snow Removal in Dale City & Prince William | Four Seasonal",
  description:
    "Snow removal in Dale City and Prince William County for driveways and walks. Pre-season standby and storm response. Call or text (703) 400-1671.",
  path: service.href,
});

const faqs = [
  {
    q: "When do you clear snow?",
    a: "We prioritize residential driveways and walks during and after storms. Ask about standby plans before winter so you’re not hunting for help overnight.",
  },
  {
    q: "Do you only plow commercial lots?",
    a: "No—our focus is residential driveways and walkways across Dale City and Prince William County. Ask if you need a commercial quote.",
  },
  {
    q: "Can summer lawn customers get priority snow service?",
    a: "Yes. Year-round customers are easier to schedule when the first storm hits—book lawn care now and lock snow standby in the fall.",
  },
];

export default function SnowRemovalPage() {
  return (
    <>
      <JsonLd data={serviceSchema("snow-removal")} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Snow Removal", path: service.href },
        ])}
      />
      <PageHero
        compact
        imageSrc={service.image}
        imageAlt={service.imageAlt}
        headline="Snow Removal in Dale City & Prince William County"
        support="Driveways and walks cleared when winter hits—so you’re not stuck waiting on a last-minute crew."
      />

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <SectionHeading
              eyebrow="Winter"
              title="Snow removal you can actually count on"
              description="Northern Virginia winters are unpredictable. The difference is having a local team already on your list—before the forecast turns."
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
              Keep the same crew year-round with{" "}
              <Link href="/services/lawn-care" className="font-semibold text-canopy underline-offset-2 hover:underline">
                lawn care in Dale City
              </Link>
              . Serving{" "}
              <Link href="/areas/prince-william-county" className="font-semibold text-canopy underline-offset-2 hover:underline">
                Prince William County
              </Link>
              , Woodbridge, and Manassas.
            </p>
          </div>
          <aside className="border border-line bg-snow p-6 md:p-8">
            <h2 className="font-display text-xl font-bold text-ink">
              Storm or standby quote
            </h2>
            <p className="mt-2 text-sm text-muted">
              Text your address when snow is coming—or reserve standby before the season.
            </p>
            <CallTextCtas
              className="mt-6 text-ink"
              smsBody="Hi — I need snow removal / winter standby in Dale City / Prince William."
            />
          </aside>
        </div>

        <div className="mt-16">
          <h2 className="font-display text-2xl font-bold text-ink">Snow removal FAQ</h2>
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
