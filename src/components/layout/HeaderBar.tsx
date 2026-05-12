"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Volume2, VolumeX } from "lucide-react";
import { useMemo, useState } from "react";
import type { Lang } from "@/lib/i18n";

export default function HeaderBar({ lang }: { lang: Lang }) {
  const pathname = usePathname() || `/${lang}`;
  const [muted, setMuted] = useState(true);

  const otherLang: Lang = lang === "es" ? "en" : "es";
  const otherHref = useMemo(() => {
    return pathname.replace(/^\/(en|es)(?=\/|$)/, `/${otherLang}`);
  }, [pathname, otherLang]);

  return (
    <header className="sticky top-0 z-30 border-b-4 border-black bg-[var(--mb-offwhite)]">
      <div className="flex items-center justify-between gap-4 px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="border-4 border-black bg-white px-3 py-1 font-sans text-sm font-extrabold shadow-hard">
            THE MATERIAL BRIDGE
          </div>
          <div className="hidden font-mono text-xs text-zinc-700 md:block">
            industrial brutalist / privacy-first
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href={otherHref}
            className="border-4 border-black bg-white px-3 py-1 font-mono text-xs shadow-hard hover:bg-[var(--mb-safety)]"
            aria-label="Cambia lingua"
          >
            {otherLang.toUpperCase()}
          </Link>

          <button
            type="button"
            onClick={() => setMuted((v) => !v)}
            className="inline-flex items-center gap-2 border-4 border-black bg-white px-3 py-1 font-mono text-xs shadow-hard hover:bg-[var(--mb-safety)]"
            aria-label="Audio toggle"
          >
            {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            {muted ? "MUTED" : "AUDIO"}
          </button>
        </div>
      </div>
    </header>
  );
}

