import { CallTextCtas } from "@/components/CallTextCtas";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { QuoteForm } from "@/components/QuoteForm";
import { BUSINESS, IMAGES, telHref } from "@/lib/constants";
import { breadcrumbSchema, contactPageSchema } from "@/lib/schema";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact | Free Quote — Dale City, VA | (703) 400-1671",
  description:
    "Request a free quote from Four Seasonal Services. Call (703) 400-1671 for lawn care, landscaping, and snow removal in Dale City and Prince William County.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactPageSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <PageHero
        compact
        showForm={false}
        imageSrc={IMAGES.hero}
        imageAlt="Premium suburban lawn ready for professional care"
        headline="Get a free quote today"
        support="Tell us the property and the service. We call you back—same day whenever we can."
      />

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="font-display text-3xl font-semibold text-ink">
              Call {BUSINESS.phoneDisplay}
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              Prefer to talk now? We’re on the phone {BUSINESS.hours.label}. The
              form on this page emails the crew a quote request with your details.
            </p>
            <CallTextCtas className="mt-8 text-ink" size="lg" />
            <dl className="mt-10 space-y-5 border-t border-line pt-8 text-sm">
              <div>
                <dt className="font-semibold text-ink">Phone</dt>
                <dd className="mt-1 text-muted">
                  <a href={telHref()} className="hover:text-canopy">
                    {BUSINESS.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Service area</dt>
                <dd className="mt-1 text-muted">
                  {BUSINESS.city}, {BUSINESS.region} {BUSINESS.postalCode}
                  <br />
                  {BUSINESS.county} and nearby communities
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Hours</dt>
                <dd className="mt-1 text-muted">{BUSINESS.hours.label}</dd>
              </div>
            </dl>
          </div>
          <QuoteForm compact={false} />
        </div>
      </section>
    </>
  );
}
