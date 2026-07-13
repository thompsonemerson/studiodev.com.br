import { useEffect, useRef } from "react";
import { useLocation } from "react-router";

export function useRouteChange(onChange?: () => void) {
  const { pathname, hash } = useLocation();
  const onChangeRef = useRef(onChange);

  useEffect(() => {
    onChangeRef.current = onChange;
  });

  useEffect(() => {
    onChangeRef.current?.();

    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    const id = decodeURIComponent(hash.slice(1));
    let cancelled = false;
    let attempts = 0;

    const tryScroll = () => {
      if (cancelled) return;
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView();
        return;
      }
      attempts += 1;
      if (attempts < 30) {
        requestAnimationFrame(tryScroll);
      }
    };

    const timer = window.setTimeout(tryScroll, 0);
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [pathname, hash]);
}
