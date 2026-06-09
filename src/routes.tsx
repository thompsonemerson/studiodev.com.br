import { lazy } from "react";
import { createBrowserRouter } from "react-router";
import { AppLayout } from "@/components/layout/AppLayout";

const Home = lazy(() => import("@/pages/Home").then((m) => ({ default: m.Home })));
const Servicos = lazy(() => import("@/pages/Servicos").then((m) => ({ default: m.Servicos })));
const Cases = lazy(() => import("@/pages/Cases").then((m) => ({ default: m.Cases })));
const Sobre = lazy(() => import("@/pages/Sobre").then((m) => ({ default: m.Sobre })));
const Contato = lazy(() => import("@/pages/Contato").then((m) => ({ default: m.Contato })));
const PoliticaPrivacidade = lazy(() =>
  import("@/pages/PoliticaPrivacidade").then((m) => ({ default: m.PoliticaPrivacidade })),
);
const TermosDeUso = lazy(() =>
  import("@/pages/TermosDeUso").then((m) => ({ default: m.TermosDeUso })),
);

export const router = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,
    children: [
      { index: true, Component: Home },
      { path: "servicos", Component: Servicos },
      { path: "cases", Component: Cases },
      { path: "sobre", Component: Sobre },
      { path: "contato", Component: Contato },
      { path: "politica-de-privacidade", Component: PoliticaPrivacidade },
      { path: "termos-de-uso", Component: TermosDeUso },
    ],
  },
]);
