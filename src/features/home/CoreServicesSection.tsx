import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import {
  ServiceFeaturedCard,
  ServiceSideCard,
} from "@/features/home/components/ServiceBentoCards";
import { HOME_IMAGES, HOME_SERVICES } from "@/content/home";

export function CoreServicesSection() {
  const [featured, ...rest] = HOME_SERVICES;

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Nossas Áreas de Atuação"
          description="Oferecemos expertise técnica para todas as etapas da transformação digital da sua empresa."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <Reveal delay={0.05} className="lg:col-span-7 lg:row-span-2">
            <ServiceFeaturedCard
              service={featured}
              imageSrc={HOME_IMAGES.dashboard}
              imageAlt="Dashboard de sistema corporativo com indicadores e métricas operacionais"
            />
          </Reveal>

          {rest.map((service, index) => (
            <Reveal
              key={service.title}
              delay={0.1 + index * 0.05}
              className="lg:col-span-5"
            >
              <ServiceSideCard service={service} variant={index === 0 ? "light" : "dark"} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
