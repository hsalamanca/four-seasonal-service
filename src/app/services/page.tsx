import { CallTextCtas } from "@/components/CallTextCtas";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { SERVICES } from "@/lib/constants";
import { createMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";

export const metadata = createMetadata({
  title: "Lawn Care, Landscaping & Snow Removal Services",
  description:
    "Explore lawn care, landscaping, and snow removal from Four Seasonal Services in Dale City and Prince William County, VA. Call (703) 400-1671.",
  path: "/services",
});

export default function ServicesHubPage() {
  return (
    <>
      <PageHero
        compact
        imageSrc="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=2000&q=80"
        imageAlt="Green residential lawn and landscaping in suburban Virginia"
        headline="Services for every season"
        support="Lawn care, landscaping, and snow removal—built for Dale City and Prince William County homes."
      />

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <SectionHeading
          eyebrow="What we do"
          title="Pick the service you need"
          description="Each page covers what’s included, how we work locally, and how to get a fast quote."
        />
        <div className="mt-12 grid gap-10">
          {SERVICES.map((service) => (
            <Link
              key={service.slug}
              href={service.href}
              className="group grid overflow-hidden border border-line bg-snow md:grid-cols-[1.1fr_1fr]"
            >
              <div className="relative min-h-56">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-col justify-center p-6 md:p-8">
                <h2 className="font-display text-2xl font-bold text-ink">
                  {service.name}
                </h2>
                <p className="mt-3 text-muted leading-relaxed">{service.summary}</p>
                <span className="mt-5 text-sm font-semibold text-canopy">
                  View {service.shortName.toLowerCase()} details →
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-14">
          <CallTextCtas className="text-ink" />
        </div>
      </section>
    </>
  );
}
