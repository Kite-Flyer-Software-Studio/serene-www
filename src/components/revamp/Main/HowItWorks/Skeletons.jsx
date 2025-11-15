'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'motion/react';

import { cn } from '@/utils';

import { TechCard } from './TechCard';
import { DivideX } from '@/components/ui/divide-x';
import { Scale } from './Scale';
import { IntegrationsLogo } from '@/components/ui/logos';
import { MessageCircle, Coffee, Calendar, Heart } from 'lucide-react';
import Image from 'next/image';

export const WeeklyQuery = () => {
  return (
    <div className="mt-12 flex flex-col items-center">
      <div className="relative">
        <TechCard
          title="Weekly Vibe Check"
          subtitle="Thursday at noon"
          logo={<MessageCircle className="h-4 w-4" />}
          cta="Ready to Share"
          tone="success"
        />
        <LeftSVG className="absolute top-12 -left-32" />
        <RightSVG className="absolute top-12 -right-32" />
        <CenterSVG className="absolute top-24 right-[107px]" />
      </div>

      <div className="mt-12 flex flex-row gap-4.5">
        <TechCard
          title="Your Interests"
          subtitle="Coffee & deep talks"
          logo={<Coffee className="h-4 w-4" />}
          cta="Selected"
          tone="success"
          delay={0.2}
        />
        <TechCard
          title="Your Availability"
          subtitle="Weekend coffee"
          logo={<Calendar className="h-4 w-4" />}
          cta="Available"
          tone="default"
          delay={0.4}
        />
        <TechCard
          title="Your Mood"
          subtitle="Curious & open"
          logo={<Heart className="h-4 w-4" />}
          cta="Shared"
          tone="success"
          delay={0.6}
        />
      </div>
    </div>
  );
};

