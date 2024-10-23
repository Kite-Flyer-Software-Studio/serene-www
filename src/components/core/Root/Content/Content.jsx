import React from 'react';
import Image from 'next/image';
import Network from './Network';
import Marquee from './Marquee';
import Testimonials from './Testimonials';
import Link from 'next/link';
import Accordion from './Accordion';
import { useLocale, useTranslations } from 'next-intl';

import useTypeformWaitlistUrl from '@/hooks/useTypeformWaitlistUrl';

export const valuePropsOne = [
  {
    title: 'Personality Algorithm Matching',
    description:
      'Our smart algorithm takes consideration of your personality and values, and expertly pair you with people who share similar interests and values.',
    svgPath:
      'M21.62 20.196c1.055-.922 1.737-2.262 1.737-3.772 0-1.321-.521-2.515-1.357-3.412v-6.946l-11.001-6.066-11 6v12.131l11 5.869 5.468-2.917c.578.231 1.205.367 1.865.367.903 0 1.739-.258 2.471-.676l2.394 3.226.803-.596-2.38-3.208zm-11.121 2.404l-9.5-5.069v-10.447l9.5 4.946v10.57zm1-.001v-10.567l5.067-2.608.029.015.021-.04 4.384-2.256v5.039c-.774-.488-1.686-.782-2.668-.782-2.773 0-5.024 2.252-5.024 5.024 0 1.686.838 3.171 2.113 4.083l-3.922 2.092zm6.833-2.149c-2.219 0-4.024-1.808-4.024-4.026s1.805-4.025 4.024-4.025c2.22 0 4.025 1.807 4.025 4.025 0 2.218-1.805 4.026-4.025 4.026zm-.364-3.333l-1.306-1.147-.66.751 2.029 1.782 2.966-3.12-.725-.689-2.304 2.423zm-16.371-10.85l4.349-2.372 9.534 4.964-4.479 2.305-9.404-4.897zm9.4-5.127l9.404 5.186-3.832 1.972-9.565-4.98 3.993-2.178z',
  },
  {
    title: 'Special Set Menus Only for Serene',
    description:
      "Our partner restaurants go above and beyond to create bespoke set menus only for Serene's guests.",
    svgPath:
      'M12 0c-3.371 2.866-5.484 3-9 3v11.535c0 4.603 3.203 5.804 9 9.465 5.797-3.661 9-4.862 9-9.465v-11.535c-3.516 0-5.629-.134-9-3zm0 1.292c2.942 2.31 5.12 2.655 8 2.701v10.542c0 3.891-2.638 4.943-8 8.284-5.375-3.35-8-4.414-8-8.284v-10.542c2.88-.046 5.058-.391 8-2.701zm5 7.739l-5.992 6.623-3.672-3.931.701-.683 3.008 3.184 5.227-5.878.728.685z',
  },
  {
    title: 'Curated Selection of Fine Wines',
    description:
      'Our fine wines are carefully paired to complement each dish in our dinner set menu and elevate your culinary experience.',
    svgPath:
      'M6.514 24.015h-3v-3.39c-2.08-.638-3.5-2.652-3.5-5.04 0-1.19.202-1.693 1.774-5.603.521-1.294 1.195-2.97 2.068-5.179.204-.518.67-.806 1.17-.802.482.004.941.284 1.146.802.718 1.817 1.302 3.274 1.777 4.454.26-.596.567-1.288.928-2.103.694-1.565 1.591-3.592 2.754-6.265.258-.592.881-.906 1.397-.888.572.015 1.126.329 1.369.888 1.163 2.673 2.06 4.7 2.754 6.265 2.094 4.727 2.363 5.334 2.363 6.764 0 2.927-2.078 5.422-5 6.082v4.015h-3v-4.015c-.943-.213-1.797-.617-2.523-1.165-.612.845-1.466 1.48-2.477 1.79v3.39zm14.493-6c1.652 0 2.993 1.341 2.993 2.993s-1.341 2.993-2.993 2.993-2.993-1.341-2.993-2.993 1.341-2.993 2.993-2.993zm.007.993c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2zm-7.5 3.993v-3.839c4.906-.786 5-4.751 5-5.244 0-1.218-.216-1.705-2.277-6.359-2.134-4.82-2.721-6.198-2.755-6.261-.079-.145-.193-.292-.455-.297-.238 0-.37.092-.481.297-.034.063-.621 1.441-2.755 6.261-2.061 4.654-2.277 5.141-2.277 6.359 0 .493.094 4.458 5 5.244v3.839h1zm-6.123-12.448l-.08-.198c-1.589-3.957-2.04-5.116-2.067-5.171-.072-.151-.15-.226-.226-.228-.109 0-.188.13-.235.228-.028.05-.316.818-2.066 5.171-1.542 3.833-1.703 4.233-1.703 5.23 0 1.988 1.076 3.728 3.5 4.25v3.166h1v-3.166c1.266-.273 2.159-.876 2.725-1.666-1.078-1.12-1.725-2.619-1.725-4.251 0-.979.126-1.572.877-3.365z',
  },
];

