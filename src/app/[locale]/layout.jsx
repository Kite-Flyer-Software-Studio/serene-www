import 'swiper/css';
import '../../public/assets/css/styles.css';
import 'jarallax/dist/jarallax.min.css';
import 'swiper/css/effect-fade';
import 'react-modal-video/css/modal-video.css';
import 'photoswipe/dist/photoswipe.css';
import GoogleTagManager from '@/components/core/GoogleTagManager';
import MetaPixel from '@/components/core/MetaPixel';
import IntlProvider from '@/i18n/Provider';
import { GTM_ID, META_PIXEL_ID } from '@/constants';
import { getMessages } from 'next-intl/server';

import 'tippy.js/dist/tippy.css';

const IFRAME_STYLE = {
  display: 'none',
  visibility: 'hidden',
};

export const metadata = {
  title: 'Serene.',
  description: 'Meet the perfect strangers over food and wine!',
  icons: {
    icon: '/assets/images/favicon.ico',
  },
};

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
      <body className="appear-animate body">
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
        <IntlProvider locale={locale} messages={messages}>
          {children}
        </IntlProvider>
      </body>
    </html>
  );
}
