import Hero from "@/components/core/Root/Hero/Hero";
import Footer from "@/components/core/Footer/Footer";
import Header from "@/components/core/Header/Header";
import Content from "@/components/core/Root/Content/Content";

export const metadata = {
  title:
    "Serene.",
  description:
    "Meet the perfect strangers over food and wine!",
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
          <footer className="page-section footer bg-gray-light-1 pb-30">
            <Footer />
          </footer>
        </div>
      </div>
    </>
  );
}
