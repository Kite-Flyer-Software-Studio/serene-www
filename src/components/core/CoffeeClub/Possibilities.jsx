'use client';

import { useMemo } from 'react';
import { useTranslations } from 'next-intl';
import TypeWriter from '@/components/core/TypeWriter';
import React from 'react';
import Image from 'next/image';

import useTypeformWaitlistUrl from '@/hooks/useTypeformWaitlistUrl';

export default function Possibilities() {
  const typeformWaitlistUrl = useTypeformWaitlistUrl();
  const t = useTranslations('CoffeeClub.possibilities');

  const taglines = useMemo(
    () => [
      t('taglines.1'),
      t('taglines.2'),
      t('taglines.3'),
      t('taglines.4'),
      t('taglines.5'),
      t('taglines.6'),
      t('taglines.7'),
      t('taglines.8'),
    ],
    [t]
  );

  return (
    <section
      className="home-section parallax-mousemove-scene scrollSpysection"
      id="possibilities"
    >
      <div className="container min-height-100vh d-flex align-items-center pt-10 pb-100 pt-sm-120 pb-sm-120">
        {/* Home Section Content */}
        <div className="home-content text-start pb-md-20">
          <div className="row">
            {/* Home Section Text */}
            <div className="col-lg-6 d-flex align-items-center mb-md-60 mb-sm-30 z-index-1">
              <div className="hs-title-overlap w-200 text-center text-lg-start">
                <h2 className="section-descr-large mb-30 mb-sm-20 wow fadeInUp">
                  {t('title')}
                </h2>
                <h1 className="hs-title-12 uppercase font-alt mb-40 mb-sm-30">
                  <span className="d-block wow fadeRotateIn">
                    {t('tagline')}
                  </span>
                  <span
                    className="d-block wow fadeRotateIn"
                    data-wow-delay="0.2s"
                    data-wow-offset={0}
                  >
                    <span className="visually-hidden">
                      for small talk, for big talk, for real talk
                    </span>
                    <TypeWriter strings={taglines} colorClass="" />
                  </span>
                </h1>
                <div
                  className="local-scroll wow fadeInUp wch-unset"
                  data-wow-delay="0.5s"
                  data-wow-offset={0}
                >
                  <a
                    href={`${typeformWaitlistUrl}?utm_content=meet-possibilities`}
                    className="btn btn-mod btn-large btn-circle"
                    data-btn-animate="y"
                    style={{ backgroundColor: '#FF6D1F' }}
                    target="_blank"
                  >
                    <span className="btn-animate-y">
                      <span className="btn-animate-y-1">{t('cta')}</span>
                      <span className="btn-animate-y-2" aria-hidden="true">
                        {t('cta')}
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            {/* End Home Section Text */}
            {/* Image */}
            <div className="col-lg-6 d-flex align-items-center">
              <div
                className="w-100 wow fadeInLeft opacity-75"
                data-wow-delay="0.6s"
              >
                <Image
                  src="/assets/images/serene/coffee/coffee-chat-3.jpg"
                  alt="Image Description"
                  width={900}
                  height={600}
                />
              </div>
            </div>
            {/* End Image */}
          </div>
        </div>
        {/* End Home Section Content */}
      </div>
    </section>
  );
}
