import Header from '@/components/core/Header/Header';
import Footer from '@/components/core/Footer/Footer';
import Hero from '@/components/core/HowItWorks/Hero/Hero';
import Content from '@/components/core/HowItWorks/Content/Content';

export const metadata = {
  title: 'How It Works | Serene.',
  description: 'Meet the perfect strangers over food and wine!',
  openGraph: {
    title: 'Serene — How it works?',
    description: 'Join us for a stress-free evening where we handle all the details, so you can simply enjoy!'
  }
};

export default function HowItWorks() {
  return (
    <>
      <div className="theme-main">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar">
            <Header />
          </nav>
          <main id="main">
            <Hero />
            <Content />
          </main>
          <footer className="page-section footer pb-30">
            <Footer />
          </footer>
        </div>
      </div>
    </>
  );
}
