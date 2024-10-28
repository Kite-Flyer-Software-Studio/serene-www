import React from 'react'

import Header from '@/components/core/Header/Header'
import Hero from '@/components/core/Wines/Hero/Hero'
import Footer from '@/components/core/Footer/Footer'
import List from '@/components/core/Wines/List/List'

export async function generateMetadata() {
  return {
    title: 'Wines | Serene',
    description: 'The best food comes with the best wine for the best friendship!',
    openGraph: {
      title: 'Serene — Meet the perfect strangers over food and wine!',
      description: "At Serene, we handpicked each bottle of fine wine to ensure the best food & wine pairing for each Serene's guest."
    }
  };
}

export default function WinesPage() {
  return (
    <div className="theme-main">
      <div className="page" id="top">
        <nav className="main-nav transparent stick-fixed wow-menubar">
          <Header />
        </nav>
        <main id="main">
          <Hero />
          <List />
        </main>
        <footer className="page-section footer pb-30">
          <Footer />
        </footer>
      </div>
    </div>
  )
}
