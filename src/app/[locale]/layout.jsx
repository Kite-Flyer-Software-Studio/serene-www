import '../global.css';
// import 'swiper/css';
// import '../../../public/assets/css/styles.css';
// import 'jarallax/dist/jarallax.min.css';
// import 'swiper/css/effect-fade';
// import 'photoswipe/dist/photoswipe.css';

import { Inter } from 'next/font/google';

import GoogleTagManager from '@/components/core/GoogleTagManager';
import MetaPixel from '@/components/core/MetaPixel';
import { cn } from '@/utils';
import { GTM_ID, META_PIXEL_ID } from '@/constants';
import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';

import 'tippy.js/dist/tippy.css';
import FloatingMobileCTA from '@/components/core/FloatingMobileCTA';
import { ThemeProvider } from '@/contexts/ThemeProvider';

export const viewport = {
  width: 'device-width',
  'initial-scale': '1.0',
};

const IFRAME_STYLE = {
  display: 'none',
  visibility: 'hidden',
};

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata() {
  return {
    metadataBase: 'https://sereneexperience.com',
    keywords: 'Food • Friends • Wine',
    author: 'Serene',
    icons: {
      icon: '/assets/images/favicon.ico',
    },
    openGraph: {
      type: 'website',
      url: 'https://sereneexperience.com',
      images: '/assets/images/serene/logo.svg',
    },
  };
}

export default async function RootLayout({ children, params: { locale } }) {
  const messages = await getMessages();

  return (
    <html lang="en" className="no-mobile no-touch ">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;1,400;1,500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Epilogue:wght@400;500&family=Poppins&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap"
          rel="stylesheet"
        />
        <GoogleTagManager gtmId={GTM_ID} />
        <MetaPixel pixelId={META_PIXEL_ID} />
      </head>
      <body
        className={cn('antialiased dark:bg-black bg-white', inter.className)}
      >
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={IFRAME_STYLE}
          />
        </noscript>
        <noscript>
          <img
            height="1"
            width="1"
            style={IFRAME_STYLE}
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
            <FloatingMobileCTA />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
