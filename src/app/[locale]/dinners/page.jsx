import Header from '@/components/core/Header/Header';
import Footer from '@/components/core/Footer/Footer';
import Hero from '@/components/core/Dinners/Hero/Hero';
import EventList from '@/components/core/Dinners/EventList/EventList';


export async function generateMetadata() {
  return {
    title: 'Dinners | Serene.',
    description: 'Meet the perfect strangers over food and wine!',
    openGraph: {
      title: 'Serene — Dinners',
      description: 'Join us for a stress-free evening where we handle all the details, so you can simply enjoy!'
    }
  };
}

export default async function Dinners() {
  return (
    <div className="theme-main">
      <div className="page" id="top">
        <nav className="main-nav transparent stick-fixed wow-menubar">
          <Header />
        </nav>
        <main id="main">
          <Hero />
          <EventList />
        </main>
        <footer className="page-section footer pb-30">
          <Footer />
        </footer>
      </div>
    </div>
  );
}
