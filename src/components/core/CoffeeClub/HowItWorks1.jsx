import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function HowItWorks1() {
  const t = useTranslations('CoffeeClub.howItWorks1');
  return (
    <section className="page-section  scrollSpysection" id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-start">
            <h3 className="section-title-strong mb-90 mb-sm-50">
              {t('title')}
            </h3>
          </div>
        </div>
        <div className="call-action-4-image-3">
          <Image
            width={500}
            height={692}
            src="/assets/images/serene/coffee/daniel-nancy.jpg"
            alt="Image description"
            // className="wow scaleOutIn"
            data-wow-duration="1.2s"
            data-wow-offset="0"
          />
        </div>
        <div className="row">
          <div className="col-sm-4 mb-xs-50">
            <div className="call-action-4-images">
              <div className="call-action-4-image-1">
                <Image
                  width={500}
                  height={692}
                  src="/assets/images/serene/coffee/serene-wine-sitting.jpg"
                  alt="Image description"
                  className="wow scaleOutIn"
                  data-wow-duration="1.2s"
                />
              </div>
              <div className="call-action-4-image-2">
                <Image
                  width={500}
                  height={692}
                  src="/assets/images/serene/coffee/coffee-chat-2.jpg"
                  alt="Image description"
                  className="wow scaleOutIn"
                  data-wow-duration="1.2s"
                  data-wow-offset="0"
                />
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-8">
            <div className="wow linesAnimIn ms-4" data-splitting="lines">
              <h2 className="section-title mt-0 mb-40">
                PHASE 1 -<em>{` ${t('subtitle')}`}</em>
              </h2>
              <div className="mb-40">
                <p className="lead-alt mb-0">{t('step1.title')}</p>
                <p className="mb-0 fs-4">{t('step1.description')}</p>
                {/* <p className="mt-3 mb-0 fs-6">*{t('step1.helptext')}</p> */}
              </div>
              <div className="mb-40">
                <p className="lead-alt mb-0">{t('step2.title')}</p>
                <p className="mb-0 fs-4">{t('step2.description')}</p>
                <p className="mt-3 mb-0 fs-6">*{t('step2.helptext')}</p>
                <p className="mt-1 mb-0 fs-6">*{t('step2.helptext2')}</p>
              </div>
              <div className="mb-40">
                <p className="lead-alt mb-0">{t('step3.title')}</p>
                <p className="mb-0 fs-4">{t('step3.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
