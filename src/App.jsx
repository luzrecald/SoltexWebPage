import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import SiteLayout from "./layouts/SiteLayout/SiteLayout";
import ScrollRestoration from "./ScrollRestoration";
import { initGA } from "./lib/analytics";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Customization from "./pages/Customization";
import Contact from "./pages/Contact";
import ProductDetailPage from "./pages/ProductDetailPage";
import NotFound from "./pages/NotFound";

/**
 * Purpose:
 * Defines the public customer journey for the Soltex website, from the landing
 * experience to "Productos", product detail, "Contacto", and the legacy
 * customization entry point.
 */
export default function App() {
  useEffect(() => {
    initGA();
  }, []);

  return (
    <>
      <ScrollRestoration />

      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/productos/:id" element={<ProductDetailPage />} />
          <Route path="/personalizacion" element={<Customization />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
