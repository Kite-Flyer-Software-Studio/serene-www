import useWaitlistUrl from '@/hooks/useWaitlistUrl';
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('Community.hero');

  return (
    <div className="container min-height-100vh d-flex align-items-center pt-100 pb-100 pt-sm-120 pb-sm-120">
      {/* Background Video */}
      {/* Please replace the video file in folder "video" with your own file */}
      <div className="bg-video-wrapper">
        <video
          className="bg-video"
          preload="auto"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/assets/videos/Serene_community.mp4" type="video/mp4" />
        </video>
        <div className="bg-video-overlay bg-dark-alpha-50  video-hero" />
      </div>
      {/* End Background Video */}
      {/* Home Section Content */}
      <div className="home-content">
        <div className="row">
          {/* Home Section Text */}
          <div className="col-md-10 offset-md-1 mb-20 mb-sm-0">
            <h2 className="hs-title-11 mb-30 mb-xs-10 wow fadeInUp">
              {t('Title1')}
            </h2>
            <h1 className="hs-title-12 mb-50 mb-sm-30">
              <span className="wow charsAnimIn" data-splitting="chars">
                {t('Title2')}
              </span>
            </h1>
            <div
              className="local-scroll wch-unset wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <a
                href="#about"
                className="btn btn-mod btn-border-w btn-large btn-round ms-1 me-1 mt-2 align-middle"
                data-btn-animate="y"
              >
                {t('learnMore')}
              </a>
              <a
                href={`https://my-serene.mn.co/landing?utm_source=website&utm_content=community-hero`}
                className="btn btn-mod btn-w btn-large btn-round ms-1 me-1 mt-2 align-middle"
                style={{ backgroundColor: '#FF6D1F', color: '#fff' }}
                data-btn-animate="y"
                target="_blank"
              >
                {t('joinNow')}
              </a>
            </div>
          </div>
          {/* End Home Section Text */}
        </div>
      </div>
      {/* End Home Section Content */}
      {/* Scroll Down */}
      <div
        className="local-scroll scroll-down-wrap wow fadeInUp"
        data-wow-offset={0}
      >
        <a href="#about" className="scroll-down">
          <i className="mi-chevron-down" />
          <span className="visually-hidden">Scroll to the next section</span>
        </a>
      </div>
      {/* End Scroll Down */}
    </div>
  );
}
