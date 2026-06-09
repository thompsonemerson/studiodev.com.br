import { HOME_TECH_STACK } from "@/content/home";

const CAROUSEL_ITEMS = [...HOME_TECH_STACK, ...HOME_TECH_STACK];

export function TechStackCarousel() {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/3">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Stack Tecnológico Enterprise</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Utilizamos linguagens e frameworks líderes de mercado, garantindo manutenibilidade,
              segurança e performance em escala para os nossos clientes.
            </p>
          </div>
          <div
            className="md:w-2/3 overflow-hidden"
            style={{
              maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
            }}
          >
            <div className="flex gap-6 w-max animate-marquee motion-reduce:animate-none">
              {CAROUSEL_ITEMS.map((stack, index) => (
                <div
                  key={`${stack.title}-${index}`}
                  className="w-64 shrink-0 bg-slate-800/50 p-6 rounded-lg border border-slate-700"
                >
                  <stack.icon className="w-8 h-8 text-blue-500 mb-4" />
                  <h4 className="font-bold text-white mb-1">{stack.title}</h4>
                  <p className="text-slate-400 text-xs">{stack.tools}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