export default function Content({
  onePage = false,
  dark = false,
  eadge2 = false,
}) {
  const locale = useLocale();
  const t = useTranslations('Root.content');
  const typeformWaitlistUrl = useTypeformWaitlistUrl();

  const localHref = React.useMemo(
    () => (locale === 'en' ? '/zh-HK' : '/en'),
    [locale]
  );

  return (
    <>
      {/* Marquee Section */}
      <div className="page-section overflow-hidden pt-0 pb-0">
        {/* Marquee Text Line */}
        <div className="marquee marquee-style-2 no-rotate">
          <div className="marquee-track marquee-animation-1">
            <div>"Be True To Your Self"</div>
            <div aria-hidden="true">"Friendship First"</div>
            <div aria-hidden="true">"Safe Space, Open Hearts"</div>
            <div aria-hidden="true">"Judgement Free"</div>
            <div aria-hidden="true">"No Assholes"</div>
            <div aria-hidden="true">"Open Up, Be Real"</div>
            <div aria-hidden="true">"Engage, Don't Just Exist"</div>
            <div aria-hidden="true">"Savouring More Than Just Food"</div>
            <div aria-hidden="true">"Face-to-Face Connections"</div>
          </div>
        </div>
        {/* End Marquee Text Line */}
      </div>
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
            <div className="col-md-10 offset-md-1 relative text-start text-md-end pt-40 pt-sm-20 local-scroll">
              {/* Decorative Dots */}
              <div
                className="decoration-2 d-none d-md-block"
                data-rellax-y=""
                data-rellax-speed="0.7"
                data-rellax-percentage="-0.2"
              >
                <Image
                  width="103"
                  height="223"
                  src="/assets/images/decoration-2.svg"
                  alt=""
                />
              </div>
              {/* End Decorative Dots */}

              <Link
                href={`/main-pages-about-1${dark ? '-dark' : ''}`}
                className="link-hover-anim underline align-middle"
                data-link-animate="y"
              >
                <span className="link-strong link-strong-unhovered">
                  Learn more about us{' '}
                  <i className="mi-arrow-right size-18" aria-hidden="true"></i>
                </span>
                <span
                  className="link-strong link-strong-hovered"
                  aria-hidden="true"
                >
                  Learn more about us{' '}
                  <i className="mi-arrow-right size-18" aria-hidden="true"></i>
                </span>
              </Link>
            </div>
            <div className="col-lg-10 offset-lg-1">
              {/* About Section */}
              {/* <div
                className="section-descr-extralarge mb-60 mb-md-30 wow linesAnimIn"
                data-splitting="lines"
              >
                <h2 className="section-title-inline-1">{t('about.title')}</h2>
                {t('about.description')}
              </div> */}

              {/* Benefits Section */}
              <section className="page-section mb-100 mb-md-60">
                <div className="container position-relative">
                  {/* Grid */}
                  <div className="row">
                    {/* Text */}
                    <div className="col-md-12 col-lg-3 mb-md-50">
                      <h2 className="section-caption mb-xs-10">
                        Friends with Benefits
                      </h2>
                      <h3 className="section-title-small mb-40">Why Serene?</h3>
                      <div className="section-line" />
                    </div>
                    {/* End Text */}
                    {/* Feature Item */}
                    {valuePropsOne.slice(0, 3).map((elm, i) => (
                      <div
                        key={i}
                        className="col-md-4 col-lg-3 d-flex align-items-stretch mb-sm-30"
                      >
                        <div className="alt-features-item border-left mt-0">
                          <div className="alt-features-icon">
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              aria-hidden="true"
                              focusable="false"
                              xmlns="http://www.w3.org/2000/svg"
                              fillRule="evenodd"
                              clipRule="evenodd"
                            >
                              <path d={elm.svgPath} />
                            </svg>
                          </div>
                          <h4 className="alt-features-title">{elm.title}</h4>
                          <div className="alt-features-descr">
                            {elm.description}
                          </div>
                        </div>
                      </div>
                    ))}
                    {/* End Feature Item */}

                    {/* End Feature Item */}
                  </div>
                  {/* End Grid */}
                </div>
              </section>

              {/* Accordion */}
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
                  <div
                    className="section-image-behind"
                    style={{ opacity: '0.5' }}
                  >
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
