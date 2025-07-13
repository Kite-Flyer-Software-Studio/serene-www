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
        id: 6,
        question: t('6.question'),
        answer: t('6.answer'),
      },
      {
        id: 7,
        question: t('7.question'),
        answer: t('7.answer'),
      },
      {
        id: 8,
        question: t('8.question'),
        answer: t('8.answer'),
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
    <section className="page-section pt-0" id="faq">
      <div className="container relative wow fadeInUp">
        <div className="row mb-30">
          <div className="col-md-8 offset-md-2">
            <dl className="toggle">
              <React.Fragment key={0}>
                <dt
                  onClick={() => {
                    setCurrentIndex((pre) => (pre === 0 ? -1 : 0));
                  }}
                >
                  <a ref={(el) => (questionRefs.current[0] = el)}>
                    {t('5.question')}
                  </a>
                </dt>
                <dd
                  ref={(el) => (answerRefs.current[0] = el)}
                  className="black faqAnswer"
                >
                  <div className="mb-2">
                    <h5 className="mb-0">Your first meet is risk-free:</h5>
                    <p className="mb-0">✅ FREE matching fee</p>
                    <p className="mb-0">
                      ✅ $50 (coffee) / $100 (wine) deposit to secure your spot
                    </p>
                    <p className="mb-0">
                      ➞ Attend? Your drink (☕/🍷) is covered by the deposit!
                    </p>
                    <p className="mb-0">➞ No-show? Deposit is forfeited.</p>
                  </div>
                  <div>
                    <h5 className="mb-0">After your first meet:</h5>
                    <p className="mb-0">
                      ✅ $100 matching fee (curated partner + reserved seat)
                    </p>
                    <p className="mb-0">
                      ✅ Drinks purchased separately at our shop on meet day
                      (Just pay for your drink at the shop - like a regular
                      visit!)
                    </p>
                  </div>
                  <div>
                    <p className="mb-0">
                      ✨ Bonus: Refer a friend who signs up → Your next meet has
                      $0 matching fee!
                    </p>
                  </div>
                </dd>
              </React.Fragment>
              {faqData.map((item, index) => (
                <React.Fragment key={index + 1}>
                  <dt
                    onClick={() => {
                      setCurrentIndex((pre) =>
                        pre == index + 1 ? -1 : index + 1
                      );
                    }}
                  >
                    <a ref={(el) => (questionRefs.current[index + 1] = el)}>
                      {item.question}
                    </a>
                  </dt>
                  <dd
                    ref={(el) => (answerRefs.current[index + 1] = el)}
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
