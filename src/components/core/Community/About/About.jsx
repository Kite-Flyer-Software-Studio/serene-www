import AnimatedText from "@/components/core/AnimatedText";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const Offerings = ['dining', 'drinks', 'events', 'wellness', 'fitness', 'mentoring']

export default function About() {
  const t = useTranslations('Community.community');

  return (
    <div className="container position-relative pt-120" id="about">
      <div className="row">
        <div className="col-lg-6 mb-md-60 mb-sm-30">
          <h2 className="section-caption mb-xs-10">{t('header')}</h2>
          <h3 className="section-title mb-30">
            <AnimatedText text={t('slogan')} />
          </h3>
          <div className="row">
            <div className="col-lg-10">
              <p
                className="section-descr mb-50 mb-sm-30 wow fadeInUp"
                data-wow-delay="0.4s"
              >
                {t('description')}
              </p>
            </div>
          </div>
          <ul
            className="nav nav-tabs services-tabs wow fadeInUp"
            data-wow-delay="0.55s"
            role="tablist"
          >
            {
              Offerings.map((offering, index) => (
                 <li role="presentation">
                  <a
                    href={`#${offering}-item`}
                    className={index === 0 ? 'active' : ''}
                    aria-controls={`${offering}-item`}
                    role="tab"
                    aria-selected={index === 0 ? 'true' : 'false'}
                    data-bs-toggle="tab"
                    key={offering}
                  >
                    {t(`offerings.${offering}.span`)}
                  </a>
                </li>
              ))
            }
          </ul>
        </div>
        <div
          className="col-lg-6 d-flex wow fadeInLeft"
          data-wow-delay="0.55s"
          data-wow-offset={275}
        >
          <div className="tab-content services-content">
            {/* Tab Content */}
            {
              Offerings.map((offering, index) => (
                <div
                  className={`tab-pane services-content-item show fade ${index === 0 ? 'active' : ''}`}
                  id={`${offering}-item`}
                  role="tabpanel"
                  key={`${offering}-item`}
                >
                  <div className="services-text">
                    <div className="services-text-container">
                      <h4 className="services-title">{t(`offerings.${offering}.span`)}</h4>
                      <p className="text-gray mb-0">
                        {t(`offerings.${offering}.description`)}
                      </p>
                    </div>
                  </div>
                  <Image
                    width={945}
                    height={1016}
                    className="services-image"
                    src={`/assets/images/serene/community/${offering}.png`}
                    alt="Image Description"
                  />
                </div>
              ))
            }
          </div>
          
        </div>
        <hr className={`mt-0 mb-0 `} />
        <section
          className={`page-section`}
        >
          <div className="container position-relative">
            {/* Decorative Waves */}
            <div
              className="decoration-3 d-none d-sm-block"
              data-rellax-y=""
              data-rellax-speed="-0.7"
              data-rellax-percentage="0.5"
            >
              <Image
                width={148}
                height={148}
                className="svg-shape"
                src="/assets/images/common/decoration-3.svg"
                alt=""
              />
            </div>
            {/* End Decorative Waves */}
            <div className="row text-center wow fadeInUp">
              <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                <p className="section-descr mb-50 mb-sm-30">
                  {t('ctaTitle')}
                </p>
                <div className="local-scroll">
                  <a
                    href={`https://my-serene.mn.co/landing?utm_source=website&utm_content=community-about-cta`}
                    className="btn btn-mod btn-large btn-round btn-hover-anim"
                    style={{ backgroundColor: '#FF6D1F', color: '#fff' }}
                    target="_blank"
                  >
                    <span>{t('cta')}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr className={`mt-0 mb-0 `} />
      </div>
    </div>
  );
}
