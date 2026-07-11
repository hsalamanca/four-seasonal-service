import { CallTextCtas } from "@/components/CallTextCtas";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { AREAS, BUSINESS, SERVICES } from "@/lib/constants";
import { createMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";

export const metadata = createMetadata({
  title: "Four Seasonal Services | Landscaping Dale City, VA",
  description:
    "Year-round landscaping, lawn care, and snow removal in Dale City and Prince William County, VA. Call or text (703) 400-1671 for a free quote.",
  path: "/",
});

const steps = [
  {
    title: "Request a quote",
    copy: "Call or text with your address and what you need. Same-day replies are the goal.",
  },
  {
    title: "We schedule it",
    copy: "Clear timing, no runaround—weekly mowing routes or a one-time cleanup.",
  },
  {
    title: "We show up",
    copy: "Local crew, clean work, and a yard that looks like someone actually cares.",
  },
];

const faqs = [
  {
    q: "What areas do you serve?",
    a: "Dale City is home base. We also serve Woodbridge, Manassas, and homes across Prince William County.",
  },
  {
    q: "Do you offer year-round service?",
    a: "Yes. Lawn care and landscaping in the growing season, snow removal when winter hits—one local team for every season.",
  },
  {
    q: "How do I get a quote?",
    a: `Call or text ${BUSINESS.phoneDisplay}. Prefer text? Send your address and a quick note about the service you need.`,
  },
  {
    q: "Can I book lawn care and snow removal together?",
    a: "Absolutely. Many neighbors lock in summer mowing and fall snow standby so they don’t scramble when the first storm lands.",
  },
];

export default function HomePage() {
  return (
    <>
      <PageHero
        brandFirst
        imageSrc="https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=2000&q=80"
        imageAlt="Freshly mowed suburban lawn at dawn in Northern Virginia"
        headline={BUSINESS.tagline}
        support="Lawn, landscape, and snow removal for Dale City & Prince William County."
      />

      <section className="border-b border-line bg-snow">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-4 text-sm text-muted md:px-8">
          <p>Local to Dale City &amp; Prince William County</p>
          <p>Call or text for same-day quotes</p>
          <p>Lawn · Landscape · Snow</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading
          eyebrow="Year-round services"
          title="One crew for every season"
          description="From weekly mowing to bed refresh to driveway snow clearing—you shouldn’t need three different vendors."
        />

        <div className="mt-14 space-y-16">
          {SERVICES.map((service, index) => (
            <article
              key={service.slug}
              className={`grid items-center gap-8 md:grid-cols-2 ${
                index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-ink md:text-3xl">
                  {service.name}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted">
                  {service.summary}
                </p>
                <ul className="mt-5 space-y-2 text-sm text-ink">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-canopy-mid" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.href}
                  className="mt-6 inline-flex text-sm font-semibold text-canopy underline-offset-4 hover:underline"
                >
                  Learn about {service.shortName.toLowerCase()}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-canopy-deep py-20 text-snow md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <SectionHeading
            tone="light"
            eyebrow="How we work"
            title="Simple, neighborly, reliable"
            description="No corporate runaround—just clear communication and work that shows up on schedule."
          />
          <ol className="mt-14 grid gap-10 md:grid-cols-3">
            {steps.map((step, i) => (
              <li key={step.title}>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-frost">
                  Step {i + 1}
                </p>
                <h3 className="mt-3 font-display text-xl font-bold">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-snow/75">
                  {step.copy}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading
          eyebrow="Service area"
          title="Serving Dale City & Prince William County"
          description="We know the neighborhoods, the clay soil, and the HOA curb standards. Local routes mean we can show up when it counts."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {AREAS.map((area) => (
            <Link
              key={area.slug}
              href={area.href}
              className="border-b border-line py-4 transition hover:border-canopy"
            >
              <p className="font-display text-lg font-bold text-ink">{area.name}</p>
              <p className="mt-2 text-sm text-muted">{area.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-snow py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <SectionHeading
            eyebrow="What neighbors say"
            title="Trusted for yards that stay cared for"
            description="Real feedback from homeowners who want one reliable team—not a rotating cast of no-shows."
          />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                quote:
                  "They keep our lawn looking sharp every week. Easy to text and always on schedule.",
                name: "Homeowner",
                place: "Dale City",
              },
              {
                quote:
                  "Booked spring cleanup and later snow removal with the same crew. That alone is worth it.",
                name: "Homeowner",
                place: "Woodbridge",
              },
              {
                quote:
                  "Driveway was clear after the storm. Clear communication, fair quote, solid work.",
                name: "Homeowner",
                place: "Prince William County",
              },
            ].map((item) => (
              <blockquote
                key={item.place + item.quote.slice(0, 12)}
                className="border-l-2 border-canopy-mid/40 pl-5"
              >
                <p className="text-base leading-relaxed text-ink">“{item.quote}”</p>
                <footer className="mt-4 text-sm text-muted">
                  {item.name} · {item.place}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading
          eyebrow="FAQ"
          title="Quick answers before you call"
        />
        <dl className="mt-10 divide-y divide-line border-y border-line">
          {faqs.map((faq) => (
            <div key={faq.q} className="grid gap-3 py-6 md:grid-cols-[1fr_1.4fr]">
              <dt className="font-display text-lg font-bold text-ink">{faq.q}</dt>
              <dd className="text-muted leading-relaxed">{faq.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="bg-canopy py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-5 text-snow md:px-8">
          <h2 className="max-w-2xl font-display text-3xl font-bold md:text-4xl">
            Ready for a yard that stays cared for?
          </h2>
          <p className="mt-4 max-w-xl text-snow/80">
            Call or text {BUSINESS.phoneDisplay} for a free quote. Lawn care,
            landscaping, and snow removal—Dale City and Prince William County.
          </p>
          <CallTextCtas className="mt-8" size="lg" />
        </div>
      </section>
    </>
  );
}
