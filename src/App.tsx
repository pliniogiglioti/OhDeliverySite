import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Categories } from '@/components/Categories'
import { HowItWorks } from '@/components/HowItWorks'
import { Features } from '@/components/Features'
import { FAQ } from '@/components/FAQ'
import { AppBanner } from '@/components/AppBanner'
import { Footer } from '@/components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-white text-[#1d1d1d]">
      <Navbar />
      <Hero />
      <Categories />
      <HowItWorks />
      <Features />
      <FAQ />
      <AppBanner />
      <Footer />
    </div>
  )
}
