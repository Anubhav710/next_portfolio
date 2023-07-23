import Image from "next/image"
import {
  Hero,
  Navbar,
  About,
  Experience,
  Tech,
  Works,
  Feedback,
  Contact,
  StarCanvas,
} from "@/components"

export default function Home() {
  return (
    <main className="relative z-0 bg-primary space-y-10">
      <div className={`bg-hero-pattern bg-cover bg-no-repeat bg-center`}>
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />

      <div className="relative z-0">
        <Contact />
        <StarCanvas />
      </div>
    </main>
  )
}
