import { lazy, Suspense, useEffect, useState } from "react";

const Toaster = lazy(() => import("sonner").then((module) => ({ default: module.Toaster })));

let mountToaster: (() => void) | null = null;

export function requestToasterMount() {
  mountToaster?.();
}

export function DeferredToaster() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    mountToaster = () => setMounted(true);
    return () => {
      mountToaster = null;
    };
  }, []);

  if (!mounted) return null;

  return (
    <Suspense fallback={null}>
      <Toaster theme="light" />
    </Suspense>
  );
}
