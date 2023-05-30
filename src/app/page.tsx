'use client'

import Hero from '@/Components/section/Hero'
import Marquee from '@/Components/section/Marquee'
import Image from 'next/image'
import WhyUs from '@/Components/section/WhyUs'

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <WhyUs />
    </main>
  )
}
