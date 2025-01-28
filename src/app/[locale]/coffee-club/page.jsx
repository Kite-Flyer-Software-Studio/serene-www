import Header from '@/components/core/Header/Header';
import Footer from '@/components/core/Footer/Footer';
import Hero from '@/components/core/CoffeeClub/Hero';
import HowItWorks1 from '@/components/core/CoffeeClub/HowItWorks1';
import HowItWorks2 from '@/components/core/CoffeeClub/HowItWorks2';
import Possibilities from '@/components/core/CoffeeClub/Possibilities';
import Faq from '@/components/core/CoffeeClub/Faq';

export async function generateMetadata() {
  return {
    title: 'Coffee Club | Serene.',
    description: 'From Strangers To Lasting Friendships',
    openGraph: {
      title: 'Serene — About Us',
      description:
        'Serene hosts refined dinners with a tasting menu, encouraging guests to forge new friendships through exquisite cuisine, fine wine, and engaging conversations.',
    },
  };
}

export default function CoffeeClub() {
  return (
    <div className="theme-main">
      <div className="page" id="top">
        <nav className="main-nav transparent stick-fixed wow-menubar">
          <Header />
        </nav>
        <main id="main">
          <Hero />
          <HowItWorks1 />
          <HowItWorks2 />
          <Possibilities />
          <Faq />
        </main>
        <footer className="page-section footer pb-30">
          <Footer />
        </footer>
      </div>
    </div>
  );
}
