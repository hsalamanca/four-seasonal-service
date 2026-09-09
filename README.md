# Four Seasonal Services

Marketing website for **Four Seasonal Services** — landscaping, lawn care / mowing, and snow removal in Dale City and Prince William County, VA.

- **Domain:** [fourseasonalservices.com](https://fourseasonalservices.com)
- **Phone:** [(703) 400-1671](tel:+17034001671)

## Stack

- Next.js 16 (App Router) + React 19
- TypeScript + Tailwind CSS v4
- SEO: metadata, sitemap, robots, JSON-LD LocalBusiness schema
- Deployed on Vercel

## Lead capture

Quote forms post to `/api/quote` (validated, honeypot, rate-limited). Leads are delivered to `LEAD_NOTIFY_EMAIL` or `hello@fourseasonalservices.com` via FormSubmit. Optional `LEAD_WEBHOOK_URL` for Zapier/Make.

## Security

- Edge proxy rate limiting, scanner/bot blocking, security headers
- Contact payload sanitization and length limits
- Preview deployments stay behind Vercel Authentication

## Local development

```bash
npm install
npm run dev
```
