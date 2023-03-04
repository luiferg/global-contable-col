'use client'
import About from './About'
import Achievements from './Achievements'
import Contact from './Contact'
import HomeBanner from './HomeBanner'
import Services from './Services'

export default function HomeScreen() {
  return (
    <div>
      <HomeBanner />
      <About />
      <Services />
      <Achievements />
      <Contact />
    </div>
  )
}
