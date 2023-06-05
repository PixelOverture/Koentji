'use client'

import About from '@/Components/section/About'
import Footer from '@/Components/section/Footer'
import Hero from '@/Components/section/Hero'
import Marquee from '@/Components/section/Marquee'
import Portfolio from '@/Components/section/Portfolio'
import ReachUs from '@/Components/section/ReachUs'
import WhyUs from '@/Components/section/WhyUs'

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <WhyUs />
      <About />
      <Portfolio />
      <ReachUs />
      <Footer />
    </main>
  )
}
