import { Helmet } from "react-helmet-async";

import HomeHeroSection from "../components/HomeHeroSection/HomeHeroSection";
import CompanyStorySection from "../components/CompanyStorySection/CompanyStorySection";
import ManufacturingCapabilitiesSection from "../components/ManufacturingCapabilitiesSection/ManufacturingCapabilitiesSection";
import HomeProductsPreview from "../components/HomeProductsPreview/HomeProductsPreview";
import CustomizationProcessSection from "../components/CustomizationProcessSection/CustomizationProcessSection";
import Gallery from "../components/Gallery/Gallery";
import NationwideShippingCTA from "../components/NationwideShippingCTA/NationwideShippingCTA";
import RevealOnScroll from "../components/RevealOnScroll/RevealOnScroll";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>
          Soltex Paraguay | Fábrica de cuellos y pretinas personalizadas
        </title>

        <meta
          name="description"
          content="Fábrica de cuellos y pretinas de algodón y poliéster para remeras polo, camisetas deportivas, camperas, buzos y uniformes escolares. Diseños a medida, mano de obra 100% paraguaya."
        />

        <meta
          property="og:title"
          content="Soltex Paraguay | Fábrica de cuellos y pretinas personalizadas"
        />

        <meta
          property="og:description"
          content="Fábrica de cuellos y pretinas de algodón y poliéster para remeras polo, camisetas deportivas, camperas, buzos y uniformes escolares."
        />

        <meta
          property="og:image"
          content="https://soltexparaguay.com/footer-logo.png"
        />

        <meta property="og:url" content="https://soltexparaguay.com/" />

        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

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