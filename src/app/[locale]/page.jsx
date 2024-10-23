import Header from '@/components/core/Header/Header';
import Footer from '@/components/core/Footer/Footer';
import Hero from '@/components/core/Root/Hero/Hero';
import Content from '@/components/core/Root/Content/Content';

export const metadata = {
  title: 'Serene.',
  description: 'Meet the perfect strangers over food and wine!',
};

export default function Home() {
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
            <section
              className="home-section parallax-mousemove-scene scrollSpysection"
              id="home"
            >
              <Hero />
            </section>
            <Content />
          </main>
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
