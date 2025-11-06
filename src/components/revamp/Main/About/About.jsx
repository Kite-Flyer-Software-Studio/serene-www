'use client';

import Image from 'next/image';

import { Container } from '@/components/ui/container';
import { TitleBadge } from '@/components/ui/title-badge';
import { SubHeading } from '@/components/ui/sub-heading';
import { Heading } from '@/components/ui/heading';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';

export const About = () => {
  return (
    <Container
      className="border-divide flex flex-col items-center justify-center border-x px-4 pt-10 pb-10 md:px-8 md:pt-32 md:pb-20"
      id="about"
    >
      <div className="grid grid-cols-1 gap-20 md:grid-cols-2">
        <div className="flex flex-col items-start justify-start">
          <TitleBadge text="Our Story of Serenity" />
          <Heading className="mt-4 text-left">
            Tired of Small Talk?
            <TextGenerateEffect
              words="So Were We."
              textClassName="text-3xl font-medium tracking-tight text-black md:text-4xl lg:text-6xl dark:text-white"
            />
          </Heading>
          <SubHeading className="mt-6 mr-auto text-left">
            We noticed a paradox: the more connected we are online, the lonelier
            we feel. Serene was founded to bridge that gap, creating space for
            genuine, offline conversation.
            <br /> <br />
            In an age of digital noise, we champion the art of the dialogue.
            Serene is our answer to superficial networking—a platform for those
            who seek depth and discernment in their social circle.
            <br /> <br />
            Our mission: make finding your people as fun and easy as grabbing a
            great coffee.
          </SubHeading>
        </div>
        <div className="border-divide rounded-3xl border p-2">
          {/* <Image
            src="/assets/images/serene/coffee/reico-esmee-meet.jpg"
            alt="About Us"
            width={1000}
            height={1000}
            className="h-full rounded-2xl object-cover"
          /> */}
          <Image
            src="/assets/images/serene/coffee/nancy-daniel-2.jpeg"
            alt="About Us"
            width={1000}
            height={1000}
            className="h-full rounded-2xl object-cover"
          />
        </div>
      </div>
    </Container>
  );
};
