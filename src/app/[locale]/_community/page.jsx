import Header from '@/components/core/Header/Header';
import Footer from '@/components/core/Footer/Footer';
import Hero from '@/components/core/Community/Hero/Hero';
import About from '@/components/core/Community/About/About';

export async function generateMetadata() {
  return {
    title: 'Community | Serene.',
    description: 'From Friendship to Endless Possibilities!',
    openGraph: {
      title: 'Serene — Community',
      description: 'A vibrant community where connections flourish through shared experiences, delicious food, and meaningful conversations among diverse individuals!'
    }
  };
}

export default async function Community() {
  return (
    <div className="theme-main">
      <div className="page" id="top">
        <nav className="main-nav transparent stick-fixed wow-menubar">
          <Header />
        </nav>
        <main id="main">
          <Hero />
          <About />
        </main>
        <footer className="page-section footer pb-30">
          <Footer />
        </footer>
      </div>
    </div>
  );
}
