import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function HowItWorks2() {
  const t = useTranslations('CoffeeClub.howItWorks2');
  return (
    <section className="pt-30 pb-100">
      <div id="paddingRightContainer" className="container" />
      <div className="row g-0">
        <div className="col-lg-6 mt-n30 mt-md-0 mb-30 mb-md-0">
          <div
            id="paddingRight"
            className={`split-column-right bg-dark-1 light-content position-relative d-flex align-items-center`}
            data-rellax-y=""
            data-rellax-speed="0.5"
            data-rellax-percentage="0.5"
          >
            {/* Decorative Dots */}
            <div className="position-absolute top-0 start-0 pt-2 ps-2 opacity-02">
              <Image
                width={192}
                height={222}
                src="/assets/images/serene/coffee/decoration.svg"
                alt=""
              />
            </div>
            {/* End Decorative Dots */}
            <div>
              <h2 className="section-title mb-80">
                PHASE 2 -<em>{` ${t('title')}`}</em>
              </h2>
              <div className="mb-40">
                <p className="lead-alt mb-0">{t('step1.title')}</p>
                <p className="mb-0">{t('step1.description')}</p>
              </div>
              <div className="mb-40">
                <p className="lead-alt mb-0">{t('step2.title')}</p>
                <p className="mb-0">{t('step2.description')}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 d-flex align-items-stretch order-lg-first">
          <div className="split-image-left">
            <Image
              width={1100}
              height={930}
              src="/assets/images/serene/coffee/reico-esmee-meet.jpg"
              alt="Image Description"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
