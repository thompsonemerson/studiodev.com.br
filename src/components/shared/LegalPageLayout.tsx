import { ChevronRight, type LucideIcon } from "lucide-react";
import { Link } from "react-router";
import type { LegalPageConfig, LegalSection } from "@/types/legal";

type LegalPageLayoutProps = {
  icon: LucideIcon;
  config: LegalPageConfig;
  sections: LegalSection[];
};

export function LegalPageLayout({ icon: Icon, config, sections }: LegalPageLayoutProps) {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-slate-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-slate-400 text-sm mb-6">
            <Link to="/" className="hover:text-white transition-colors">
              Início
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">{config.breadcrumb}</span>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-blue-600 rounded flex items-center justify-center flex-shrink-0">
              <Icon className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white">{config.title}</h1>
          </div>
          <p className="text-slate-400 text-sm mt-4">
            Última atualização: 01 de junho de 2026 &nbsp;·&nbsp; Versão 1.0
          </p>
          <p className="text-slate-300 mt-4 max-w-2xl leading-relaxed">{config.description}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-10">
          {sections.map((section) => (
            <div
              key={section.title}
              className="border-b border-slate-100 pb-10 last:border-0 last:pb-0"
            >
              <h2 className="text-xl font-bold text-slate-900 mb-4">{section.title}</h2>
              <div className="text-slate-600 leading-relaxed whitespace-pre-line text-sm">
                {section.content}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-slate-50 border border-slate-200 rounded p-6">
          <p className="text-slate-500 text-xs leading-relaxed">{config.disclaimer}</p>
        </div>

        <div className="mt-8 flex gap-4">
          {config.relatedLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={
                link.variant === "primary"
                  ? "text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
                  : "text-slate-500 hover:text-slate-700 text-sm transition-colors"
              }
            >
              {link.label} →
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
