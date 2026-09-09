import { CallTextCtas } from "@/components/CallTextCtas";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { IMAGES, SERVICES } from "@/lib/constants";
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
        imageSrc={IMAGES.summer}
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
        <div className="mt-12 grid gap-8">
          {SERVICES.map((service) => (
            <Link
              key={service.slug}
              href={service.href}
              className="group grid overflow-hidden rounded-lg bg-snow shadow-[0_18px_40px_rgba(12,31,25,0.08)] md:grid-cols-[1.1fr_1fr]"
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
                <h2 className="font-display text-2xl font-semibold text-ink">
                  {service.name}
                </h2>
                <p className="mt-3 leading-relaxed text-muted">{service.summary}</p>
                <span className="mt-5 text-sm font-semibold text-canopy">
                  View {service.shortName.toLowerCase()} details
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
