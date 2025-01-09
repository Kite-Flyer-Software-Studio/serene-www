import React from 'react';
import Image from 'next/image';
import Socials from './Socials';
import { useLocale, useTranslations } from 'next-intl';

export const footerLinks = [
  { name: 'Privacy Policy', path: '/privacy-policy.html', static: true },
  { name: 'Terms & Conditions', path: '/terms-and-conditions.html', static: true },
];

export default function Footer() {
  const t = useTranslations('Footer');

  const locale = useLocale();

  const localHref = React.useMemo(
    () => (locale === 'en' ? '/en' : '/zh-HK'),
    [locale]
  );

  return (
    <div className="container">
      <div className="row pb-120 pb-sm-80 pb-xs-50">
        <div className="col-md-4 col-lg-3 text-gray mb-sm-50">
          <Image
            src="/assets/images/serene/logo.svg"
            width={105}
            height={60}
            alt="Serene"
            className="mb-2"
          />
          <div className="clearlinks">
            <strong>T.</strong>
            <a href="https://wa.me/85292098254">+825 9209 8254</a>
          </div>
          <div className="clearlinks">
            <strong>E.</strong>
            <a href="mailto:contact@sereneexperience.com">
              contact@sereneexperience.com
            </a>
          </div>
        </div>
        <div className="col-md-7 offset-md-1 offset-lg-2">
          <div className="row mt-n30">
            <div className="col-sm-4 mt-30"></div>
            <div className="col-sm-4 mt-30">
              <h3 className="fw-title">{t('Social Media')}</h3>
              <Socials />
            </div>
            <div className="col-sm-4 mt-30">
              <h3 className="fw-title">{t('Legal')}</h3>
              <ul className="fw-menu clearlist">
                {footerLinks.map((elm, i) => (
                  <li key={i}>
                    <a href={`${elm.static ? '' : localHref}${elm.path}`}>
                      {t(`Legals.${elm.name}`)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row text-gray">
        <div className="col-md-4 col-lg-3">
          <b>© {new Date().getFullYear()} All rights Reserved. Serene.</b>
        </div>
        <div className="col-md-7 offset-md-1 offset-lg-2 clearfix">
          {/* <b>{t('Base in HK')}</b> */}
          <div className="local-scroll float-end mt-n20 mt-sm-10">
            <a href="#main" className="link-to-top">
              <i className="mi-arrow-up size-24" />
              <span className="visually-hidden">Scroll to top</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
