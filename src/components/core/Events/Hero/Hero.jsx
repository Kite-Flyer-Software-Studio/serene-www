import { useTranslations } from 'next-intl';
import AnimatedText from '@/components/core/AnimatedText';

export default function Hero() {
  const t = useTranslations('Dinners');

  return (
    <div className="container min-height-100vh d-flex align-items-center pt-100 pb-100 pt-sm-120 pb-sm-120">
     <div className="bg-video-wrapper">
        <video
          className="bg-video"
          preload="auto"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/assets/videos/Serene_dinner.mp4" type="video/mp4" />
        </video>
        <div className="bg-video-overlay bg-dark-alpha-20  video-hero" />
      </div>
      <div className="home-content">
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
