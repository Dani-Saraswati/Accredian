import Hero from '@/components/sections/Hero'
import StatsBar from '@/components/sections/StatsBar'
import LogoMarquee from '@/components/sections/LogoMarquee'
import WhyAccredian from '@/components/sections/WhyAccredian'
import Programs from '@/components/sections/Programs'
import CATFramework from '@/components/sections/CATFramework'
import HowItWorks from '@/components/sections/HowItWorks'
import FAQ from '@/components/sections/FAQ'
import Testimonials from '@/components/sections/Testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <LogoMarquee />
      <WhyAccredian />
      <Programs />
      <CATFramework />
      <HowItWorks />
      <FAQ />
      <Testimonials />
    </>
  )
}
