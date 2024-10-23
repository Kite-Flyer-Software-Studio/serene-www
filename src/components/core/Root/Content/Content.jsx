import React from 'react';
import Image from 'next/image';
import Network from './Network';
import Marquee from './Marquee';
import Testimonials from './Testimonials';
import Link from 'next/link';
import Accordion from './Accordion';
import { useLocale, useTranslations } from 'next-intl';

export default function Content({
  onePage = false,
  dark = false,
  eadge2 = false,
}) {
  const locale = useLocale();
  const t = useTranslations('Root.content');

  const localHref = React.useMemo(
    () => (locale === 'en' ? '/zh-HK' : '/en'),
    [locale]
  );

  return (
    <>
      <section
        className={`page-section  scrollSpysection ${
          dark ? 'bg-dark-2 ' : 'bg-dark-1'
        }  light-content`}
        id="about"
      >
        {/* {dark || eadge2 ? <></> : <div className="edge-top-figure-1" />} */}
        {/* Env Round Edge */}
        <div className="container position-relative">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div
                className="section-descr-extralarge mb-100 mb-md-60 wow linesAnimIn"
                data-splitting="lines"
              >
                <h2 className="section-title-inline-1">{t('about.title')}</h2>
                {t('about.description')}
              </div>
              {/* Accordion */}
              <Accordion />
              {/* <Accordion /> */}
              {/* End Accordion */}
              <div
                className="page-section scrollSpysection pt-0 pb-0"
                id="established"
              >
                <div className="position-relative text-center pt-140 pt-sm-100 pb-140 pb-sm-100">
                  <div className="position-relative z-index-1">
                    <h2 className="hs-title-5 font-alt overflow-hidden mb-60 mb-sm-40">
                      <span className="d-inline-block wow fadeRotateIn">
                        {t('about.establish')}
                      </span>
                      <span className="d-inline-block wow fadeRotateIn">
                        {t('about.since')}
                      </span>
                    </h2>
                    <div className="row">
                      <div className="col-md-6 offset-md-3 col-lg-4 offset-lg-4">
                        <p className="section-descr mb-0">
                          {t('about.subSlogan')}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="section-image-behind">
                    <Image
                      src="/assets/images/serene/root-friendship.png"
                      loading="lazy"
                      width={820}
                      height={1270}
                      alt="Image Description"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className={`page-section scrollSpysection  ${
          dark ? 'bg-dark-1 light-content' : ''
        } `}
        style={{ backgroundColor: '#FAF3E1' }}
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
              <div className="col-sm-6 local-scroll mt-n10 mb-n10 text-sm-end">
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
              </div>
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
      </section>
      <div
        className={`overflow-hidden  ${dark ? 'light-content' : ''} `}
        style={{ backgroundColor: '#FAF3E1' }}
      >
        <Marquee />
      </div>
      <section
        className={`page-section ${dark ? 'bg-dark-1 light-content' : ''} `}
        style={{ backgroundColor: '#FAF3E1' }}
      >
        <Testimonials />
      </section>
    </>
  );
}
