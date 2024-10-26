import { useTranslations } from 'next-intl';
import AnimatedText from '@/components/core/AnimatedText';


export default function Hero() {
  const t = useTranslations('About');

  return (
    <div
      className="container min-height-100vh d-flex align-items-center pt-100 pb-100 pt-sm-120 pb-sm-120"
       style={{
        background: 'url(/assets/images/serene/how-it-works-hero-2.svg) center no-repeat',
        margin: 0,
        minWidth: '100vw',
        backgroundSize: '100%'
      }}
    >
      <div className="home-content text-center">
        <h2 className="section-title-tiny mb-50 mb-sm-30 wow fadeInDownShort">
          {t('Title1')}
        </h2>
        <h1 className="hs-title-3 mb-80 mb-sm-50 mb-xs-30">
          <span className="wow charsAnimInLong" data-splitting="chars">
            <AnimatedText text={t('Title2')} />
          </span>
        </h1>
        <div className="local-scroll wow fadeInUpShort" data-wow-delay="0.57s">
        </div>
      </div>
      <div
        className="local-scroll scroll-down-3-wrap wow fadeInUp"
        data-wow-offset={0}
      >
        <a href="#brief" className="scroll-down-3">
          Scroll Down
        </a>
      </div>
    </div>
  );
}
