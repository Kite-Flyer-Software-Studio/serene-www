'use client';

import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

import { SubHeading } from '@/components/ui/sub-heading';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { TitleBadge } from '@/components/ui/title-badge';
import { Button } from '@/components/revamp/Button';
import { DivideX } from '@/components/ui/divide-x';
import useMeasure from 'react-use-measure';

const faqs = [
  {
    question: 'What is Serene Experience?',
    answer:
      'Serene Experience is a social platform designed for busy professionals who want authentic, relaxed, non-dating meetups in Hong Kong. We use proprietary AI and a weekly “Query” system to connect you with like-minded people for genuine in-real-life (IRL) connections.',
  },
  {
    question: 'How does Serene’s AI matching work?',
    answer:
      'Our AI analyzes your weekly answers to the “Query” — a simple, thought-provoking prompt — to match you with someone local who shares your vibe and interests. It’s not about profiles or swipes; it’s about meaningful alignment and timing.',
  },
  {
    question: 'Is this a dating app?',
    answer:
      'No. Serene is focused on authentic social connections, not dating. It’s for professionals seeking meaningful friendships, social recharge, and relaxed 1-on-1 meetups in a calm, respectful setting.',
  },
  {
    question: 'Why do I have to join a waitlist?',
    answer:
      'We are currently in a private beta phase to ensure high-quality, vetted members and an intentional community. The waitlist helps us carefully onboard people who align with Serene’s values for presence, genuineness, and kindness.',
  },
  {
    question: 'What happens after I join the waitlist?',
    answer:
      'Our team reviews each application and notifies you once you’re vetted and ready to access Serene’s weekly Query and matching. This process ensures everyone on the platform contributes to a trusted, welcoming environment.',
  },
  {
    question: 'What is Serene Coffee & Wine?',
    answer:
      'Serene Coffee & Wine is our physical space in Sheung Wan where matched members can meet and enjoy curated drinks in a warm, relaxed atmosphere. It’s the offline heart of Serene’s community and social gatherings.',
  },
  {
    question: 'How is my privacy protected?',
    answer:
      'Privacy and safety are top priorities. Your information is securely stored, only shared with vetted matches, and never sold. We ensure a respectful, confidential environment for all members.',
  },
  {
    question: 'Is there a membership fee after the free trial?',
    answer:
      'After your complimentary three-month trial, Serene offers flexible membership options. You can choose to continue with a paid membership or pause/cancel anytime with no hidden fees.',
  },
];

const ChevronDownIcon = (props) => {
  const { rotated, className, ...rest } = props;
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...rest}
    >
      <path
        d="M3.75 6.5L8 10.75L12.25 6.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const FAQs = () => {
  const [openItems, setOpenItems] = useState(new Set());

  const toggle = (index) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <Container
      id="faq"
      className="border-divide flex flex-col items-center border-x pt-12"
    >
      <TitleBadge text="FAQs" />
      <SectionHeading className="mt-4">
        Frequently Asked Questions
      </SectionHeading>

      <SubHeading as="p" className="mx-auto mt-6 max-w-lg px-2">
        Find all your doubts and questions in one place. Still couldn't find
        what you're looking for?
      </SubHeading>
      <div className="mt-8 mb-12 flex w-full flex-col justify-center gap-4 px-4 sm:flex-row"></div>
      <DivideX />
      <div className="divide-divide w-full divide-y">
        {faqs.map((item, index) => (
          <AccordionItem
            key={item.question}
            index={index}
            question={item.question}
            answer={item.answer}
            isOpen={openItems.has(index)}
            onToggle={() => toggle(index)}
          />
        ))}
      </div>
    </Container>
  );
};

const AccordionItem = ({ index, question, answer, isOpen, onToggle }) => {
  const [ref, { height }] = useMeasure();
  const targetHeight = useMemo(() => (isOpen ? height : 0), [isOpen, height]);

  return (
    <div className="group">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={`faq-panel-${index}`}
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-8 py-6 text-left"
      >
        <span className="text-charcoal-700 text-base font-medium dark:text-neutral-100">
          {question}
        </span>
        <motion.span
          className="text-charcoal-700 shadow-aceternity inline-flex size-6 items-center justify-center rounded-md bg-white dark:bg-neutral-950"
          initial={false}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <ChevronDownIcon className="dark:text-neutral-100" />
        </motion.span>
      </button>

      <motion.div
        id={`faq-panel-${index}`}
        role="region"
        aria-hidden={!isOpen}
        initial={false}
        animate={{ height: targetHeight, opacity: isOpen ? 1 : 0 }}
        transition={{ height: { duration: 0.35 }, opacity: { duration: 0.2 } }}
        className="overflow-hidden px-8"
        onClick={onToggle}
      >
        <div ref={ref} className="pr-2 pb-5 pl-2 sm:pr-0 sm:pl-0">
          <AnimatePresence mode="popLayout">
            {isOpen && (
              <motion.p
                key="content"
                initial={{ y: -6, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -6, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="text-gray-600 dark:text-neutral-400"
              >
                {answer}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};
