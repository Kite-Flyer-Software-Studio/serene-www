import ParallaxContainer from "@/components/core/ParallaxContainer";
import AnimatedText from "@/components/core/AnimatedText";
import Image from "next/image";

import React from "react";
import { useLocale, useTranslations } from "next-intl";

const FAQ_EN = [
  {
    question: 'How are groups assigned?',
    answer:
      'We use our algorithm to look at details such as age, gender balance, and your personality quiz answers to make sure everyone gets along. We aim to keep the age gap between the youngest and oldest diners at a table to around 10 years whenever possible.',
  },
  {
    question: 'How do I book my seat?',
    answer:
      "Join Serene by finishing our personality quiz, go to https://lu.ma/serene-regular selecting the dinner you'd like to join. Our team will reach out for confirmation.",
  },
  {
    question: 'Who can use Serene?',
    answer:
      'At Serene, we provide an inclusive environment for all, regardless of age, gender, sexual orientation, or religion. Our goal is to establish a cozy setting for every participant. Our fundamental values revolve around compassion, empathy, and attentive listening.',
  },
  {
    question: 'What languages are spoken at Serene dinners?',
    answer:
      'The languages spoken during dinners include English and Cantonese. When booking, you have the option to select one or both languages. Our aim is to arrange members into groups based on their language preferences.',
  },
  {
    question: 'How can I contact Serene?',
    answer: 'You can reach us through our Instagram account or email.',
  },
]

const FAQ_ZH = [
  {
    question: '群組如何安排',
    answer:
      '我們使用算法來檢視資訊，如年齡、性別平衡和您對於人格試驗答案，以確保每個人都合得來。盡可能地保持在一張桌子上的最年輕和最老的用戶之間的年齡差距約為 10 年。',
  },
  {
    question: '如何預訂座位',
    answer:
      '加入 Serene，完成我們的性格測驗，請前往 https://lu.ma/serene-regular 選擇您想參加的晚宴。我們的團隊將會聯絡您確認。',
  },
  {
    question: '誰可以使用 Serene',
    answer:
      '在 Serene，我們為所有人提供一個包容性的環境，無論年齡、性別、性取向或宗教都沒有限制。我的目標是創造一個溫馨的氣氛給每位參與者。我們的根本價值觀圍繞著同情心、同理心和傾聽的關係。',
  },
  {
    question: '在 Serene 晚餐中說什麼語言',
    answer:
      '晚餐中的語言包括英文和粵語。預訂時，您可以選擇一個或兩個語言。我們的目標是根據您的語言偏好安排成員到不同的群組。',
  },
  {
    question: '如何聯繫 Serene',
    answer: '您可以通過我們的 Instagram 帳戶聯繫。',
  },
]


export default function FAQ() {
  const t = useTranslations('About.faq')
   const locale = useLocale();

  const faqs = React.useMemo(
    () => (locale === 'en' ? FAQ_EN : FAQ_ZH),
    [locale]
  );

  return (
    <>
      <section className="page-section pt-0 pb-0" id="faq">
        <ParallaxContainer
          className="page-section bg-gray-light-1 bg-light-alpha-90 parallax-5"
        >
          <>
            <div className="position-absolute top-0 bottom-0 start-0 end-0 bg-gradient-white" />
            <div className="container position-relative pt-50">
              {/* Section Content */}
              <div className="text-center">
                <div className="row">
                  {/* Page Title */}
                  <div className="col-md-8 offset-md-2">
                    <h2
                      className="section-caption-border mb-30 mb-xs-20 wow fadeInUp"
                      data-wow-duration="1.2s"
                    >
                      FAQ
                    </h2>
                    <h1 className="hs-title-1 mb-0">
                      <span
                        className="wow charsAnimIn"
                        data-splitting="chars"
                      >
                        <AnimatedText text={t('title')} />
                      </span>
                    </h1>
                  </div>
                  {/* End Page Title */}
                </div>
              </div>
              {/* End Section Content */}
            </div>
          </>
        </ParallaxContainer>
      </section>
      <section className="page-section pt-0">
        <div className="container relative wow fadeInUp">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              {faqs.map((elm, i) => (
                <React.Fragment key={i}>
                  <hr className="mb-30" />
                  <h4 className="mb-20">{elm.question}</h4>
                  <p>{elm.answer}</p>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>
      <hr className="mt-0 mb-0" />
      <section className="page-section">
        <div className="container position-relative">
          {/* Decorative Waves */}
          <div className="position-relative">
            <div
              className="decoration-21 d-none d-lg-block"
              data-rellax-y=""
              data-rellax-speed="0.7"
              data-rellax-percentage="0.5"
            >
              <Image
                src="/assets/images/common/decoration-3.svg"
                className="svg-shape"
                width={148}
                height={148}
                alt=""
              />
            </div>
          </div>
          {/* End Decorative Waves */}
          <div className="row wow fadeInUp">
            <div className="col-md-6 offset-md-1 col-lg-5 offset-lg-2 text-md-start mb-sm-30">
              <p className="section-descr mb-0">
                {t('enquiry')}
              </p>
            </div>
            <div className="col-md-4 col-lg-3 text-md-end">
              <div className="local-scroll">
                <a
                  href="mailto:contact@sereneexperience.com?subject=Hi Serene!"
                  className="btn btn-mod btn-large btn-round btn-hover-anim"
                >
                  <span>{t('contactUs')}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
