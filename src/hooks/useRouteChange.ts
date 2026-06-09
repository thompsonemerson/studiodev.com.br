import { useEffect, useRef } from "react";
import { useLocation } from "react-router";

export function useRouteChange(onChange?: () => void) {
  const { pathname } = useLocation();
  const onChangeRef = useRef(onChange);

  useEffect(() => {
    onChangeRef.current = onChange;
  });

  useEffect(() => {
    onChangeRef.current?.();
    window.scrollTo(0, 0);
  }, [pathname]);
}
