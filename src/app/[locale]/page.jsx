import { Navbar } from '@/components/revamp/Navbar/Navbar';
import { DivideX } from '@/components/ui/divide-x';
import { Hero } from '@/components/revamp/Main/Hero/Hero';
import { About } from '@/components/revamp/Main/About/About';
import { HowItWorks } from '@/components/revamp/Main/HowItWorks/HowItWorks';
import { Features } from '@/components/revamp/Main/Features/Features';

export async function generateMetadata() {
  return {
    title: 'Serene — Real IRL Connections',
    description:
      'Serene finds people who click. Weekly prompts keep convo lively. Try now — first three months free.',
    openGraph: {
      title: 'Serene — Real IRL Connections',
      description:
        'Serene finds people who click. Weekly prompts keep convo lively. Try now — first three months free.',
    },
  };
}

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <DivideX />
      <About />
      <DivideX />
      <HowItWorks />
      <DivideX />
      <Features />
      <DivideX />
    </>
  );
}
