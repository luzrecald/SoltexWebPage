import HomeHeroSection from "../components/HomeHeroSection/HomeHeroSection";
import CompanyStorySection from "../components/CompanyStorySection/CompanyStorySection";
import ManufacturingCapabilitiesSection from "../components/ManufacturingCapabilitiesSection/ManufacturingCapabilitiesSection";
import HomeProductsPreview from "../components/HomeProductsPreview/HomeProductsPreview";
import CustomizationProcessSection from "../components/CustomizationProcessSection/CustomizationProcessSection";
import Gallery from "../components/Gallery/Gallery";
import NationwideShippingCTA from "../components/NationwideShippingCTA/NationwideShippingCTA";
import RevealOnScroll from "../components/RevealOnScroll/RevealOnScroll";

/**
 * Purpose:
 * Composes the main brand landing page, moving visitors from "Bienvenidos a
 * Soltex" through company proof, "Productos", customization guidance, and the
 * final conversion prompts.
 */
export default function Home() {
  return (
    <>
      <HomeHeroSection />

      <RevealOnScroll>
        <CompanyStorySection />
      </RevealOnScroll>

      <RevealOnScroll delay={0.1}>
        <HomeProductsPreview />
      </RevealOnScroll>

      <RevealOnScroll delay={0.15}>
        <ManufacturingCapabilitiesSection />
      </RevealOnScroll>

      <RevealOnScroll delay={0.2}>
        <CustomizationProcessSection />
      </RevealOnScroll>

      <RevealOnScroll delay={0.25}>
        <Gallery />
      </RevealOnScroll>

      <RevealOnScroll delay={0.3}>
        <NationwideShippingCTA />
      </RevealOnScroll>
    </>
  );
}
