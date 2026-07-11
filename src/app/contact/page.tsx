import { CallTextCtas } from "@/components/CallTextCtas";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { BUSINESS, smsHref, telHref } from "@/lib/constants";
import { breadcrumbSchema, contactPageSchema } from "@/lib/schema";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact | Free Quote — Dale City, VA | (703) 400-1671",
  description:
    "Contact Four Seasonal Services for a free quote. Call or text (703) 400-1671 for lawn care, landscaping, and snow removal in Dale City and Prince William County.",
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
        imageSrc="https://images.unsplash.com/photo-1483664852095-d6cc68712067?auto=format&fit=crop&w=2000&q=80"
        imageAlt="Winter residential driveway ready for snow clearing service"
        headline="Contact Four Seasonal Services"
        support="Same-day quote requests welcome. Call or text—whichever is easier."
      />

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="font-display text-3xl font-bold text-ink">
              Call or text {BUSINESS.phoneDisplay}
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              Prefer text? Send your address and photos to{" "}
              {BUSINESS.phoneDisplay}—we reply same day whenever possible.
            </p>

            <CallTextCtas className="mt-8 text-ink" size="lg" />

            <dl className="mt-10 space-y-5 border-t border-line pt-8 text-sm">
              <div>
                <dt className="font-semibold text-ink">Phone</dt>
                <dd className="mt-1 text-muted">
                  <a href={telHref()} className="hover:text-canopy">
                    Call {BUSINESS.phoneDisplay}
                  </a>
                  {" · "}
                  <a href={smsHref("Hi, I'd like a free quote.")} className="hover:text-canopy">
                    Text {BUSINESS.phoneDisplay}
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
              <div>
                <dt className="font-semibold text-ink">Website</dt>
                <dd className="mt-1 text-muted">fourseasonalservices.com</dd>
              </div>
            </dl>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
