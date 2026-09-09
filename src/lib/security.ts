export const SECURITY_HEADERS: { key: string; value: string }[] = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value:
      "accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=(), interest-cohort=()",
  },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https://images.unsplash.com",
      "font-src 'self' data:",
      "connect-src 'self'",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "object-src 'none'",
      "upgrade-insecure-requests",
    ].join("; "),
  },
];

export const ALLOWED_BOTS =
  /googlebot|google-inspectiontool|adsbot-google|bingbot|bingpreview|applebot|duckduckbot|facebookexternalhit|facebot|meta-externalagent|twitterbot|linkedinbot|slackbot|discordbot|whatsapp|telegrambot/i;

export const BAD_BOTS =
  /sqlmap|nikto|nmap|masscan|zgrab|nuclei|dirbuster|wpscan|libwww-perl|python-requests|python-urllib|go-http-client|scrapy|httpunit|openvas|acunetix|nessus|curl\/|wget\/|aiohttp|libcurl|phantomjs|gptbot|ccbot|bytespider|amazonbot|claudebot|anthropic-ai|dataforseo|petalbot|seekport|sogou|megaindex|blexbot|mauibot/i;

export const SCANNER_PATH =
  /(?:^|\/)(?:wp-admin|wp-login\.php|wp-content|wp-includes|xmlrpc\.php|wordpress|phpmyadmin|administrator|cgi-bin|\.env|\.git|\.svn|\.htaccess|\.htpasswd|\.DS_Store|vendor\/phpunit|server-status|debug\/default|actuator|manager\/html|boaform|autodiscover|owa|telescope|horizon|phpinfo)(?:\/|$)/i;

export const SCANNER_EXTENSION =
  /\.(?:php|asp|aspx|jsp|cgi|cfm|phtml|ini|sql|bak|old|zip|tar|gz|tgz|rar|7z|env|yml|yaml|log|swp)$/i;

export const ABUSE_QUERY =
  /(?:\.\.|%2e%2e|<script|javascript:|union\s+select|sleep\s*\(|or\s+1=1|etc\/passwd|base64_decode|eval\s*\(|onerror\s*=)/i;

export const RATE_LIMIT_WINDOW_MS = 10_000;
export const RATE_LIMIT_MAX = 18;

export function clientIp(headers: Headers) {
  const forwarded = headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first;
  }
  return headers.get("x-real-ip") || headers.get("cf-connecting-ip") || "unknown";
}

export function applySecurityHeaders(headers: Headers) {
  for (const header of SECURITY_HEADERS) {
    headers.set(header.key, header.value);
  }
  headers.delete("x-powered-by");
}
