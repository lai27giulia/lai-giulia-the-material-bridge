import content from "@/content/content.json";
import type { Lang } from "@/lib/i18n";

export type Content = typeof content;

export function getContent(): Content {
  return content as Content;
}

export function t(value: Record<string, string>, lang: Lang): string {
  return value[lang] ?? value.es ?? value.en ?? "";
}

