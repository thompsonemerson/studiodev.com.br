import { ShieldCheck } from "lucide-react";
import { OptimizedImage } from "@/components/shared/OptimizedImage";
import { HOME_IMAGES, HOME_WHY_US } from "@/content/home";

export function WhyChooseUsSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <OptimizedImage
                src={HOME_IMAGES.meeting}
                alt="Business meeting"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Parceiros Estratégicos de Tecnologia
            </h2>
            <p className="text-slate-600 text-lg mb-8">
              A StudioDev não é apenas uma fornecedora de código. Atuamos como consultores e
              parceiros de negócio, garantindo que a tecnologia escolhida resolva os problemas
              reais da sua operação.
            </p>

            <div className="space-y-6">
              {HOME_WHY_US.map((item) => (
                <div key={item.title} className="flex items-start">
                  <ShieldCheck className="w-6 h-6 text-blue-600 mt-1 mr-4 shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
                    <p className="text-slate-600">{item.desc}</p>
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
