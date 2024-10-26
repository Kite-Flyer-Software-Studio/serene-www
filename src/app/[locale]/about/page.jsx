import Header from '@/components/core/Header/Header';
import Footer from '@/components/core/Footer/Footer';
import Hero from '@/components/core/About/Hero/Hero';
import Brief from '@/components/core/About/Brief';
import Partners from '@/components/core/About/Partners/Partners';
import FAQ from '@/components/core/About/FAQ';

export const metadata = {
  title: 'About | Serene.',
  description: 'From Strangers To Lasting Friendships',
  icons: {
    icon: '/assets/images/favicon.ico',
  },
};

export default function About() {
  return (
     <>
      <div className="theme-main">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar">
            <Header />
          </nav>
          <main id="main">
            <Hero />
            <Brief />
            <Partners />
            <FAQ />
          </main>
          <footer className="page-section footer pb-30">
            <Footer />
          </footer>
        </div>
      </div>
    </>
  )
}
