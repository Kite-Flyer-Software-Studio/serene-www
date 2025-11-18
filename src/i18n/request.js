import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

import { routing } from './routing';
import { config } from './config';

export default getRequestConfig(async ({ requestLocale }) => {
  // Get the locale - use requestLocale for App Router
  let locale = await requestLocale;

  // Fallback to default locale if undefined
  if (!locale || !routing.locales.includes(locale)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    ...config,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
