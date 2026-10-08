import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import RoadmapSection from "@/components/RoadmapSection";
import ServicesSection from "@/components/ServicesSection";
import IntakeSection from "@/components/IntakeSection";
import PartnersSection from "@/components/PartnersSection";
import NewsletterSection from "@/components/NewsletterSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <AboutSection />
      <RoadmapSection />
      <ServicesSection />
      <IntakeSection />
      <PartnersSection />
      <NewsletterSection />
    </div>
  );
}
