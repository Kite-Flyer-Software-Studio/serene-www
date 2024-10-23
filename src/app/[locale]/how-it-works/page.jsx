import Header from '@/components/core/Header/Header';
import Footer from '@/components/core/Footer/Footer';
import Hero from '@/components/core/HowItWorks/Hero/Hero';
import Content from '@/components/core/HowItWorks/Content/Content';

export const metadata = {
  title: 'How It Works | Serene.',
  description: 'Meet the perfect strangers over food and wine!',
};

export default function HowItWorks() {
  return (
    <>
      <div className="theme-main">
        <div className="page" id="top">
          {/* Navigation Panel */}
          <nav className="main-nav transparent stick-fixed wow-menubar">
            <Header />
          </nav>
          {/* End Navigation Panel */}
          <main id="main">
            <Hero />
          </main>
          <Content />
          <footer className="page-section footer pb-30">
            <Footer />
          </footer>
        </div>
      </div>
    </>
  );
}
