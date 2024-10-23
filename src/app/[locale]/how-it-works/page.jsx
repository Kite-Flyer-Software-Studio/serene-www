import Header from '@/components/core/Header/Header';
import Footer from '@/components/core/Footer/Footer';
import Hero from '@/components/core/HowItWorks/Hero/Hero';
import Content from '@/components/core/HowItWorks/Content/Content';

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
          <footer
            className="page-section footer pb-30"
            style={{ backgroundColor: '#F5E7C6' }}
          >
            <Footer />
          </footer>
        </div>
      </div>
    </>
  );
}
