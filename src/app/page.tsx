import { CallTextCtas } from "@/components/CallTextCtas";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { AREAS, BUSINESS, IMAGES, OFFER, SEASONS, SERVICES, TRUST } from "@/lib/constants";
import { createMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";

export const metadata = createMetadata({
  title: "Four Seasonal Services | Landscaping Dale City, VA",
  description:
    "Lawn care, landscaping, and snow removal in Dale City and Prince William County, VA. Free quotes. Call or text (703) 400-1671.",
  path: "/",
});

const steps = [
  {
    title: "Send the property",
    copy: "Address, service, and a photo if you have one. Takes under a minute.",
  },
  {
    title: "Get a clear quote",
    copy: "We reply the same day whenever we can—no runaround, no fake online pricing.",
  },
  {
    title: "We show up on the route",
    copy: "Local crew, clean edges, and a yard that looks like someone actually cares.",
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
    q: "How fast can I get a quote?",
    a: `Use the form or call ${BUSINESS.phoneDisplay}. Same-day replies are the goal during ${BUSINESS.hours.label}.`,
  },
  {
    q: "Can I book lawn care and snow removal together?",
    a: "Yes. Many neighbors lock in summer mowing and fall snow standby so they don’t scramble when the first storm lands.",
  },
];

export default function HomePage() {
  return (
    <>
      <PageHero
        brandFirst
        imageSrc={IMAGES.hero}
        imageAlt="Freshly mowed suburban lawn at golden hour in Northern Virginia"
        headline="A yard that stays finished. Every season."
        support="Lawn, landscape, and snow removal for Dale City and Prince William County. Free quotes—we call you back."
      />

      <section className="border-b border-line bg-snow">
        <div className="mx-auto grid max-w-6xl gap-3 px-5 py-4 text-sm text-muted sm:grid-cols-2 md:grid-cols-4 md:px-8">
          {TRUST.map((item) => (
            <p key={item} className="font-medium text-ink">
              {item}
            </p>
          ))}
        </div>
      </section>

      <section className="bg-canopy-deep">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-10 md:grid-cols-[1.2fr_0.8fr] md:px-8 md:py-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-frost">
              {OFFER.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-snow md:text-4xl">
              {OFFER.title}
            </h2>
            <p className="mt-4 max-w-xl text-snow/75">{OFFER.copy}</p>
          </div>
          <CallTextCtas className="text-snow" size="lg" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading
          eyebrow="Year-round services"
          title="One crew for every season"
          description="From weekly mowing to bed refresh to driveway snow clearing—you shouldn’t need three different vendors."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {SERVICES.map((service) => (
            <article
              key={service.slug}
              className="overflow-hidden rounded-lg bg-snow shadow-[0_18px_40px_rgba(12,31,25,0.08)]"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-semibold text-ink">
                  {service.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
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
                  {service.shortName} details
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-snow py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <SectionHeading
            eyebrow="The year on your property"
            title="We don’t disappear after mowing season"
            description="A Dale City yard needs a different crew in March than it does in January. You get the same people."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SEASONS.map((season) => (
              <article key={season.name} className="overflow-hidden rounded-md bg-mist">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={season.image}
                    alt={`${season.name} property care`}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {season.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{season.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-canopy-deep py-20 text-snow md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <SectionHeading
            tone="light"
            eyebrow="How it works"
            title="Quote today. On the route this week."
            description="No portal. No call center. You talk to the people who show up."
          />
          <ol className="mt-14 grid gap-10 md:grid-cols-3">
            {steps.map((step, i) => (
              <li key={step.title}>
                <p className="font-display text-4xl font-semibold text-harvest/90">
                  0{i + 1}
                </p>
                <h3 className="mt-3 font-display text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-snow/75">{step.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
            <Image
              src={IMAGES.neighborhood}
              alt="Tree-lined Dale City neighborhood with tidy front lawns"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Service area"
              title="Dale City first. Prince William always."
              description="We know the neighborhoods, the clay soil, and the HOA curb standards. Local routes mean we can show up when it counts."
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {AREAS.map((area) => (
                <Link
                  key={area.slug}
                  href={area.href}
                  className="rounded-md border border-line bg-snow px-4 py-4 transition hover:border-canopy"
                >
                  <p className="font-display text-lg font-semibold text-ink">{area.name}</p>
                  <p className="mt-1 text-sm text-muted">{area.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-snow py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <SectionHeading
            eyebrow="What neighbors say"
            title="Trusted for yards that stay cared for"
            description="Homeowners who want one reliable team—not a rotating cast of no-shows."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
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
                className="rounded-md border border-line bg-mist p-6"
              >
                <p className="text-base leading-relaxed text-ink">“{item.quote}”</p>
                <footer className="mt-5 text-sm text-muted">
                  {item.name} · {item.place}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading eyebrow="FAQ" title="Quick answers before you call" />
        <dl className="mt-10 divide-y divide-line border-y border-line">
          {faqs.map((faq) => (
            <div key={faq.q} className="grid gap-3 py-6 md:grid-cols-[1fr_1.4fr]">
              <dt className="font-display text-lg font-semibold text-ink">{faq.q}</dt>
              <dd className="leading-relaxed text-muted">{faq.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="relative overflow-hidden bg-canopy-deep py-20 md:py-24">
        <Image
          src={IMAGES.craft}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="relative mx-auto max-w-6xl px-5 text-snow md:px-8">
          <h2 className="max-w-2xl font-display text-3xl font-semibold md:text-5xl">
            Ready for a yard that stays cared for?
          </h2>
          <p className="mt-4 max-w-xl text-snow/80">
            Free quote for lawn care, landscaping, and snow removal in Dale City
            and Prince William County.
          </p>
          <CallTextCtas className="mt-8" size="lg" />
        </div>
      </section>
    </>
  );
}
