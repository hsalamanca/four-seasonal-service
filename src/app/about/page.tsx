import { CallTextCtas } from "@/components/CallTextCtas";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { BUSINESS, IMAGES } from "@/lib/constants";
import { createMetadata } from "@/lib/seo";
import Image from "next/image";
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
        imageSrc={IMAGES.craft}
        imageAlt="Precision lawn edging and dark mulch on a professionally maintained bed"
        headline="A local crew that doesn’t skip a season"
        support="Dale City and Prince William County homeowners keep one relationship—lawn, landscape, and snow."
      />

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading
              eyebrow="Our story"
              title="One roster for lawn, landscape, and snow"
              description="Homeowners get tired of juggling vendors—someone for mowing, someone else for beds, and a scramble every winter. Four Seasonal Services exists so you can keep one reliable relationship year-round."
            />
            <div className="mt-10 space-y-6 text-base leading-relaxed text-muted">
              <p>
                We serve {BUSINESS.city} and {BUSINESS.county} with practical
                residential work: weekly lawn care, landscaping cleanups and bed
                maintenance, and snow removal when winter hits.
              </p>
              <p>
                Communication stays simple. Send the property through the quote
                form or call {BUSINESS.phoneDisplay}. We quote clearly and show
                up like a neighbor, not a call center.
              </p>
              <p>
                Explore{" "}
                <Link href="/services" className="font-semibold text-canopy underline-offset-2 hover:underline">
                  our services
                </Link>{" "}
                or request a{" "}
                <Link href="/#quote" className="font-semibold text-canopy underline-offset-2 hover:underline">
                  free quote
                </Link>
                .
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
            <Image
              src={IMAGES.summer}
              alt="Lush midsummer lawn with professional weekly maintenance"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-16 rounded-lg bg-snow p-6 md:p-8">
          <h2 className="font-display text-xl font-semibold text-ink">Ready to talk?</h2>
          <p className="mt-2 text-sm text-muted">
            Hours: {BUSINESS.hours.label}. Based in {BUSINESS.city}, {BUSINESS.region}{" "}
            {BUSINESS.postalCode}.
          </p>
          <CallTextCtas className="mt-6 text-ink" />
        </div>
      </section>
    </>
  );
}
