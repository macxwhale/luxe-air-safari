import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/ui/HeroSection";
import { TrustMetrics } from "@/components/home/TrustMetrics";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { FeaturedLodges } from "@/components/home/FeaturedLodges";
import { CTABanner } from "@/components/home/CTABanner";
import { ContactStrip } from "@/components/home/ContactStrip";

const Index = () => {
  return (
    <Layout>
      <HeroSection
        image="/images/hero-jets.jpg"
        imageAlt="Private jet charter on tarmac at sunset"
        title="Enquire – Experience – with private JETS we elevate your success with seamless private air travel."
        subtitle="Elgon Luxe is accessible to over 500 credible aircraft suppliers and serving 2500+ destinations."
        showCtas
        primaryCtaText="Enquire Now"
        primaryCtaLink="/about#enquiry"
        secondaryCtaText="Let's Talk"
        secondaryCtaLink="tel:+254758688885"
        overlayOpacity="medium"
        minHeight="min-h-screen"
      />

      <TrustMetrics />

      <ServicesGrid />

      <FeaturedLodges />

      <CTABanner />

      <ContactStrip />
    </Layout>
  );
};

export default Index;
