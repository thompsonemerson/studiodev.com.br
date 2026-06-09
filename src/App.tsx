import { Suspense } from "react";
import { RouterProvider } from "react-router";
import { router } from "./routes";

export default function App() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50" />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
