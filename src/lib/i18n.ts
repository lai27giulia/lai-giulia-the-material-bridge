export const SUPPORTED_LANGUAGES = ["en", "es"] as const;
export type Lang = (typeof SUPPORTED_LANGUAGES)[number];

export const DEFAULT_LANGUAGE: Lang = "es";

export function isLang(value: string): value is Lang {
  return (SUPPORTED_LANGUAGES as readonly string[]).includes(value);
}

