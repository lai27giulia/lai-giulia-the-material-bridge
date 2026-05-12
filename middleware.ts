import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

type Lang = "en" | "es";

const DEFAULT_LANGUAGE: Lang = "es";
const LOCALE_PREFIX_RE = /^\/(en|es)(\/|$)/;

function detectLanguage(req: NextRequest): Lang {
  const header = req.headers.get("accept-language") ?? "";
  const first = header.split(",")[0]?.trim().toLowerCase() ?? "";

  if (first.startsWith("es")) return "es";
  if (first.startsWith("en")) return "en";
  return DEFAULT_LANGUAGE;
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Route interna stabile per il redirect LinkedIn: non va localizzata.
  if (pathname === "/connect" || pathname.startsWith("/connect/")) {
    return NextResponse.next();
  }

  const localeMatch = pathname.match(LOCALE_PREFIX_RE);

  // 1) Entry su "/" -> autodetect.
  if (pathname === "/") {
    const lang = detectLanguage(req);
    const url = req.nextUrl.clone();
    url.pathname = `/${lang}`;
    return NextResponse.redirect(url);
  }

  // 2) Qualsiasi path senza prefisso lingua -> fallback semplice al default.
  if (!localeMatch) {
    const url = req.nextUrl.clone();
    url.pathname = `/${DEFAULT_LANGUAGE}${pathname}`;
    return NextResponse.redirect(url);
  }

  // 3) Passa downstream la lingua via header (no cookie).
  const lang = localeMatch[1] as Lang;
  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("x-locale", lang);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  // Esclude asset e path interni Next.
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
