import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BrutalShell from "@/components/layout/BrutalShell";
import Footer from "@/components/layout/Footer";
import HeaderBar from "@/components/layout/HeaderBar";
import TickerBar from "@/components/layout/TickerBar";
import BrutalCtaWidget from "@/components/widgets/BrutalCtaWidget";
import { getContent } from "@/lib/content";
import { isLang, type Lang } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "The Material Bridge",
};

export default async function LangLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang: rawLang } = await params;
  if (!isLang(rawLang)) notFound();
  const lang = rawLang as Lang;
  const content = getContent();

  return (
    <BrutalShell>
      <HeaderBar lang={lang} />
      <TickerBar lang={lang} />
      <main className="flex-1">{children}</main>
      <Footer statement={content.config.privacy.footer_statement} lang={lang} />
      <BrutalCtaWidget lang={lang} />
    </BrutalShell>
  );
}
