import {
  ABUSE_QUERY,
  ALLOWED_BOTS,
  applySecurityHeaders,
  BAD_BOTS,
  clientIp,
  RATE_LIMIT_MAX,
  RATE_LIMIT_WINDOW_MS,
  SCANNER_EXTENSION,
  SCANNER_PATH,
} from "@/lib/security";
import { NextRequest, NextResponse } from "next/server";

const buckets = new Map<string, { count: number; resetAt: number }>();

function pruneBuckets(now: number) {
  if (buckets.size < 2_000) return;
  for (const [key, bucket] of buckets) {
    if (now > bucket.resetAt) buckets.delete(key);
  }
}

function isRateLimited(ip: string, now: number) {
  const current = buckets.get(ip);
  if (!current || now > current.resetAt) {
    buckets.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  current.count += 1;
  return current.count > RATE_LIMIT_MAX;
}

function blocked(status: number, retryAfter?: string) {
  const headers = new Headers();
  applySecurityHeaders(headers);
  headers.set("Cache-Control", "no-store");
  if (retryAfter) headers.set("Retry-After", retryAfter);
  return new NextResponse(null, { status, headers });
}

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const method = request.method.toUpperCase();

  if (method === "TRACE" || method === "TRACK") {
    return blocked(405);
  }

  if (SCANNER_PATH.test(pathname) || SCANNER_EXTENSION.test(pathname)) {
    return blocked(404);
  }

  if (search && ABUSE_QUERY.test(search)) {
    return blocked(400);
  }

  const ua = request.headers.get("user-agent") ?? "";
  const allowedBot = ALLOWED_BOTS.test(ua);

  if (!ua.trim() || (BAD_BOTS.test(ua) && !allowedBot)) {
    return blocked(403);
  }

  if (!allowedBot) {
    const now = Date.now();
    pruneBuckets(now);
    const ip = clientIp(request.headers);
    if (isRateLimited(ip, now)) {
      return blocked(429, "10");
    }
  }

  const response = NextResponse.next();
  applySecurityHeaders(response.headers);
  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|txt|xml)$).*)",
  ],
};
