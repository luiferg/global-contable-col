'use client'
import About from './components/About'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import HomeBanner from './components/HomeBanner'
import NavBar from './components/NavBar'
import Services from './components/Services'

export default function Home() {
  return (
    <main style={{ marginTop: 0 }}>
      <NavBar />
      <HomeBanner />
      <About />
      <Services />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  )
}
