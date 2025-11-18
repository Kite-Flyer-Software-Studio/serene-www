import { Navbar } from '@/components/revamp/Navbar/Navbar';
import { DivideX } from '@/components/ui/divide-x';
import { Hero } from '@/components/revamp/Main/Hero/Hero';
import { About } from '@/components/revamp/Main/About/About';
import { HowItWorks } from '@/components/revamp/Main/HowItWorks/HowItWorks';
import { Why } from '@/components/revamp/Main/Why/Why';
import { Events } from '@/components/revamp/Main/Events/Events';
import { Space } from '@/components/revamp/Main/Space/Space';
import { FAQs } from '@/components/revamp/Main/FAQs/FAQs';
import { Footer } from '@/components/revamp/Footer/Footer';
import { routing } from '@/i18n/routing';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

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
      <Why />
      <DivideX />
      <Events />
      <DivideX />
      <Space />
      <DivideX />
      <FAQs />
      <DivideX />
      <Footer />
    </>
  );
}
