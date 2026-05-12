import { t } from "@/lib/content";
import type { Lang } from "@/lib/i18n";

export default function Footer({
  statement,
  lang,
}: {
  statement: Record<string, string>;
  lang: Lang;
}) {
  return (
    <footer className="border-t-4 border-black bg-white">
      <div className="px-4 py-6 font-mono text-xs text-zinc-700">
        {t(statement, lang)}
      </div>
    </footer>
  );
}

