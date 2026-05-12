"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { getContent, t } from "@/lib/content";
import type { Lang } from "@/lib/i18n";

export default function BrutalCtaWidget({ lang }: { lang: Lang }) {
  const content = getContent();

  return (
    <div className="fixed bottom-4 right-4 z-40">
      <motion.div
        animate={{ opacity: [1, 0.65, 1] }}
        transition={{ duration: 1.2, repeat: Infinity }}
        className="shadow-hard"
      >
        <Link
          href="/connect"
          className="block max-w-[16rem] border-4 border-black bg-[var(--mb-safety)] px-4 py-3 font-sans text-sm font-extrabold leading-tight text-black"
        >
          {t(content.cta_widget.text, lang)}
        </Link>
      </motion.div>
    </div>
  );
}

