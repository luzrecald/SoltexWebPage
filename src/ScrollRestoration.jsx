import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Purpose:
 * Resets scroll on route changes so visitors arrive at the main headline of
 * each page, such as "Productos" or "Hablemos", instead of inheriting the
 * previous scroll position.
 */
export default function ScrollRestoration() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      if (hash) {
        const targetId = decodeURIComponent(hash.slice(1));
        const target = document.getElementById(targetId);

        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
      }

      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
}
