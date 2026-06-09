import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/shared/OptimizedImage";
import { HOME_IMAGES } from "@/content/home";

export function HeroSection() {
  return (
    <section className="relative bg-slate-900 text-white pt-24 pb-32 lg:pt-32 lg:pb-40 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <OptimizedImage
          src={HOME_IMAGES.hero}
          alt="Corporate Environment"
          className="w-full h-full object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-slate-900/80 mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <div className="md:w-2/3 lg:w-3/5 animate-fade-in-up motion-reduce:animate-none">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-8 h-1 bg-blue-500 rounded-full" />
            <span className="text-blue-400 font-bold uppercase tracking-wider text-sm">
              Consultoria e Engenharia
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1]">
            Desenvolvemos software que impulsiona negócios.
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
            Criamos sistemas, aplicativos, integrações e soluções inteligentes para empresas que
            precisam evoluir seus processos, produtos e operações.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contato">
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto shadow-lg shadow-blue-900/20"
              >
                Falar com um Consultor
              </Button>
            </Link>
            <Link to="/servicos">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-white bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                Conhecer Soluções
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
