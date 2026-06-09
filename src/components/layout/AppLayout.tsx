import { useCallback, useState } from "react";
import { Outlet } from "react-router";
import { DeferredToaster } from "@/components/shared/DeferredToaster";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { useRouteChange } from "@/hooks/useRouteChange";
import { useScrollPosition } from "@/hooks/useScrollPosition";

export function AppLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isScrolled = useScrollPosition();

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  useRouteChange(closeMobileMenu);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col">
      <Header
        isScrolled={isScrolled}
        mobileMenuOpen={mobileMenuOpen}
        onToggleMobileMenu={() => setMobileMenuOpen((open) => !open)}
      />

      <main className="flex-grow">
        <Outlet />
      </main>

      <DeferredToaster />
      <Footer />
    </div>
  );
}
