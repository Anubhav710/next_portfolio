"use client"

import {
  Hero,
  Navbar,
  About,
  Experience,
  Tech,
  Works,
  Contact,
  StarCanvas,
} from "@/components"
import { useEffect } from "react"

export default function Home() {
  return (
    <main className="relative z-0 bg-primary space-y-10  ">
      <div
        className={`bg-hero-pattern bg-cover bg-no-repeat bg-center h-screen `}
      >
        <Navbar />
        <Hero />
      </div>
      <About />
      <Tech />
      <Works />

      <div className="relative z-0">
        <Contact />
        <StarCanvas />
      </div>
    </main>
  )
}