export const GetMatched = () => {
  const text = `Analyzing your vibes and preferences to find three perfect matches with aligned interests.`;
  const [mounted, setMounted] = useState(false);
  const randomWidth = useMemo(() => Math.random() * 100, [mounted]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative flex h-full w-full items-center justify-between">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative h-70 w-60 -translate-x-2 rounded-2xl border-t border-gray-300 bg-white p-4 shadow-2xl md:translate-x-0 dark:border-neutral-700 dark:bg-neutral-900"
      >
        <div className="absolute -top-4 -right-4 flex h-14 w-14 items-center justify-center rounded-lg bg-white shadow-xl">
          <Scale />
          <Image
            src="/assets/images/logo.svg"
            alt="Serene Logo"
            width={32}
            height={32}
            className="relative z-20 h-8 w-8"
          />
        </div>
        <div className="mt-12 flex items-center gap-2">
          <IntegrationsLogo />
          <span className="text-charcoal-700 text-sm font-medium dark:text-neutral-200">
            Finding Matches
          </span>
        </div>
        <DivideX className="mt-2" />

        <div className="mt-4 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="text-charcoal-700 text-[10px] leading-loose font-normal md:text-xs dark:text-neutral-200">
              {text.split(/(\s+)/).map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.2,
                    delay: index * 0.02,
                    ease: 'linear',
                  }}
                  className="inline-block"
                >
                  {word === ' ' ? '\u00A0' : word}
                </motion.span>
              ))}
            </span>
          </div>
        </div>
        <div className="mt-2 flex flex-col">
          {[...Array(2)].map((_, index) => (
            <motion.div
              key={`width-bar-right-${index}`}
              initial={{
                width: '0%',
              }}
              animate={{
                width: `${randomWidth}%`,
              }}
              transition={{
                duration: 4,
                delay: index * 0.2,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              className="mt-2 h-4 w-full rounded-full bg-gray-200 dark:bg-neutral-800"
            />
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute inset-x-0 z-30 hidden items-center justify-center md:flex"
      >
        <div className="size-3 rounded-full border-2 border-blue-500 bg-white dark:bg-neutral-800" />
        <div className="h-[2px] w-38 bg-blue-500" />
        <div className="size-3 rounded-full border-2 border-blue-500 bg-white dark:bg-neutral-800" />
      </motion.div>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="relative h-70 w-60 translate-x-10 rounded-2xl border-t border-gray-300 bg-white p-4 shadow-2xl md:translate-x-0 dark:border-neutral-700 dark:bg-neutral-900"
      >
        <div className="absolute -top-4 -left-4 flex h-14 w-14 items-center justify-center rounded-lg bg-white shadow-xl dark:bg-neutral-800">
          <Scale />
          <Image
            src="/assets/images/logo.svg"
            alt="Logo"
            width={32}
            height={32}
            className="relative z-20 h-8 w-8"
          />
        </div>
        <div className="mt-12 flex items-center gap-2">
          <IntegrationsLogo className="dark:text-neutral-200" />
          <span className="text-charcoal-700 text-xs font-medium md:text-sm dark:text-neutral-200">
            Your Matches
          </span>
          <span className="text-charcoal-700 rounded-lg border border-gray-200 bg-gray-50 px-2 py-0.5 text-xs dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-200">
            3
          </span>
        </div>
        <DivideX className="mt-2" />
        <div className="mt-4 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 shrink-0" />
            <span className="text-charcoal-700 text-xs font-medium md:text-sm dark:text-neutral-200">
              Alex - Coffee Enthusiast
            </span>
          </div>

          <div className="rounded-sm border border-emerald-500 bg-emerald-50 px-2 py-0.5 text-xs text-emerald-500">
            98% Match
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shrink-0" />
            <span className="text-charcoal-700 text-xs font-medium md:text-sm dark:text-neutral-200">
              Jamie - Art Lover
            </span>
          </div>

          <div className="rounded-sm border border-emerald-500 bg-emerald-50 px-2 py-0.5 text-xs text-emerald-500">
            94% Match
          </div>
        </div>
        <div className="mt-2 flex flex-col">
          {[...Array(3)].map((_, index) => (
            <motion.div
              key={`width-bar-right-${index}`}
              initial={{
                width: `${20 + Math.random() * 20}%`,
              }}
              animate={{
                width: `${70 + Math.random() * 30}%`,
              }}
              transition={{
                duration: 4,
                delay: index * 0.2,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              className="mt-2 h-4 w-full rounded-full bg-gray-200 dark:bg-neutral-800"
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export const MeetIRL = () => {
  const containerRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState(0);

  // Define meeting cards data for reusability
  const meetingCards = [
    {
      title: 'Coffee with Alex',
      subtitle: 'Today 3:00 PM',
      branch: 'Serene Coffee',
      variant: 'success',
    },
    {
      title: 'Wine with Jamie',
      subtitle: 'Tomorrow 7:00 PM',
      branch: 'Serene Wine Bar',
      variant: 'success',
    },
    {
      title: 'Coffee with Taylor',
      subtitle: 'Sat 2:00 PM',
      branch: 'Local Cafe',
      variant: 'default',
    },
    {
      title: 'Brunch with Sam',
      subtitle: 'Sun 11:00 AM',
      branch: 'Serene Coffee',
      variant: 'success',
    },
    {
      title: 'Coffee with Jordan',
      subtitle: 'Mon 4:00 PM',
      branch: 'Serene Coffee',
      variant: 'warning',
    },
    {
      title: 'Wine with Riley',
      subtitle: 'Tue 6:30 PM',
      branch: 'Serene Wine Bar',
      variant: 'success',
    },
    {
      title: 'Coffee with Casey',
      subtitle: 'Wed 10:00 AM',
      branch: 'Local Spot',
      variant: 'default',
    },
    {
      title: 'Drinks with Morgan',
      subtitle: 'Thu 5:00 PM',
      branch: 'Serene Wine Bar',
      variant: 'success',
    },
    {
      title: 'Coffee with Avery',
      subtitle: 'Fri 1:00 PM',
      branch: 'Serene Coffee',
      variant: 'success',
    },
    {
      title: 'Lunch with Drew',
      subtitle: 'Sat 12:30 PM',
      branch: 'Local Bistro',
      variant: 'default',
    },
    {
      title: 'Coffee with Blake',
      subtitle: 'Sun 3:30 PM',
      branch: 'Serene Coffee',
      variant: 'warning',
    },
    {
      title: 'Wine with Quinn',
      subtitle: 'Mon 7:00 PM',
      branch: 'Serene Wine Bar',
      variant: 'success',
    },
  ];

  const extendedCards = [...meetingCards, ...meetingCards, ...meetingCards];

  const cardHeight = 64;
  const gap = 4;
  const itemHeight = cardHeight + gap;
  const offset = (containerHeight - cardHeight) / 2;

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      const height = entries[0]?.contentRect.height ?? 0;
      setContainerHeight(height);
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const y = useMotionValue(0);
  const totalHeight = extendedCards.length * itemHeight;

  useEffect(() => {
    let animationFrame;
    let lastTime = performance.now();
    const speed = 30;

    function animateScroll(now) {
      const elapsed = (now - lastTime) / 1000;
      lastTime = now;
      let current = y.get();
      current -= speed * elapsed;

      if (Math.abs(current) >= totalHeight / 3) {
        current += totalHeight / 3;
      }
      y.set(current);
      animationFrame = requestAnimationFrame(animateScroll);
    }
    animationFrame = requestAnimationFrame(animateScroll);
    return () => cancelAnimationFrame(animationFrame);
  }, [y, totalHeight]);

  return (
    <div
      className="relative h-full w-full overflow-hidden"
      ref={containerRef}
      style={{
        maskImage:
          'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)',
        WebkitMaskImage:
          'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)',
      }}
    >
      <motion.div
        className="absolute left-1/2 flex w-full -translate-x-1/2 flex-col items-center"
        style={{ y }}
      >
        {extendedCards.map((card, index) => (
          <motion.div
            key={`${index}-${card.title}`}
            className="mx-auto mt-4 w-full max-w-sm shrink-0 rounded-2xl shadow-xl"
            style={{
              scale: useTransform(
                y,
                [
                  offset + (index - 2) * -itemHeight,
                  offset + (index - 1) * -itemHeight,
                  offset + index * -itemHeight,
                  offset + (index + 1) * -itemHeight,
                  offset + (index + 2) * -itemHeight,
                ],
                [0.85, 0.95, 1.1, 0.95, 0.85]
              ),

              background: useTransform(
                y,
                [
                  offset + (index - 1) * -itemHeight,
                  offset + index * -itemHeight,
                  offset + (index + 1) * -itemHeight,
                ],
                ['#FFFFFF', '#f17463', '#FFFFFF']
              ),
              borderColor: useTransform(
                y,
                [
                  offset + (index - 1) * -itemHeight,
                  offset + index * -itemHeight,
                  offset + (index + 1) * -itemHeight,
                ],
                ['#FFFFFF', '#f17463', '#FFFFFF']
              ),
            }}
          >
            <MeetingCard
              variant={card.variant}
              title={card.title}
              subtitle={card.subtitle}
              location={card.branch}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

const MeetingCard = ({ variant = 'default', title, subtitle, location }) => {
  const getIcon = () => {
    if (title.includes('Coffee') || title.includes('Brunch')) {
      return (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M2 21V19H20V21H2M20 8V5L18 5V3H4V5H2V8H4V13A4 4 0 0 0 8 17H14A4 4 0 0 0 18 13V8H20M16 5H6V13A2 2 0 0 0 8 15H14A2 2 0 0 0 16 13V5Z" />
        </svg>
      );
    }
    return (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.859 0-7 3.141-7 7v1h17z" />
      </svg>
    );
  };

  return (
    <div className="mx-auto flex w-full max-w-sm items-center justify-between rounded-lg p-3">
      <div className="flex items-center gap-2">
        <div
          className={cn(
            'flex h-6 w-6 items-center justify-center rounded-md',
            variant === 'default' && 'bg-gray-200',
            variant === 'danger' && 'bg-red-200',
            variant === 'success' && 'bg-emerald-200',
            variant === 'warning' && 'bg-yellow-200'
          )}
        >
          <div
            className={cn(
              'h-4 w-4',
              variant === 'default' && 'text-gray-500',
              variant === 'danger' && 'text-red-500',
              variant === 'success' && 'text-emerald-500',
              variant === 'warning' && 'text-yellow-500'
            )}
          >
            {getIcon()}
          </div>
        </div>
        <span className="text-charcoal-700 text-xs font-medium sm:text-sm">
          {title}
        </span>
      </div>
      <div className="ml-2 flex flex-row items-center gap-2">
        <span className="text-charcoal-700 text-xs font-normal">
          {subtitle}
        </span>
        <div className="size-1 rounded-full bg-gray-400"></div>
        <span className="text-charcoal-700 text-xs font-normal">
          {location}
        </span>
      </div>
    </div>
  );
};

const LeftSVG = (props) => {
  const path = `M127.457 0.0891113L127.576 95.9138L127.457 0.0891113ZM-0.0609919 96.0731L-0.160632 16.2484C-0.172351 6.85959 7.4293 -0.761068 16.8181 -0.772787L16.8206 1.22721C8.53637 1.23755 1.82903 7.96166 1.83937 16.2459L1.93901 96.0706L-0.0609919 96.0731ZM-0.160632 16.2484C-0.172351 6.85959 7.4293 -0.761068 16.8181 -0.772787L127.455 -0.910888L127.458 1.08911L16.8206 1.22721C8.53637 1.23755 1.82903 7.96166 1.83937 16.2459L-0.160632 16.2484ZM127.576 95.9138L0.939007 96.0718L127.576 95.9138Z`;
  return (
    <motion.svg
      width="128"
      height="97"
      viewBox="0 0 128 97"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      className={props.className}
    >
      <mask id="path-1-inside-1_557_1106" fill="var(--color-line)">
        <path d="M127.457 0.0891113L127.576 95.9138L0.939007 96.0718L0.839368 16.2472C0.828338 7.41063 7.98283 0.238242 16.8194 0.227212L127.457 0.0891113Z" />
      </mask>
      <path
        d="M127.457 0.0891113L127.576 95.9138L127.457 0.0891113ZM-0.0609919 96.0731L-0.160632 16.2484C-0.172351 6.85959 7.4293 -0.761068 16.8181 -0.772787L16.8206 1.22721C8.53637 1.23755 1.82903 7.96166 1.83937 16.2459L1.93901 96.0706L-0.0609919 96.0731ZM-0.160632 16.2484C-0.172351 6.85959 7.4293 -0.761068 16.8181 -0.772787L127.455 -0.910888L127.458 1.08911L16.8206 1.22721C8.53637 1.23755 1.82903 7.96166 1.83937 16.2459L-0.160632 16.2484ZM127.576 95.9138L0.939007 96.0718L127.576 95.9138Z"
        fill="#EAEDF1"
        mask="url(#path-1-inside-1_557_1106)"
      />
      <path
        d="M127.457 0.0891113L127.576 95.9138L127.457 0.0891113ZM-0.0609919 96.0731L-0.160632 16.2484C-0.172351 6.85959 7.4293 -0.761068 16.8181 -0.772787L16.8206 1.22721C8.53637 1.23755 1.82903 7.96166 1.83937 16.2459L1.93901 96.0706L-0.0609919 96.0731ZM-0.160632 16.2484C-0.172351 6.85959 7.4293 -0.761068 16.8181 -0.772787L127.455 -0.910888L127.458 1.08911L16.8206 1.22721C8.53637 1.23755 1.82903 7.96166 1.83937 16.2459L-0.160632 16.2484ZM127.576 95.9138L0.939007 96.0718L127.576 95.9138Z"
        fill="url(#gradient-one)"
        mask="url(#path-1-inside-1_557_1106)"
      />
      {/* <rect d={path} width="128" height="97" fill="url(#gradient-one)" /> */}
      <defs>
        <motion.linearGradient
          id="gradient-one"
          initial={{
            x1: '100%',
            x2: '90%',
            y1: '90%',
            y2: '80%',
          }}
          animate={{
            x1: '20%',
            x2: '0%',
            y1: '90%',
            y2: '220%',
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatDelay: 2,
          }}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--color-line)" stopOpacity="0.5" offset="0" />
          <stop stopColor="#5787FF" stopOpacity="1" offset="0.5" />
          <stop stopColor="var(--color-line)" stopOpacity="0" offset="1" />
        </motion.linearGradient>
      </defs>
    </motion.svg>
  );
};

const RightSVG = (props) => {
  const PATH = `M0.619629 0L0.500018 95.8247L0.619629 0ZM128.137 95.984L128.237 16.1593C128.249 6.77047 120.647 -0.850179 111.258 -0.861898L111.256 1.1381C119.54 1.14844 126.247 7.87255 126.237 16.1568L126.137 95.9815L128.137 95.984ZM128.237 16.1593C128.249 6.77047 120.647 -0.850179 111.258 -0.861898L0.620877 -0.999999L0.618381 0.999999L111.256 1.1381C119.54 1.14844 126.247 7.87255 126.237 16.1568L128.237 16.1593ZM0.500018 95.8247L127.137 95.9827L0.500018 95.8247Z`;
  return (
    <motion.svg
      width="128"
      height="96"
      viewBox="0 0 128 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      className={props.className}
    >
      <mask id="path-1-inside-1_557_1107" fill="var(--color-line)">
        <path d="M0.619629 0L0.500018 95.8247L127.137 95.9827L127.237 16.1581C127.248 7.32152 120.093 0.149131 111.257 0.138101L0.619629 0Z" />
      </mask>
      <path
        d="M0.619629 0L0.500018 95.8247L0.619629 0ZM128.137 95.984L128.237 16.1593C128.249 6.77047 120.647 -0.850179 111.258 -0.861898L111.256 1.1381C119.54 1.14844 126.247 7.87255 126.237 16.1568L126.137 95.9815L128.137 95.984ZM128.237 16.1593C128.249 6.77047 120.647 -0.850179 111.258 -0.861898L0.620877 -0.999999L0.618381 0.999999L111.256 1.1381C119.54 1.14844 126.247 7.87255 126.237 16.1568L128.237 16.1593ZM0.500018 95.8247L127.137 95.9827L0.500018 95.8247Z"
        fill="#EAEDF1"
        mask="url(#path-1-inside-1_557_1107)"
      />
      <path
        d="M0.619629 0L0.500018 95.8247L0.619629 0ZM128.137 95.984L128.237 16.1593C128.249 6.77047 120.647 -0.850179 111.258 -0.861898L111.256 1.1381C119.54 1.14844 126.247 7.87255 126.237 16.1568L126.137 95.9815L128.137 95.984ZM128.237 16.1593C128.249 6.77047 120.647 -0.850179 111.258 -0.861898L0.620877 -0.999999L0.618381 0.999999L111.256 1.1381C119.54 1.14844 126.247 7.87255 126.237 16.1568L128.237 16.1593ZM0.500018 95.8247L127.137 95.9827L0.500018 95.8247Z"
        fill="url(#gradient-two)"
        mask="url(#path-1-inside-1_557_1107)"
      />
      {/* <rect d={PATH} width="128" height="97" fill="url(#gradient-two)" /> */}

      <defs>
        <motion.linearGradient
          id="gradient-two"
          initial={{
            x1: '-10%',
            x2: '0%',
            y1: '0%',
            y2: '0%',
          }}
          animate={{
            x1: '100%',
            x2: '110%',
            y1: '110%',
            y2: '140%',
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatDelay: 2,
          }}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.5" offset="0" />
          <stop stopColor="#F17463" stopOpacity="1" offset="0.5" />
          <stop stopColor="white" stopOpacity="0" offset="1" />
        </motion.linearGradient>
      </defs>
    </motion.svg>
  );
};

const CenterSVG = (props) => {
  return (
    <motion.svg
      width="2"
      height="56"
      viewBox="0 0 2 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      className={props.className}
    >
      <line x1="1" y1="56" x2="1" stroke="var(--color-line)" strokeWidth="2" />
      <line
        x1="1"
        y1="56"
        x2="1"
        stroke="url(#gradient-three)"
        strokeWidth="1"
      />
      <defs>
        <motion.linearGradient
          id="gradient-three"
          initial={{
            x1: '0%',
            x2: '0%',
            y1: '-100%',
            y2: '-90%',
          }}
          animate={{
            x1: '0%',
            x2: '0%',
            y1: '90%',
            y2: '100%',
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatDelay: 2,
          }}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--color-line)" stopOpacity="1" offset="0" />
          <stop stopColor="#F17463" stopOpacity="0.5" offset="0.5" />
          <stop stopColor="#F17463" stopOpacity="0" offset="1" />
        </motion.linearGradient>
      </defs>
    </motion.svg>
  );
};
