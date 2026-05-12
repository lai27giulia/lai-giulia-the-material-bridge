import { getContent, t } from "@/lib/content";
import type { Lang } from "@/lib/i18n";

export default function TickerBar({ lang }: { lang: Lang }) {
  const content = getContent();
  const text = t(content.ticker.text, lang);

  return (
    <div className="border-b-4 border-black bg-black text-[var(--mb-safety)]">
      <div className="px-4 py-2 font-mono text-xs tracking-widest">{text}</div>
    </div>
  );
}

