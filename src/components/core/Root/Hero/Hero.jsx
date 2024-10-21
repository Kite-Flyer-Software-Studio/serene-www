"use client";
import TypeWriter from "@/components/common/TypeWriter";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import useTypeformWaitlistUrl from "@/hooks/useTypeformWaitlistUrl";
import GroupDinnerOne from './images/group-dinner.jpg'
import GroupDinnerTwo from './images/group-5.jpg'
import GroupDinnerThree from './images/group-four.jpg'

import css from './style.module.css'

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
]

export default function Hero() {
  const t = useTranslations('Root.Hero')
  const typeformWaitlistUrl = useTypeformWaitlistUrl()

  return (
    <div className="container min-height-100vh d-flex align-items-center pt-100 pb-100 pt-sm-120 pb-sm-120">
      {/* Home Section Content */}
      <div className="home-content text-start pb-md-20">
        <div className="row">
          {/* Home Section Text */}
          <div className="col-lg-6 d-flex align-items-center mb-md-60 mb-sm-30 z-index-1">
            <div className="hs-title-overlap w-100 text-center text-lg-start">
              <h2 className="section-descr-large mb-20 mb-sm-10 wow fadeInUp">
                {t.rich('Every Tuesday & Thursday')}
              </h2>
              <h1 className="hs-title-2 font-alt mb-20 mb-sm-10">
                <span className="d-block uppercase wow fadeRotateIn">{t.rich('Meet new friends')}</span>
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
                >
                 {t('Step out comfort')}
                </a>
              </div>
            </div>
          </div>
          {/* End Home Section Text */}
          {/* Image */}
          <div className="col-lg-6 d-flex align-flex-end wow fadeInUp">
            <div className={css.polaroids}>
              {IMAGES.map(({ caption, image }, index) => {
                return (
                  <div className={css.polaroid} key={index}>
                    <Image src={image} alt="Image" className={css.picture} />
                    <div className={css.caption}>{caption}</div>
                  </div>
                )
              })}
            </div>
          </div>
          {/* End Image */}
        </div>
      </div>
    </div>
  );
}
