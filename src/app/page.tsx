import ContentDashboard from '@/components/solution-content-dashboard'
import { PainPointsSection } from '@/components/pain-points-section'
import { ProjectDashboardSection } from '@/components/project-dashboard-section'
import SaasLandingSection from '@/components/saas-landing-section'
import { TestimonialsSection } from '@/components/testimonial/testimonial'
import { FAQSection } from '@/components/faq/faq-section'
import { PricingSection } from '@/components/price/price.section'
import { CTASection } from '@/components/cta/cta-section'
import { FooterSection } from '@/components/footer-section'

const Home = () => {
  return (
    <main className="min-h-screen">
      <SaasLandingSection />

      <ProjectDashboardSection />
      <PainPointsSection />
      <ContentDashboard />
      <TestimonialsSection />

      <FAQSection />
      <PricingSection />

      <CTASection />
      <FooterSection />
    </main>
  )
}
export default Home
