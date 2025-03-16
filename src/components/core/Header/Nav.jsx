'use client';

import addScrollspy from '@/utlis/addScrollSpy';
import { init_classic_menu_resize } from '@/utlis/menuToggle';
import { scrollToElement } from '@/utlis/scrollToElement';
import { closeMobileMenu } from '@/utlis/toggleMobileMenu';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo, useLayoutEffect } from 'react';

export default function OnePageNav({ links, animateY = false }) {
  const pathname = usePathname();
  const locale = useLocale();

  const localHref = useMemo(
    () => (locale === 'en' ? '/en' : '/zh-HK'),
    [locale]
  );

  useLayoutEffect(() => {
    setTimeout(() => {
      scrollToElement();
    }, 1000);
    init_classic_menu_resize();
    window.addEventListener('scroll', addScrollspy);

    window.addEventListener('resize', init_classic_menu_resize);

    return () => {
      window.removeEventListener('scroll', addScrollspy);
      window.removeEventListener('resize', init_classic_menu_resize);
    };
  }, []);

  return (
    <>
      {links.map((link) => {
        const externalUrl = link.href.indexOf('http') !== -1;
        return (
          <li key={link.text}>
            <Link
              className={`${
                !externalUrl && pathname.split('/').reverse()[0] == link.href
                  ? 'active'
                  : ''
              } position-relative`}
              href={externalUrl ? link.href : `${localHref}/${link.href}`}
              target={externalUrl ? '_blank' : '_self'}
            >
              {animateY ? (
                <span className="btn-animate-y">
                  <span className="btn-animate-y-1">{link.text}</span>
                  <span className="btn-animate-y-2" aria-hidden="true">
                    {link.text}
                  </span>
                </span>
              ) : (
                link.text
              )}
              {link.new && (
                <span class="position-absolute translate-middle badge rounded-pill bg-danger nav-badge">
                  New
                </span>
              )}
            </Link>
          </li>
        );
      })}
    </>
  );
}
