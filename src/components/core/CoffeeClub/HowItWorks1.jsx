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

        <div className="row">
          <div className="col-sm-4 mb-xs-50">
            <div className="call-action-4-images">
              <div className="call-action-4-image-1">
                <Image
                  width={500}
                  height={692}
                  src="/assets/images/serene/coffee/coffee-beans.jpg"
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

          <div className="col-sm-8 col-lg-6 col-xl-4 offset-xl-1 mt-n10">
            <div className="wow linesAnimIn" data-splitting="lines">
              <p className="lead-alt mt-0 mb-0">{t('description1.1')}</p>
              <p className="lead-alt mt-0 mb-100 fst-italic serif">
                {t('description1.2')}
              </p>
              <p className="lead-alt mb-40">{t('description2')}</p>
            </div>
          </div>

          <div className="col-lg-2 offset-xl-1 d-none d-lg-block">
            <div className="round overflow-hidden">
              <Image
                width={330}
                height={894}
                src="/assets/images/serene/coffee/coffee-cups.jpg"
                alt="Image description"
                className="wow scaleOutIn"
                data-wow-duration="1.2s"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
