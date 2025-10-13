import Header from '@/components/core/Header/Header';
import Footer from '@/components/core/Footer/Footer';
import Hero from '@/components/core/DeleteAccount/Hero/Hero';


export async function generateMetadata() {
  return {
    title: 'Delete Account | Serene.',
    description: 'We are sorry to see you go.',
    openGraph: {
      title: 'Serene — We are sorry to see you go.',
      description: 'We are sorry to see you go.'
    }
  };
}

export default function HowItWorks() {
  return (
    <div className="theme-main">
      <div className="page" id="top">
        <nav className="main-nav transparent stick-fixed wow-menubar">
          <Header />
        </nav>
        <main id="main">
          <Hero />
        </main>
        <footer className="page-section footer pb-30">
          <Footer />
        </footer>
      </div>
    </div>
  );
}
