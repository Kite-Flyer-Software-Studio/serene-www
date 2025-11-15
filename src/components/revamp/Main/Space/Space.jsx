'use client';

import { cn } from '@/utils';
import Link from 'next/link';
import Image from 'next/image';

import { Container } from '@/components/ui/container';
import { TitleBadge } from '@/components/ui/title-badge';
import { SectionHeading } from '@/components/ui/section-heading';
import { SubHeading } from '@/components/ui/sub-heading';
import { WobbleCard } from '@/components/ui/wobble-card';

import Space1 from './images/space-1.png';
import Space2 from './images/space-2.png';
import Space3 from './images/space-3.png';
import Space4 from './images/space-4.png';
import Space5 from './images/space-5.png';
import Space6 from './images/space-6.png';
import Space7 from './images/space-7.png';
import Space8 from './images/space-8.png';
import Space9 from './images/space-9.png';
import Space10 from './images/space-10.png';
import Space11 from './images/space-11.png';
import Space12 from './images/space-12.png';
import Space13 from './images/space-13.png';
import Space14 from './images/space-14.png';
import Space15 from './images/space-15.png';
import Space16 from './images/space-16.png';

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
          your IRL social lounge in Sheung Wan — calm, music, laughter, and
          comfort.
        </SubHeading>

        <div className="w-full h-full py-0.5">
          <div className="my-10 grid grid-cols-1 gap-2 rounded-3xl [mask-image:linear-gradient(to_top,transparent,black_50%)] p-1 md:grid-cols-2 lg:grid-cols-4">
            <Column>
              <Card
                src={Space1}
                alt="Space 1"
                className="lg:rounded-tl-[calc(24px-4px)]"
              />
              <Card src={Space9} alt="Space 9" className="" />
              <Card src={Space5} alt="Space 5" className="" />
            </Column>
            <Column>
              <Card src={Space12} alt="Space 12" className="" />
              <Card src={Space14} alt="Space 14" className="" />
              <Card src={Space10} alt="Space 10" className="" />
            </Column>
            <Column>
              <Card src={Space4} alt="Space 4" className="" />
              <Card src={Space15} alt="Space 15" className="" />
              <Card src={Space2} alt="Space 2" className="" />
            </Column>
            <Column>
              <Card
                src={Space7}
                alt="Posthog"
                className="lg:rounded-tr-[calc(24px-4px)]"
              />
              <Card src={Space13} alt="Space 13" className="" />
              <Card src={Space16} alt="Space 16" className="" />
            </Column>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Card = ({ src, alt, className, label }) => {
  return (
    <WobbleCard
      containerClassName={cn(
        'overlay group/bento relative mx-auto mb-2 block max-w-xl overflow-hidden rounded-md shadow-sm transition-all duration-200',
        className
      )}
      className="!p-0"
    >
      {/* <div
        className={cn(
          'overlay group/bento relative mx-auto mb-2 block max-w-xl overflow-hidden rounded-md shadow-sm transition-all duration-200',
          className
        )}
      > */}
      <Image src={src} alt={alt} height={500} width={500} className="w-full" />
      {/* </div> */}
    </WobbleCard>
  );
};

const Column = ({ children }) => {
  return <div>{children}</div>;
};
