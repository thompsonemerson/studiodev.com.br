import { Link } from "react-router";
import {
  FOOTER_COMPANY_LINKS,
  FOOTER_LEGAL_LINKS,
  FOOTER_SERVICE_LINKS,
} from "@/config/navigation";
import { SITE } from "@/config/site";
import { StudioDevLogo } from "./StudioDevLogo";

export function Footer() {
  return (
    <footer className="bg-slate-900 pt-12 pb-10 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <Link to="/" className="inline-block mb-6">
              <StudioDevLogo white />
            </Link>
            <p className="text-sm leading-relaxed mb-6">{SITE.description}</p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Áreas de Atuação</h4>
            <ul className="space-y-3 text-sm">
              {FOOTER_SERVICE_LINKS.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Empresa</h4>
            <ul className="space-y-3 text-sm">
              {FOOTER_COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between text-xs">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left text-slate-500">
            <p>© {new Date().getFullYear()} {SITE.name}. Todos os direitos reservados.</p>
            <span className="hidden md:inline text-slate-700">|</span>
            <p>CNPJ: {SITE.cnpj}</p>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {FOOTER_LEGAL_LINKS.map((link) => (
              <Link key={link.href} to={link.href} className="hover:text-white transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
