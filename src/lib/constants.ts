export const BUSINESS = {
  name: "Four Seasonal Services",
  legalName: "Four Seasonal Services",
  tagline: "Yard care that doesn't skip a season.",
  phoneDisplay: "(703) 400-1671",
  phoneTel: "+17034001671",
  phoneSms: "17034001671",
  email: "hello@fourseasonalservices.com",
  domain: "https://fourseasonalservices.com",
  city: "Dale City",
  region: "VA",
  postalCode: "22193",
  county: "Prince William County",
  priceRange: "$$",
  hours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] as const,
    opens: "07:00",
    closes: "19:00",
    label: "Mon–Sat, 7am–7pm",
  },
} as const;

export const IMAGES = {
  hero: "/images/hero-lawn.jpg",
  lawn: "/images/lawn-care.jpg",
  landscape: "/images/landscaping.jpg",
  snow: "/images/snow-removal.jpg",
  fall: "/images/season-fall.jpg",
  spring: "/images/season-spring.jpg",
  summer: "/images/season-summer.jpg",
  craft: "/images/craft.jpg",
  neighborhood: "/images/neighborhood.jpg",
} as const;

export const SERVICES = [
  {
    slug: "lawn-care",
    name: "Lawn Care & Mowing",
    shortName: "Lawn Care",
    href: "/services/lawn-care",
    summary:
      "Weekly and biweekly mowing, edging, trimming, and blow-off so your Dale City yard stays sharp all season.",
    description:
      "Reliable lawn care and mowing for Dale City and Prince William County homes—clean edges, consistent cuts, and yards that look cared for week after week.",
    image: IMAGES.lawn,
    imageAlt: "Freshly mowed residential lawn with clean stripes in suburban Virginia",
    bullets: [
      "Weekly or biweekly mowing",
      "Edging, trimming & debris blow-off",
      "Spring and fall cleanups",
      "Hedge and shrub trimming",
    ],
  },
  {
    slug: "landscaping",
    name: "Landscaping",
    shortName: "Landscaping",
    href: "/services/landscaping",
    summary:
      "Mulch, beds, plantings, and seasonal cleanups that keep curb appeal strong through spring, summer, and fall.",
    description:
      "Residential landscaping in Dale City and Prince William County—bed refresh, mulch, plantings, and cleanups built for Northern Virginia yards.",
    image: IMAGES.landscape,
    imageAlt: "Landscaped residential flower beds with mulch and plantings",
    bullets: [
      "Mulch and bed maintenance",
      "Seasonal plantings & refresh",
      "Leaf removal and yard cleanup",
      "Shrub shaping and bed weeding",
    ],
  },
  {
    slug: "snow-removal",
    name: "Snow Removal",
    shortName: "Snow Removal",
    href: "/services/snow-removal",
    summary:
      "Driveway and walkway clearing when winter hits—so you’re not stuck waiting on a last-minute crew.",
    description:
      "Snow removal for Dale City and Prince William County driveways and walks. Pre-season standby and storm response when it matters.",
    image: IMAGES.snow,
    imageAlt: "Cleared residential driveway after snowfall at blue hour",
    bullets: [
      "Driveway & walkway clearing",
      "Residential snow standby plans",
      "Ice management options",
      "Pre-season contracts available",
    ],
  },
] as const;

export const SERVICE_OPTIONS = [
  ...SERVICES.map((s) => s.shortName),
  "Fall cleanup",
  "Snow standby",
  "Not sure / multiple",
] as const;

export const AREAS = [
  {
    slug: "dale-city",
    name: "Dale City",
    href: "/areas/dale-city",
    summary:
      "Our home base. Lawn care, landscaping, and snow removal for Dale City neighborhoods across Prince William County.",
  },
  {
    slug: "prince-william-county",
    name: "Prince William County",
    href: "/areas/prince-william-county",
    summary:
      "Year-round property care across Prince William County—from weekly mowing to winter snow clearing.",
  },
  {
    slug: "woodbridge",
    name: "Woodbridge",
    href: "/areas/woodbridge",
    summary:
      "Lawn mowing, landscaping, and snow removal for Woodbridge homes and businesses.",
  },
  {
    slug: "manassas",
    name: "Manassas",
    href: "/areas/manassas",
    summary:
      "Reliable lawn care, landscaping, and snow services for Manassas and nearby communities.",
  },
] as const;

export const NAV = [
  { href: "/services", label: "Services" },
  { href: "/areas", label: "Areas" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const TRUST = [
  "Dale City local crew",
  "Same-day quote replies",
  "Year-round on one roster",
  "HOA-ready finish",
] as const;

export const SEASONS = [
  {
    name: "Spring",
    image: IMAGES.spring,
    copy: "Cleanup, bed refresh, and the first sharp cuts of the year.",
  },
  {
    name: "Summer",
    image: IMAGES.summer,
    copy: "Weekly mowing, edges, and a yard that stays finished in the heat.",
  },
  {
    name: "Fall",
    image: IMAGES.fall,
    copy: "Leaf removal, last cuts, and snow standby locked before the storm.",
  },
  {
    name: "Winter",
    image: IMAGES.snow,
    copy: "Driveways and walks cleared so you’re not waiting on a last-minute crew.",
  },
] as const;

export const OFFER = {
  eyebrow: "Now booking · Fall & winter",
  title: "Fall cleanup and snow standby are open for Dale City.",
  copy: "Leaf season is short. Storm contracts go first. Get a free quote today—we reply the same day whenever we can.",
} as const;

export function smsHref(body?: string) {
  const base = `sms:${BUSINESS.phoneSms}`;
  if (!body) return base;
  return `${base}?&body=${encodeURIComponent(body)}`;
}

export function telHref() {
  return `tel:${BUSINESS.phoneTel}`;
}
