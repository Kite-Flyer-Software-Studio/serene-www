'use client';
import { toggleMobileMenu } from '@/utlis/toggleMobileMenu';
import Nav from './Nav';
import Image from 'next/image';
import LanguageSelect from './LanguageSelect';
import useDetectUserEventNav from '@/hooks/useDetectUserEventNav';
import useTypeformWaitlistUrl from '@/hooks/useTypeformWaitlistUrl';
import { useLocale, useTranslations } from 'next-intl';
import { useMemo } from 'react';

const links = [
  { href: 'about', text: 'About', dataBtnAnimate: 'y' },
  { href: 'how-it-works', text: 'How it works', dataBtnAnimate: 'y' },
  { href: 'dinners', text: 'Dinners', dataBtnAnimate: 'y' },
];

export default function Header() {
  useDetectUserEventNav();
  const typeformWaitlistUrl = useTypeformWaitlistUrl();
  const t = useTranslations('Nav');
  const locale = useLocale();

  const localHref = useMemo(
    () => (locale === 'en' ? '/en' : '/zh-HK'),
    [locale]
  );

  return (
    <div className="main-nav-sub full-wrapper">
      <div className="nav-logo-wrap local-scroll">
        <a href={localHref} className="logo">
          <Image
            src="/assets/images/serene/logo.svg"
            alt="Serene Logo"
            width={140}
            height={91}
            className="light-mode-logo"
          />
        </a>
      </div>
      {/* Mobile Menu Button */}
      <div
        onClick={toggleMobileMenu}
        className="mobile-nav"
        role="button"
        tabIndex={0}
      >
        <i className="mobile-nav-icon" />
        <span className="visually-hidden">Menu</span>
      </div>
      {/* Main Menu */}
      <div className="inner-nav desktop-nav">
        <ul className="clearlist scroll-nav local-scroll justify-content-end scrollspyLinks">
          <Nav links={links} animateY />
          <li className="desktop-nav-display">
            <div className="vr" />
          </li>
          {/* Languages */}
          <LanguageSelect />
          {/* End Languages */}
          <li>
            <a
              href={`${typeformWaitlistUrl}?utm_content=header`}
              className="opacity-1 no-hover"
              target='_blank'
            >
              <span
                className="btn btn-mod btn-border btn-border-white btn-small btn-circle"
                data-btn-animate="y"
              >
                {t('Book Your Seat')}
              </span>
            </a>
          </li>
        </ul>
      </div>
      {/* End Main Menu */}
    </div>
  );
}
