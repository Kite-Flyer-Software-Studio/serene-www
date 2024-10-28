import React from 'react'

import Header from '@/components/core/Header/Header'
import Hero from '@/components/core/Wines/Hero/Hero'
import Footer from '@/components/core/Footer/Footer'
import List from '@/components/core/Wines/List/List'

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
