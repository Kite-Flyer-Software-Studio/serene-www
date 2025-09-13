import AnimatedText from "@/components/core/AnimatedText";
import Image from "next/image";

import React from "react";
import { useLocale, useTranslations } from "next-intl";

const FAQ_EN = [
  {
    question: 'How does Serene work?',
    answer:
      'Every Thursday, you can send a personalized match request describing who you’d like to meet (for example, “I want to meet an INTJ who loves wine and dogs”). Our AI will shortlist three leads tailored to your preferences. Choose one to start a live in-app chat—focused purely on conversation and vibe, with no profile photos shown. The chat expires on Sunday, encouraging real connections and preparation for an in-person date.',
  },
  {
    question: 'How do I meet my match?',
    answer:
      "Simply send your match request every Thursday, pick your favorite from three AI-recommended leads, and start chatting. Effortless, thoughtful, and focused on compatibility—chats disappear by Sunday, so every conversation is intentional.",
  },
  {
    question: 'Why Serene exists?',
    answer:
      'Serene was created to bring back meaningful, stress-free connections by cutting out endless swiping and superficial judgments. We help you focus on authentic conversations and getting to know people for who they truly are.',
  },
  {
    question: 'What is the difference between Serene and other dating apps?',
    answer:
      'Unlike other apps, Serene uses AI to match you based on your unique requests and interests—no photos, no swiping. Here, it’s all about personality, preferences, and genuine conversation. Chats are temporary to keep momentum real, direct, and exciting.',
  },
  {
    question: 'What events do Serene host?',
    answer: 'Serene hosts exclusive social events for members, including wine tastings, DJ nights, and paint & sip sessions. These fun, welcoming gatherings are crafted to help you meet new people, enjoy unique experiences, and create lasting memories together.',
  },
  {
    question: 'How can I contact Serene?',
    answer: 'You can reach us through our Instagram account or email.',
  },
]

const FAQ_ZH = [
  {
    question: 'Serene 點運作？',
    answer:
      '每逢星期四，你可以發送一個個人化嘅配對請求，講出你想識邊類型嘅人（例如：「我想識一位鐘意紅酒同狗嘅 INTJ」）。我哋嘅 AI 會根據你嘅要求揀出三個合適對象。你揀一位開啟即時應用聊天——無相片，重點只係對話同感覺。聊天會喺星期日結束，鼓勵大家認真交流，為約會做好準備。',
  },
  {
    question: '點樣見到我嘅配對？',
    answer:
      '每逢星期四提交配對請求，揀三個 AI 推薦嘅對象當中你最鍾意嘅一位，然後即刻開始對話。簡單、專注於真實配合——聊天喺星期日截止，每一段對話都好有誠意。',
  },
   {
    question: 'Serene 存在嘅原因？',
    answer:
      'Serene 係為咗帶返有人情味、無壓力嘅認識新朋友方式，唔再要不停 swiping 或 superficial 判斷。我哋想你專注於誠懇對話，真心認識身邊人。',
  },
  {
    question: 'Serene 同其他交友 App 有咩唔同？',
    answer: 'Serene 唔使睇相、唔使 swiping，AI 根據你嘅特別要求同興趣配對。重點喺 personality、喜好同真實對話。所有對話都有限時，令相處自然又直接，充滿新鮮感。',
  },
  {
    question: 'Serene 會搞啲咩活動？',
    answer:
      'Serene 為會員舉辦專屬社交活動，包括品酒會、DJ 夜、畫畫品酒（paint & sip）等等。呢啲新奇又輕鬆活動，等你輕鬆識新朋友，一齊享受獨特體驗，同建立難忘回憶。',
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
    <section className="page-section pt-7" id='faq'>
      <h1 className="hs-title-1 mb-0 text-center pb-4">
        <span
          className="wow charsAnimIn"
          data-splitting="chars"
        >
          <AnimatedText text={t('title')} />
        </span>
      </h1>
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
  );
}
