import Header from '@/components/core/Header/Header';
import Footer from '@/components/core/Footer/Footer';
import Hero from '@/components/core/Events/Hero/Hero';
import EventList from '@/components/core/Events/EventList/EventList';

export async function generateMetadata() {
  return {
    title: 'Events | Serene.',
    description: 'Meet the perfect strangers over food and wine!',
    openGraph: {
      title: 'Serene — Events',
      description:
        'Join us for a stress-free evening where we handle all the details, so you can simply enjoy!',
    },
  };
}

export default async function Events() {
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
