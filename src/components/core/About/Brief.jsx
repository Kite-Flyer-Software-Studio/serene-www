import useTypeformWaitlistUrl from '@/hooks/useTypeformWaitlistUrl';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export default function Brief() {
  const t = useTranslations('About.brief');
  const typeformWaitlistUrl = useTypeformWaitlistUrl();

  return (
    <div className="container mt-60 mb-60" id="brief">
      <div className="row">
        <div className="col-md-12 text-center">
          <h3 className="section-title-strong mb-90 mb-sm-50">{t('title')}</h3>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-4 mb-xs-50">
          <div className="call-action-4-images">
            <div className="call-action-4-image-1">
              <Image
                width={500}
                height={692}
                src="/assets/images/serene/about/serene-dinner-1.jpg"
                alt="Serene first gathering"
                className="wow scaleOutIn"
                data-wow-duration="1.2s"
              />
            </div>
            <div className="call-action-4-image-2">
              <Image
                width={500}
                height={692}
                src="/assets/images/serene/about/serene-tomo-2.JPG"
                alt="Serene third gathering"
                className="wow scaleOutIn"
                data-wow-duration="1.2s"
                data-wow-offset="0"
              />
            </div>
          </div>
        </div>

        <div className="col-sm-8 col-lg-6 col-xl-4 offset-xl-1 mt-n10 about-brief-section">
          <div className="wow linesAnimIn" data-splitting="lines">
            <p className="lead mt-0 mb-32">{t('paragraph1')}</p>
            <p className="m-0">{t('paragraph2')}</p>
          </div>
          <Link
            href={`${typeformWaitlistUrl}?utm_content=about`}
            className="btn btn-mod  btn-medium btn-circle white"
            data-btn-animate="y"
            style={{ backgroundColor: '#FF6D1F' }}
            target="_blank"
          >
            <span className="btn-animate-y">
              <span className="btn-animate-y-1">{t('Cta')}</span>
              <span className="btn-animate-y-2" aria-hidden="true">
                {t('Cta')}
              </span>
            </span>
          </Link>
        </div>
        <div className="col-lg-2 offset-xl-1 d-none d-lg-block">
          <div className="round overflow-hidden">
            <Image
              width={330}
              height={894}
              src="/assets/images/serene/about/serene-dinner-3.jpg"
              alt="Serene Prompt Card"
              className="wow scaleOutIn"
              data-wow-duration="1.2s"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
