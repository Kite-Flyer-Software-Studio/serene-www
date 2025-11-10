'use client';

import { cn } from '@/utils';
import Link from 'next/link';
import Image from 'next/image';

import { Container } from '@/components/ui/container';
import { TitleBadge } from '@/components/ui/title-badge';
import { SectionHeading } from '@/components/ui/section-heading';
import { SubHeading } from '@/components/ui/sub-heading';

// import MeetOne from './images/meet-1.jpg';
// import MeetTwo from './images/meet-2.jpg';
// import MeetThree from './images/meet-3.jpg';

export const Space = () => {
  return (
    <Container
      id="space"
      className="border-divide relative overflow-hidden border-x px-4 md:px-8"
    >
      <div className="relative flex flex-col items-center py-20">
        <TitleBadge text="Our Space — Serene Coffee & Wine" />
        <SectionHeading className="mt-4">Meet in presence.</SectionHeading>

        <SubHeading as="p" className="mx-auto mt-6 max-w-lg">
          Between match meetups and friends’ nights, Serene Coffee & Wine is
          your IRL social lounge in Soho — calm, music, laughter, and comfort.
        </SubHeading>

        <div className="w-full h-full py-0.5">
          <div className="my-10 grid grid-cols-1 gap-2 rounded-3xl [mask-image:linear-gradient(to_top,transparent,black_50%)] p-1 md:grid-cols-2 lg:grid-cols-4">
            <Column>
              <Card
                href="https://posthog.com"
                src="https://assets.aceternity.com/brands/1.png"
                alt="Posthog"
                className="lg:rounded-tl-[calc(24px-4px)]"
              />
              <Card
                href="https://vercel.com"
                src="https://assets.aceternity.com/brands/2.png"
                alt="Something"
                className=""
              />
              <Card
                href="https://pro.aceternity.com"
                src="https://assets.aceternity.com/brands/3.png"
                alt="Something"
                className=""
              />
            </Column>
            <Column>
              <Card
                href="https://ui.aceternity.com"
                src="https://assets.aceternity.com/brands/4.png"
                alt="Posthog"
                className=""
              />
              <Card
                href="https://tailwindcss.com"
                src="https://assets.aceternity.com/brands/5.png"
                alt="Something"
                className=""
              />
              <Card
                href="https://linear.app"
                src="https://assets.aceternity.com/brands/6.png"
                alt="Something"
                className=""
              />
              <Card
                href="https://v0.dev"
                src="https://assets.aceternity.com/brands/10.png"
                alt="Something"
                className=""
              />
            </Column>
            <Column>
              <Card
                href="https://resend.com"
                src="https://assets.aceternity.com/brands/11.png"
                alt="Posthog"
                className=""
              />
              <Card
                href="https://resend.com"
                src="https://assets.aceternity.com/brands/8.png"
                alt="Something"
                className=""
              />
              <Card
                href="https://nike.com"
                src="https://assets.aceternity.com/brands/9.png"
                alt="Something"
                className=""
              />
            </Column>
            <Column>
              <Card
                href="https://adidas.com"
                src="https://assets.aceternity.com/brands/7.png"
                alt="Posthog"
                className="lg:rounded-tr-[calc(24px-4px)]"
              />
              <Card
                href="https://myntra.com"
                src="https://assets.aceternity.com/brands/12.png"
                alt="Something"
                className=""
              />
              <Card
                href="https://shure.com"
                src="https://assets.aceternity.com/brands/13.png"
                alt="Something"
                className=""
              />
              <Card
                href="https://posthog.com"
                src="https://assets.aceternity.com/brands/1.png"
                alt="Something"
                className=""
              />
            </Column>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Card = ({ src, alt, className, href }) => {
  return (
    <Link
      href={href}
      target="_blank"
      className={cn(
        'overlay group/bento relative mx-auto mb-2 block max-w-xl overflow-hidden rounded-md shadow-sm transition-all duration-200',
        "after:absolute after:inset-0 after:h-full after:w-full after:bg-black after:opacity-0 after:transition-all after:duration-200 after:content-[''] hover:after:opacity-90",
        className
      )}
    >
      <Image src={src} alt={alt} height={500} width={500} className="w-full" />
      <p className="absolute inset-0 z-20 m-auto flex items-center justify-center text-sm font-medium text-white opacity-0 transition-all duration-200 group-hover/bento:opacity-100">
        {href.split('https://')[1]}
      </p>
    </Link>
  );
};

const Column = ({ children }) => {
  return <div>{children}</div>;
};
