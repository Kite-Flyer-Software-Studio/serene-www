'use client';

import { AnimatedTooltip } from '@/components/ui/animated-tooltip';

const people = [
  {
    id: 3,
    name: 'Robert, 26',
    designation: 'The Rebel',
    image:
      'https://images.unsplash.com/photo-1697667409270-8d6dfdc9f09a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 6,
    name: 'Dora, 25',
    designation: 'The Explorer',
    image:
      'https://images.unsplash.com/photo-1574315538427-58c1e5353f18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 5,
    name: 'Tyler, 34',
    designation: 'The Analyst',
    image:
      'https://images.unsplash.com/photo-1611403119860-57c4937ef987?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 4,
    name: 'Emily, 32',
    designation: 'The Thinker',
    image:
      'https://images.unsplash.com/photo-1529232356377-57971f020a94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 1,
    name: 'John, 36',
    designation: 'The Visionary',
    image:
      'https://images.unsplash.com/photo-1622483066841-ae4c61da3db8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80',
  },
  {
    id: 2,
    name: 'Jane, 28',
    designation: 'The Creator',
    image:
      'https://images.unsplash.com/photo-1534083220759-4c3c00112ea0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
  },
];

export const Personas = () => {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
};
