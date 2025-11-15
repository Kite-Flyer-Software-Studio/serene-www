'use client';

import { Carousel, Card } from '@/components/ui/apple-cards-carousel';
import { Container } from '@/components/ui/container';
import { TitleBadge } from '@/components/ui/title-badge';
import { SectionHeading } from '@/components/ui/section-heading';
import { SubHeading } from '@/components/ui/sub-heading';

import EventOne from './images/event-1.jpg';
import EventTwo from './images/event-2.png';
import EventFive from './images/event-5.png';
import EventSeven from './images/event-7.png';
import EventEight from './images/event-8.jpg';
import EventNine from './images/event-9.png';

export const Events = () => {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));
  return (
    <Container
      id="curated-group-events"
      className="border-divide relative overflow-hidden border-x px-4 md:px-8"
    >
      <div className="relative flex flex-col items-center py-20">
        <TitleBadge text="Curated Community Gatherings" />
        <SectionHeading className="mt-4">
          Where strangers become friends
        </SectionHeading>

        <SubHeading as="p" className="mx-auto mt-6 max-w-lg">
          Small, carefully-curated group events that feel like gatherings among
          friends. From wine tastings to creative workshops, each experience is
          designed for meaningful interaction in a warm, welcoming atmosphere.
        </SubHeading>

        <div className="w-full h-full py-0.5">
          <Carousel items={cards} />
        </div>
      </div>
    </Container>
  );
};

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={'dummy-content' + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{' '}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <img
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: 'Dining',
    title: 'First Serene Dinner at Kamcentre Roat Goose',
    src: EventEight,
    content: <DummyContent />,
  },
  {
    category: 'Social',
    title: '1st Anniversary Celebration: Junk Boat Gathering',
    src: EventNine,
    content: <DummyContent />,
  },
  {
    category: 'Artistry',
    title: 'Sip & Paint Night at Serene Coffee & Wine',
    src: EventSeven,
    content: <DummyContent />,
  },
  {
    category: 'Social',
    title: 'Half-Year Social at Tomo Bar',
    src: EventOne,
    content: <DummyContent />,
  },
  {
    category: 'Wellness',
    title: 'Pilates & Cold Brew Social',
    src: EventFive,
    content: <DummyContent />,
  },
  {
    category: 'Wine Tasting',
    title: 'Summer Blanc x DJ: WHITE Burgundies Wine Tasting',
    src: EventTwo,
    content: <DummyContent />,
  },
];
