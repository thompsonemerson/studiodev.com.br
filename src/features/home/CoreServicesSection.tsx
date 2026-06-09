import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { HOME_SERVICES } from "@/content/home";

export function CoreServicesSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Nossas Áreas de Atuação"
          description="Oferecemos expertise técnica para todas as etapas da transformação digital da sua empresa."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {HOME_SERVICES.map((service) => (
            <div
              key={service.title}
              className="bg-white p-8 rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 bg-blue-50 rounded flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-6">{service.desc}</p>
              <Link
                to="/servicos"
                className="text-blue-600 font-bold inline-flex items-center hover:text-blue-800 transition-colors"
              >
                Saiba mais <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
