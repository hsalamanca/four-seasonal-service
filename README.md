# Four Seasonal Services

Marketing website for **Four Seasonal Services** — landscaping, lawn care / mowing, and snow removal in Dale City and Prince William County, VA.

- **Domain:** [fourseasonalservices.com](https://fourseasonalservices.com)
- **Phone / SMS:** [(703) 400-1671](tel:+17034001671)

## Stack

- Next.js 16 (App Router) + React 19
- TypeScript + Tailwind CSS v4
- SEO: metadata, sitemap, robots, JSON-LD LocalBusiness schema
- Deployed on Vercel

## Security

- Edge middleware blocks scanner paths, exploit query strings, empty/hostile user-agents, and TRACE/TRACK
- Per-IP rate limit on page traffic (search/social bots allowlisted)
- Security headers: HSTS, CSP, frame denial, nosniff, referrer, permissions policy
- Contact form: honeypot, length limits, input sanitization (form only opens the visitor's SMS app)
- Preview deployments stay behind Vercel Authentication

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Turbopack dev server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | ESLint |

## Contact conversion

Primary CTAs use `tel:` and `sms:` links to **(703) 400-1671**. The contact form opens the visitor’s messaging app with a prefilled quote request.
