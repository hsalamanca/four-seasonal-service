import { CallTextCtas } from "@/components/CallTextCtas";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { AREAS, IMAGES } from "@/lib/constants";
import { createMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = createMetadata({
  title: "Service Areas | Dale City & Prince William County",
  description:
    "Four Seasonal Services serves Dale City, Woodbridge, Manassas, and Prince William County with lawn care, landscaping, and snow removal. Call (703) 400-1671.",
  path: "/areas",
});

export default function AreasHubPage() {
  return (
    <>
      <PageHero
        compact
        imageSrc={IMAGES.neighborhood}
        imageAlt="Suburban homes in Northern Virginia service area"
        headline="Where we work"
        support="Dale City is home base. We serve homes across Prince William County—including Woodbridge and Manassas."
      />
      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <SectionHeading
          eyebrow="Service areas"
          title="Local routes across Prince William County"
          description="Choose your city for local details, then call or request a quote."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {AREAS.map((area) => (
            <Link
              key={area.slug}
              href={area.href}
              className="rounded-md border border-line bg-snow p-6 transition hover:border-canopy"
            >
              <h2 className="font-display text-2xl font-semibold text-ink">{area.name}</h2>
              <p className="mt-3 leading-relaxed text-muted">{area.summary}</p>
            </Link>
          ))}
        </div>
        <div className="mt-12">
          <CallTextCtas className="text-ink" />
        </div>
      </section>
    </>
  );
}
