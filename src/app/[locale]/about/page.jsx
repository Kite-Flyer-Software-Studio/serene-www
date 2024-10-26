import Header from '@/components/core/Header/Header';
import Footer from '@/components/core/Footer/Footer';

export const metadata = {
  title: 'About Serene',
  description: 'Meet the perfect strangers over food and wine!',
};
export default function AboutUs() {
  return (
    <>
      <div className="theme-main">
        <div className="page" id="top">
          {/* Navigation Panel */}
          <nav className="main-nav transparent stick-fixed wow-menubar">
            <Header />
          </nav>
          <main id="main"></main>
          <footer className="page-section footer pb-30">
            <Footer />
          </footer>
        </div>
      </div>
    </>
  );
}
