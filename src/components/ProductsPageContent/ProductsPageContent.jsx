import RevealOnScroll from "../RevealOnScroll/RevealOnScroll";
import ProductList from "./ProductList";
import MaterialsSection from "./MaterialsSection";
import CustomizationSlider from "./CustomizationSlider";
import ContactCTA from "./ContactCTA";
import "./ProductsPageContent.css";

/**
 * Purpose:
 * Serves as the full product-selling page by combining the "Catálogo"
 * assortment, material credibility, customization options, and a final
 * "Contacto" CTA into one commercial flow.
 */
export default function ProductsPageContent() {
  return (
    <section id="productos" className="pg-page">
      <div className="pg-shell">
        <RevealOnScroll delay={0.2}>
          <ProductList />
        </RevealOnScroll>

        <RevealOnScroll delay={0.15}>
          <MaterialsSection />
        </RevealOnScroll>

        <RevealOnScroll delay={0.25}>
          <CustomizationSlider />
        </RevealOnScroll>

        <RevealOnScroll delay={0.3}>
          <ContactCTA />
        </RevealOnScroll>
      </div>
    </section>
  );
}
