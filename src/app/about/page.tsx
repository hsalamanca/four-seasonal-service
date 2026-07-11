import { CallTextCtas } from "@/components/CallTextCtas";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { BUSINESS } from "@/lib/constants";
import { createMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = createMetadata({
  title: "About Four Seasonal Services | Dale City, VA",
  description:
    "About Four Seasonal Services—year-round lawn care, landscaping, and snow removal for Dale City and Prince William County. Call (703) 400-1671.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        compact
        imageSrc="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=2000&q=80"
        imageAlt="Outdoor property care work in a residential yard"
        headline="About Four Seasonal Services"
        support="A local Dale City and Prince William County team built around one idea: yard care that doesn’t skip a season."
      />

      <section className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
        <SectionHeading
          eyebrow="Our story"
          title="One local crew for lawn, landscape, and snow"
          description="Homeowners get tired of juggling vendors—someone for mowing, someone else for beds, and a scramble every winter for snow. Four Seasonal Services exists so you can keep one reliable relationship year-round."
        />

        <div className="mt-10 space-y-6 text-base leading-relaxed text-muted">
          <p>
            We serve {BUSINESS.city} and {BUSINESS.county} with practical
            residential work: weekly lawn care, landscaping cleanups and bed
            maintenance, and snow removal when winter hits.
          </p>
          <p>
            Communication stays simple. Call or text{" "}
            <a
              href={`tel:${BUSINESS.phoneTel}`}
              className="font-semibold text-canopy"
            >
              {BUSINESS.phoneDisplay}
            </a>
            —send your address, what you need, and photos if you have them. We
            quote clearly and show up like a neighbor, not a call center.
          </p>
          <p>
            Explore{" "}
            <Link href="/services" className="font-semibold text-canopy underline-offset-2 hover:underline">
              our services
            </Link>{" "}
            or jump straight to{" "}
            <Link href="/contact" className="font-semibold text-canopy underline-offset-2 hover:underline">
              contact
            </Link>{" "}
            for a free quote.
          </p>
        </div>

        <div className="mt-12 border border-line bg-snow p-6 md:p-8">
          <h2 className="font-display text-xl font-bold text-ink">
            Ready to talk?
          </h2>
          <p className="mt-2 text-sm text-muted">
            Hours: {BUSINESS.hours.label}. Based in {BUSINESS.city},{" "}
            {BUSINESS.region} {BUSINESS.postalCode}.
          </p>
          <CallTextCtas className="mt-6 text-ink" />
        </div>
      </section>
    </>
  );
}
