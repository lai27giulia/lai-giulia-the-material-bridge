import Image from "next/image";
import { getContent, t } from "@/lib/content";
import type { Lang } from "@/lib/i18n";

export default async function HomePage({
  params,
}: Readonly<{
  params: Promise<{ lang: Lang }>;
}>) {
  const content = getContent();
  const { lang } = await params;

  return (
    <div className="p-6 md:p-10">
      {/* HERO */}
      <section className="grid gap-4 border-4 border-black bg-[var(--mb-offwhite)] p-6 shadow-hard">
        <div className="font-sans font-extrabold tracking-tight">
          <h1 className="text-3xl md:text-5xl">
            {t(content.hero.title, lang)} | {t(content.hero.subline, lang)}
          </h1>
        </div>
        <p className="max-w-3xl font-mono text-base md:text-lg">
          {t(content.hero.uvp_hammer, lang)}
        </p>
      </section>

      {/* CASE STUDY (placeholder base) */}
      <section className="mt-10 grid gap-4 border-4 border-black bg-white p-6 shadow-hard">
        <div className="flex items-baseline justify-between gap-6">
          <h2 className="font-sans text-2xl font-extrabold">
            {t(content.caseStudy.title, lang)}
          </h2>
          <p className="font-mono text-sm text-zinc-600">
            {t(content.caseStudy.context, lang)}
          </p>
        </div>

        <div className="relative overflow-hidden border-4 border-black bg-zinc-100">
          <Image
            src={`/images/${content.caseStudy.image_ref}`}
            alt="Case study"
            width={1600}
            height={900}
            className="h-auto w-full object-cover"
            priority
          />
          <div className="p-4 font-mono text-sm">
            Hotspots: {content.caseStudy.hotspots.map((h) => h.id).join(" • ")}
          </div>
        </div>
      </section>

      {/* VAULT (placeholder base) */}
      <section className="mt-10 grid gap-3 border-4 border-black bg-[var(--mb-steel)] p-6 text-black shadow-hard">
        <h2 className="font-sans text-2xl font-extrabold">Technical Vault</h2>
        <p className="font-mono text-sm">{t(content.technicalVault.label, lang)}</p>
        <p className="font-mono text-xs opacity-80">
          Access code: {content.technicalVault.access_code}
        </p>
      </section>
    </div>
  );
}
