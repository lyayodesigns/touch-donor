import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/hero-section'
import { TrustBar } from '@/components/trust-bar'
import { CapabilitiesCards } from '@/components/capabilities-cards'
import { LivingImpact } from '@/components/living-impact'
import { Testimonials } from '@/components/testimonials'
import { ConversionHub } from '@/components/conversion-hub'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <main className="w-full bg-background">
      <Navigation />
      <HeroSection />
      {/* <TrustBar /> */}
      <CapabilitiesCards />
      <LivingImpact />
      <Testimonials />
      <ConversionHub />
      <Footer />
    </main>
  )
}
