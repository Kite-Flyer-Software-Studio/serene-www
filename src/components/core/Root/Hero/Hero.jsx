'use client';
import TypeWriter from '@/components/common/TypeWriter';
import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';
import useTypeformWaitlistUrl from '@/hooks/useTypeformWaitlistUrl';
import GroupDinnerOne from './images/group-dinner.jpg';
import GroupDinnerTwo from './images/group-5.jpg';
import GroupDinnerThree from './images/group-four.jpg';

import css from './style.module.css';
import ParallaxContainer from '@/components/common/ParallaxContainer';

// const ParallaxContainer = dynamic(
//   () => import('@/components/common/ParallaxContainer'),
// );

const IMAGES = [
  {
    caption: 'Now or Never.',
    image: GroupDinnerOne,
  },
  {
    caption: 'Unexpected conversations with gorgeous souls.',
    image: GroupDinnerThree,
  },
  {
    caption: 'Strangers are just friends waiting to happen.',
    image: GroupDinnerTwo,
  },
];

export default function Hero() {
  const t = useTranslations('Root.hero');
  const typeformWaitlistUrl = useTypeformWaitlistUrl();

  return (
    <ParallaxContainer
      className="page-section parallax-5"
      style={{
        backgroundImage: 'url(/assets/images/serene/how-it-works-hero.svg)',
      }}
      id="home"
    >
      <div className="container min-height-70vh d-flex align-items-start pb-100 pb-sm-120 position-relative">
        {/* Home Section Content */}
        <div className="home-content text-start pb-md-20">
          <div className="row">
            {/* Home Section Text */}
            <div className="col-lg-6 col-12 d-flex align-items-center mb-md-60 mb-sm-30 z-index-1">
              <div className="hs-title-overlap w-100 text-center text-lg-start">
                <h2 className="section-descr-large mb-20 mb-sm-10 wow fadeInUp">
                  {t.rich('Every Tuesday & Thursday')}
                </h2>
                <h1 className="hs-title-2 font-alt mb-20 mb-sm-10">
                  <span
                    className="d-block wow uppercase fadeRotateIn"
                    style={{ letterSpacing: '-0.05em' }}
                  >
                    {t.rich('Meet new friends')}
                  </span>
                  <span
                    className="d-block wow fadeRotateIn"
                    data-wow-delay="0.2s"
                    data-wow-offset={0}
                  >
                    <span className="visually-hidden">
                      {t.rich('Uniqueness')}
                    </span>
                    <TypeWriter
                      strings={t.rich('Uniqueness').split(', ')}
                      colorClass=""
                    />
                  </span>
                </h1>
                <h2 className="hs-title-11 wow font-alt mb-40 mb-sm-30 fadeInUp">
                  {t.rich('Connect with')}
                </h2>
                <div
                  className="local-scroll wow fadeInUp wch-unset"
                  data-wow-delay="0.5s"
                  data-wow-offset={0}
                >
                  <a
                    href={`${typeformWaitlistUrl}?utm_content=hero`}
                    className="btn btn-mod btn-large btn-circle"
                    data-btn-animate="y"
                    style={{ backgroundColor: '#FF6D1F' }}
                  >
                    <span className="btn-animate-y">
                      <span className="btn-animate-y-1">
                        {t('Step out comfort')}
                      </span>
                      <span className="btn-animate-y-2" aria-hidden="true">
                        {t('Step out comfort')}
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            {/* End Home Section Text */}
            {/* Image */}
            <div className="col-lg-6 col-12 d-flex flex-row justify-content-end wow fadeInUp">
              <div className={css.polaroids}>
                {IMAGES.map(({ caption, image }, index) => {
                  return (
                    <div className={css.polaroid} key={index}>
                      <Image src={image} alt="Image" className={css.picture} />
                      <div className={css.caption}>{caption}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* End Image */}
          </div>
        </div>
      </div>
    </ParallaxContainer>
  );
}
