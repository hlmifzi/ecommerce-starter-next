// middleware.ts
import { NextResponse } from "next/server";

export function middleware() {
  const res = NextResponse.next();

  // Clickjacking / MIME sniffing
  res.headers.set("X-Frame-Options", "DENY");
  res.headers.set("X-Content-Type-Options", "nosniff");

  // Privacy
  res.headers.set("Referrer-Policy", "no-referrer");
  res.headers.set("Permissions-Policy", "geolocation=()");

  // HSTS
  res.headers.set(
    "Strict-Transport-Security",
    "max-age=63072000; includeSubDomains; preload"
  );

  // CSP (adjust sesuai kebutuhan app kamu)
  res.headers.set(
    "Content-Security-Policy",
    "default-src 'self'; frame-ancestors 'none'; object-src 'none'; base-uri 'self';"
  );

  // CORP/COEP/COOP
  res.headers.set("Cross-Origin-Opener-Policy", "same-origin");
  res.headers.set("Cross-Origin-Embedder-Policy", "require-corp");
  res.headers.set("Cross-Origin-Resource-Policy", "same-origin");

  // Cache control (opsional, untuk API / halaman sensitif)
  res.headers.set("Cache-Control", "no-store");

  return res;
}
