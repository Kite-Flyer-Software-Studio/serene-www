'use client';
import TypeWriter from '@/components/core/TypeWriter';
import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import MeetOne from './images/meet-1.jpg';
import MeetTwo from './images/meet-2.jpg';
import MeetThree from './images/meet-3.jpg';
import { APP_STORE_URL } from '@/constants';

import css from './style.module.css';

const IMAGES = [
  {
    caption: 'Unexpected conversations with gorgeous souls.',
    image: MeetOne,
  },
  {
    caption: 'Now or Never',
    image: MeetTwo,
  },
  {
    caption: 'Strangers are just friends waiting to happen.',
    image: MeetThree,
  },
];

export default function Hero() {
  const t = useTranslations('Root.hero');

  return (
    <div
      className="page-section"
      style={{
        backgroundImage: 'url(/assets/images/serene/how-it-works-hero.svg)',
        paddingTop: 120,
        height: '100vh'
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
                <h2 className="section-descr-large mb-20 mb-sm-50 wow fadeInUp">
                  {t.rich('Every Tuesday & Thursday')}
                </h2>
                <h1 className="hs-title-2 font-alt mb-20 mb-sm-50 hero-typer-text">
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
                  <a href={APP_STORE_URL} target="_blank" className="appstore-button-2 w-inline-block"><img src="https://cdn.prod.website-files.com/661e79a55efc01789befffa6/66340136311af75cbabf3a7c_Vectors-Wrapper.svg" loading="lazy" width="140" height="46.666664123535156" alt="" className="appstore-button-2" /></a>
                </div>
              </div>
            </div>
            {/* End Home Section Text */}
            {/* Image */}
            <div className="col-lg-6 col-12 d-flex flex-row justify-content-end wow fadeInUp">
              <div className={css.polaroids}>
                {IMAGES.map(({ caption, image }, index) => {
                  return (
                    <div className={css.polaroid} key={index} style={{ width: index === 0 ? 480 : index === 1 ? 640 : 560, marginTop: index === 2 ? 120 : 0 }}>
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
    </div>
  );
}
