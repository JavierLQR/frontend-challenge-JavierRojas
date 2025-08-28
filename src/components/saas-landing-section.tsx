import { Header } from './saas-landing/header'
import { SocialProof } from './saas-landing/social-proof'
import { HeroSection } from './saas-landing/hero-section'
import { LogoCarousel } from './saas-landing/logo-carousel'

const SaasLandingSection = () => {
  return (
    <div className="relative min-h-screen bg-white">
      <div
        className="absolute inset-x-0 top-0 h-[300px] 
               bg-[url('https://framerusercontent.com/images/VfkEna8iRjS9ZbXeCG1MRu3r0w.svg')] 
               bg-repeat bg-center bg-[length:163.8px_auto] opacity-2 pointer-events-none"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 to-white" />
      </div>

      <Header />

      <div className="container mx-auto  px-4 py-16 pt-40 relative z-10">
        <SocialProof />
        <HeroSection />
        <LogoCarousel />
      </div>
    </div>
  )
}
export default SaasLandingSection
