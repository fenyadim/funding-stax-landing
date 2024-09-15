export type Locale = (typeof locales)[number];

export const locales = ['en', 'ru', 'tr', 'in'] as const;
export const defaultLocale: Locale = 'en';
