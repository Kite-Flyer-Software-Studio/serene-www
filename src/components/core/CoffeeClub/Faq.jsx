'use client';

import React, { useEffect, useRef, useState, useMemo } from 'react';
import { useTranslations } from 'next-intl';

export default function Faq() {
  const t = useTranslations('CoffeeClub.faq');
  const questionRefs = useRef([]);
  const answerRefs = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(-1);

  const faqData = useMemo(
    () => [
      {
        id: 1,
        question: t('1.question'),
        answer: t('1.answer'),
      },
      {
        id: 2,
        question: t('2.question'),
        answer: t('2.answer'),
      },
      {
        id: 3,
        question: t('3.question'),
        answer: t('3.answer'),
      },
      {
        id: 4,
        question: t('4.question'),
        answer: t('4.answer'),
      },
      {
        id: 5,
        question: t('5.question'),
        answer: t('5.answer'),
      },
      {
        id: 6,
        question: t('6.question'),
        answer: t('6.answer'),
      },
      {
        id: 7,
        question: t('7.question'),
        answer: t('7.answer'),
      },
    ],
    [t]
  );

  useEffect(() => {
    questionRefs.current.forEach((el) => {
      el.classList.remove('active');
    });
    answerRefs.current.forEach((el) => {
      el.style.height = '0px';
      el.style.overflow = 'hidden';
      el.style.transition = 'all 0.5s ease-in-out';
      el.style.marginBottom = '0px';
    });
    if (currentIndex !== -1) {
      questionRefs.current[currentIndex].classList.add('active');
      const element = answerRefs.current[currentIndex];
      element.style.height = element.scrollHeight + 'px';
      element.style.overflow = 'hidden';
      element.style.transition = 'all 0.5s ease-in-out';
      element.style.marginBottom = '1.55em';
    }
  }, [currentIndex]);

  return (
    <section className="page-section pt-0">
      <div className="container relative wow fadeInUp">
        <div className="row mb-30">
          <div className="col-md-8 offset-md-2">
            <dl className="toggle">
              {faqData.map((item, index) => (
                <React.Fragment key={index}>
                  <dt
                    onClick={() => {
                      setCurrentIndex((pre) => (pre == index ? -1 : index));
                    }}
                  >
                    <a ref={(el) => (questionRefs.current[index] = el)}>
                      {item.question}
                    </a>
                  </dt>
                  <dd
                    ref={(el) => (answerRefs.current[index] = el)}
                    className="black faqAnswer"
                  >
                    {item.answer}
                  </dd>
                </React.Fragment>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
