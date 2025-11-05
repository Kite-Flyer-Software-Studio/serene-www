import { Navbar } from '@/components/revamp/Navbar/Navbar';
import { Hero } from '@/components/revamp/Main/Hero/Hero';
import { HowItWorks } from '@/components/revamp/Main/HowItWorks/HowItWorks';

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
      <HowItWorks />
    </>
  );
}
