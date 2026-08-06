import { NextRequest, NextResponse } from "next/server";

const canonicalHost = "company.chumcred.com";
const vercelProductionHost = "chumcred-digital-headquarters.vercel.app";

export function middleware(request: NextRequest) {
  const forwardedProto = request.headers.get("x-forwarded-proto");
  const host = request.headers.get("host") ?? request.nextUrl.host;
  const isCanonicalHost = host === canonicalHost;
  const isProductionAlias = host === vercelProductionHost;

  // Enforce the public HTTPS origin only for the production domain and its
  // permanent Vercel alias. Local development and preview deployments remain
  // untouched.
  if ((isCanonicalHost && forwardedProto === "http") || isProductionAlias) {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    url.host = canonicalHost;
    url.port = "";

    return NextResponse.redirect(url, 308);
  }

  const response = NextResponse.next();

  // HTTP Link canonicals are recognised by search engines and ensure every
  // route points to the same public origin without incorrectly assigning the
  // homepage canonical to all child pages.
  if (isCanonicalHost) {
    const canonicalUrl = new URL(request.nextUrl.pathname, `https://${canonicalHost}`);
    response.headers.set("Link", `<${canonicalUrl.toString()}>; rel="canonical"`);
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:png|jpg|jpeg|gif|svg|webp|ico|woff|woff2)$).*)",
  ],
};
