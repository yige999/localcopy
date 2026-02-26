import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { InteractiveDemo } from "@/components/interactive-demo"
import { Features } from "@/components/features"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <InteractiveDemo />
        <Features />
      </main>
      <Footer />
    </div>
  )
}
