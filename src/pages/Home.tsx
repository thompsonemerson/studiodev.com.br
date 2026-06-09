import { CtaSection } from "@/components/shared/CtaSection";
import { CoreServicesSection } from "@/features/home/CoreServicesSection";
import { HeroSection } from "@/features/home/HeroSection";
import { MethodologySection } from "@/features/home/MethodologySection";
import { TechStackCarousel } from "@/features/home/TechStackCarousel";
import { TrustBanner } from "@/features/home/TrustBanner";
import { WhyChooseUsSection } from "@/features/home/WhyChooseUsSection";

export function Home() {
  return (
    <div className="flex flex-col w-full bg-white">
      <HeroSection />
      <TrustBanner />
      <CoreServicesSection />
      <MethodologySection />
      <TechStackCarousel />
      <WhyChooseUsSection />
      <CtaSection
        title="Pronto para digitalizar sua operação?"
        description="Conte com nossa equipe de especialistas para planejar e executar a próxima evolução tecnológica da sua empresa."
        buttonText="Agendar Reunião de Descoberta"
      />
    </div>
  );
}
