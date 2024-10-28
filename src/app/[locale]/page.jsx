import Header from '@/components/core/Header/Header';
import Footer from '@/components/core/Footer/Footer';
import Hero from '@/components/core/Root/Hero/Hero';
import Content from '@/components/core/Root/Content/Content';

export const metadata = {
  title: 'Serene',
  description: 'Meet the perfect strangers over food and wine!',
  openGraph: {
    title: 'Serene — Meet the perfect strangers over food and wine!',
    description: "At Serene, we believe that great food, fine wine, and tailored restaurant menus can create a perfect storm of authentic connection and community – join us for an evening you'll never forget."
  }
};

export default function Home() {
  return (
    <div className="theme-main">
      <div className="page" id="top">
        <nav className="main-nav transparent stick-fixed wow-menubar">
          <Header />
        </nav>
        <main id="main">
          <section
            className="home-section parallax-mousemove-scene scrollSpysection"
            id="home"
          >
            <Hero />
          </section>
          <Content />
        </main>
        <footer className="page-section footer pb-30">
          <Footer />
        </footer>
      </div>
    </div>
  );
}
