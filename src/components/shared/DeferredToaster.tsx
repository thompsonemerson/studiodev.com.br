import { lazy, Suspense, useEffect, useState } from "react";

const Toaster = lazy(() => import("sonner").then((module) => ({ default: module.Toaster })));

let mountToaster: (() => void) | null = null;
let resolveToasterReady: (() => void) | null = null;
let toasterReady = false;

const toasterReadyPromise = new Promise<void>((resolve) => {
  resolveToasterReady = () => {
    if (toasterReady) return;
    toasterReady = true;
    resolve();
  };
});

export function requestToasterMount() {
  mountToaster?.();
}

export function ensureToasterReady() {
  requestToasterMount();
  return toasterReadyPromise;
}

function ToasterReady({ onReady }: { onReady: () => void }) {
  useEffect(() => {
    onReady();
  }, [onReady]);

  return <Toaster theme="light" position="top-center" richColors closeButton />;
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
      <ToasterReady onReady={() => resolveToasterReady?.()} />
    </Suspense>
  );
}
