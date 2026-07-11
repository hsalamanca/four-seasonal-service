import { BUSINESS } from "@/lib/constants";
import { createMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description: `Privacy policy for ${BUSINESS.name} at fourseasonalservices.com.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
      <h1 className="font-display text-4xl font-bold text-ink">Privacy Policy</h1>
      <p className="mt-4 text-sm text-muted">Last updated: July 11, 2026</p>
      <div className="mt-8 space-y-5 leading-relaxed text-muted">
        <p>
          {BUSINESS.name} (“we”) operates fourseasonalservices.com. This page
          explains how we handle information when you use our website or contact
          us by phone or text.
        </p>
        <p>
          When you call or text {BUSINESS.phoneDisplay}, or use our quote form
          to open a text message, you share contact details and property
          information so we can respond to your request. We use that information
          only to provide quotes and services.
        </p>
        <p>
          We do not sell your personal information. Our site may use standard
          hosting and analytics logs (such as IP address and pages visited) to
          keep the site secure and improve performance.
        </p>
        <p>
          Questions? Call or text{" "}
          <a href={`tel:${BUSINESS.phoneTel}`} className="font-semibold text-canopy">
            {BUSINESS.phoneDisplay}
          </a>{" "}
          or visit our{" "}
          <Link href="/contact" className="font-semibold text-canopy underline-offset-2 hover:underline">
            contact page
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
