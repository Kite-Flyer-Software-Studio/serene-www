import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
// import Link from 'next/link';

const ParallaxContainer = dynamic(
  () => import('@/components/common/ParallaxContainer'),
  {
    ssr: false, // Disable server-side rendering
  }
);

export default function Hero() {
  const t = useTranslations('HowItWorks');
  return (
    <ParallaxContainer
      className="page-section pt-90 pb-90 pb-xs-40 parallax-5 "
      style={{
        backgroundImage: 'url(/assets/images/serene/how-it-works-hero.svg)',
      }}
      id="home"
    >
      <div className="container position-relative">
        <div className="mb-20">
          {/* <div className="mb-10">
            <Link
              href="/"
              className="link-hover-anim align-middle"
              data-btn-animate="y"
            >
              <span className="btn-animate-y">
                <span className="btn-animate-y-1">
                  <i
                    className="icon-arrow-left2 size-14"
                    aria-hidden="true"
                  ></i>{' '}
                  Back to home
                </span>
                <span className="btn-animate-y-2" aria-hidden="true">
                  <i
                    className="icon-arrow-left2 size-14"
                    aria-hidden="true"
                  ></i>{' '}
                  Back to home
                </span>
              </span>
            </Link>
          </div> */}
          {/* <hr className="white mt-0 mb-0" /> */}
        </div>
        <div className="row">
          <div className="col-9 col-sm-8">
            <h1 className="hs-title-5 font-alt overflow-hidden mb-0">
              <span className="d-block wow fadeRotateIn">{t('Title')}</span>
              <span className="d-block text-end wow fadeRotateIn">
                {t('Title2')}
              </span>
            </h1>
          </div>
        </div>
      </div>
      {/* Scroll Down */}
      <div
        className="local-scroll scroll-down-wrap-2 d-none d-lg-block wow fadeInUp"
        data-wow-offset={0}
      >
        <div className="full-wrapper text-end">
          <span className="scroll-down-2">
            <Image
              width="50"
              height="73"
              src="/assets/images/demo-modern/arrow-down-1-white.svg"
              alt="Scroll Down"
            />
          </span>
        </div>
      </div>
      {/* End Scroll Down */}
    </ParallaxContainer>
  );
}
