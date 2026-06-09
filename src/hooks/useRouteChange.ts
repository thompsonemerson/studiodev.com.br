import { useEffect } from "react";
import { useLocation } from "react-router";

export function useRouteChange(onChange?: () => void) {
  const { pathname } = useLocation();

  useEffect(() => {
    onChange?.();
    window.scrollTo(0, 0);
  }, [pathname, onChange]);
}
