import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/config/navigation";
import { StudioDevLogo } from "./StudioDevLogo";

type HeaderProps = {
  isScrolled: boolean;
  mobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
};

export function Header({ isScrolled, mobileMenuOpen, onToggleMobileMenu }: HeaderProps) {
  const location = useLocation();

  return (
    <>
      <header
        className={`sticky top-0 inset-x-0 z-50 transition-all duration-200 bg-white border-b ${
          isScrolled ? "border-slate-200 shadow-sm py-2" : "border-slate-100 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link to="/">
            <StudioDevLogo />
          </Link>

          <nav className="hidden md:flex items-center space-x-8" aria-label="Principal">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-semibold transition-colors hover:text-blue-600 ${
                  location.pathname === link.href ? "text-blue-600" : "text-slate-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <Link to="/contato">
              <Button variant="primary">Fale com um Especialista</Button>
            </Link>
          </div>

          <button
            type="button"
            className="md:hidden p-2 text-slate-600"
            onClick={onToggleMobileMenu}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-32 px-6 md:hidden flex flex-col h-screen">
          <nav className="flex flex-col space-y-4 flex-grow" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-4"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="pb-12 pt-6">
            <Link to="/contato" className="block w-full">
              <Button variant="primary" className="w-full h-14 text-lg">
                Fale com um Especialista
              </Button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
