import React from 'react';
import PillarsMarquee from './PillarsMarquee';
import LearnMoreAboutUsCta from './LearnMoreAboutUsCta';
import Benefits from './Benefits';
import TakePersonalityTestCta from './TakePersonalityTestCta';
import HowSereneWorksCta from './HowSereneWorksCta';
import Network from './Network';
import Marquee from './Marquee';
import Testimonials from './Testimonials';
import Link from 'next/link';
import Accordion from './Accordion';
import { useLocale, useTranslations } from 'next-intl';

import useTypeformWaitlistUrl from '@/hooks/useTypeformWaitlistUrl';
import SereneMoments from './SereneMoments';

export default function Content({
  onePage = false,
  dark = false,
  eadge2 = false,
}) {
  const locale = useLocale();
  const t = useTranslations('Root.content');
  const typeformWaitlistUrl = useTypeformWaitlistUrl();

  const localHref = React.useMemo(
    () => (locale === 'en' ? '/en' : '/zh-HK'),
    [locale]
  );

  return (
    <>
      <PillarsMarquee />
      <section
        className={`page-section  scrollSpysection ${
          dark ? 'bg-dark-2 ' : 'bg-dark-1'
        }  light-content`}
        id="about"
      >
        <div className="container position-relative">
          <div className="row">
            <LearnMoreAboutUsCta localHref={localHref} />
            <div className="col-lg-10 offset-lg-1">
              {/* About Section */}
              {/* <div
                className="section-descr-extralarge mb-60 mb-md-30 wow linesAnimIn"
                data-splitting="lines"
              >
                <h2 className="section-title-inline-1">{t('about.title')}</h2>
                {t('about.description')}
              </div> */}
              <Benefits />
              <TakePersonalityTestCta
                typeformWaitlistUrl={typeformWaitlistUrl}
                locale={t}
              />
              {/* <Accordion /> */}
              <SereneMoments locale={t} />
              <HowSereneWorksCta localHref={localHref} />
            </div>
          </div>
        </div>
      </section>
      <section
        className={`page-section scrollSpysection bg-linen ${
          dark ? 'bg-dark-1 light-content' : ''
        } `}
        id="partners"
      >
        <div className="container">
          <div className="mb-100 mb-md-40">
            <div className="row">
              <div className="col-sm-6">
                <h2 className="section-caption mb-0 mb-xs-10 black">
                  {t('partners.title')}
                </h2>
              </div>
              {/* <div className="col-sm-6 local-scroll mt-n10 mb-n10 text-sm-end">
                <Link
                  href={`${localHref}/network`}
                  className="link-hover-anim align-middle"
                  data-link-animate="y"
                >
                  <span className="link-strong link-strong-unhovered">
                    {t('partners.seeAllPartners')}
                    <i
                      className="icon-arrow-right2 size-14"
                      aria-hidden="true"
                    ></i>
                  </span>
                  <span
                    className="link-strong link-strong-hovered"
                    aria-hidden="true"
                  >
                    {t('partners.seeAllPartners')}
                    <i
                      className="icon-arrow-right2 size-14"
                      aria-hidden="true"
                    ></i>
                  </span>
                </Link>
              </div> */}
            </div>
            <hr
              className={` ${dark ? 'white opacity-1' : 'black'}  mt-3 mb-0`}
            />
          </div>
          <Network />
          <div className="row">
            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
              <hr
                className={` ${dark ? 'white opacity-1' : 'black'}  mt-0 mb-20`}
              />
              <div className="row">
                <div className="col-sm-12 col-md-12 text-center text-sm-center mb-xs-20">
                  <p className="section-descr mb-0 black">
                    {t('partners.slogan')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-100">
          <div className="text-center local-scroll">
            <Link
              href={`${typeformWaitlistUrl}?utm_content=partners`}
              className="btn btn-mod btn-large btn-circle white"
              data-btn-animate="y"
              style={{ backgroundColor: '#FF6D1F' }}
            >
              <span className="btn-animate-y">
                <span className="btn-animate-y-1">{t('partners.Cta')}</span>
                <span className="btn-animate-y-2" aria-hidden="true">
                  {t('partners.Cta')}
                </span>
              </span>
            </Link>
          </div>
        </div>
      </section>
      <div
        className={`overflow-hidden  ${dark ? 'light-content' : ''} bg-linen`}
      >
        <Marquee />
      </div>
      <section
        className={`page-section ${
          dark ? 'bg-dark-1 light-content' : ''
        } bg-linen`}
      >
        <Testimonials />
      </section>
    </>
  );
}
