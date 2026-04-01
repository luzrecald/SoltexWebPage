import { useEffect } from "react";
import { matchPath, useLocation } from "react-router-dom";
import { trackPageView } from "../lib/analytics";

let lastTrackedPagePath = "";

function getPageTitle(pathname) {
  if (pathname === "/") {
    return "Soltex | Inicio";
  }

  if (pathname === "/productos") {
    return "Soltex | Productos";
  }

  if (matchPath("/productos/:id", pathname)) {
    return "Soltex | Producto";
  }

  if (pathname === "/contacto") {
    return "Soltex | Contacto";
  }

  if (pathname === "/personalizacion") {
    return "Soltex | Personalizacion";
  }

  return "Soltex | 404";
}

export default function usePageTracking() {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    if (pathname === "/personalizacion") {
      return;
    }

    const pagePath = `${pathname}${search}`;

    if (pagePath === lastTrackedPagePath) {
      return;
    }

    lastTrackedPagePath = pagePath;
    trackPageView(pagePath, getPageTitle(pathname));
  }, [pathname, search, hash]);
}
