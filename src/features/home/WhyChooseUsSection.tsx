import { ShieldCheck } from "lucide-react";
import { OptimizedImage } from "@/components/shared/OptimizedImage";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { HOME_IMAGES, HOME_WHY_US } from "@/content/home";

export function WhyChooseUsSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          <div>
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <OptimizedImage
                src={HOME_IMAGES.meeting}
                alt="Reunião de consultoria técnica com equipe corporativa"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </div>

          <div>
            <SectionHeading
              align="left"
              title="Parceiros Estratégicos de Tecnologia"
              description="A StudioDev não é apenas uma fornecedora de código. Atuamos como consultores e parceiros de negócio, garantindo que a tecnologia escolhida resolva os problemas reais da sua operação."
              className="mb-8"
            />

            <div className="space-y-6">
              {HOME_WHY_US.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <ShieldCheck className="w-6 h-6 text-blue-600 mt-0.5 shrink-0" strokeWidth={1.75} />
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
