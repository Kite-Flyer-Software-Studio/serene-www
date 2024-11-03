import { useTranslations } from 'next-intl';
import AnimatedText from '@/components/core/AnimatedText';

export default function Hero() {
  const t = useTranslations('Dinners');

  return (
    <div
      className="container min-height-100vh d-flex align-items-center pt-100 pb-100 pt-sm-120 pb-sm-120"
       style={{
        background: 'url(/assets/images/serene/how-it-works-hero-2.svg) center no-repeat',
        margin: 0,
        minWidth: '100vw',
        backgroundSize: 'cover'
      }}
    >
      <div className="position-absolute top-0 bottom-0 start-0 end-0 bg-gradient-white" />
      <div className="container position-relative pt-50">
        <div className="text-center">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <h2
                className="section-caption-border mb-30 mb-xs-20 wow fadeInUp"
                data-wow-duration="1.2s"
              >
                {t('Title1')}
              </h2>
              <h1 className="hs-title-1 mb-0">
                <span
                  className="wow charsAnimIn"
                  data-splitting="chars"
                >
                  <AnimatedText text= {t('Title2')} />
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div
        className="local-scroll scroll-down-3-wrap wow fadeInUp"
        data-wow-offset={0}
      >
        <a href="#event-list" className="scroll-down-3">
          Scroll Down
        </a>
      </div>
    </div>
  );
}
