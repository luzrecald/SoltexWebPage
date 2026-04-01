import { NavLink } from "react-router-dom";
import "./HomeHeroSection.css";

/**
 * Purpose:
 * Delivers the first commercial impression of Soltex with the promise
 * "Cuellos y pretinas tejidos a medida" and a direct CTA into "Productos".
 */
export default function HomeHeroSection() {
  return (
    <section className="hero" aria-label="Presentación Soltex">
      <div className="hero-bg">
        <img
          src="/hero.webp"
          alt="Textiles Soltex"
          className="hero-image"
          loading="eager"
          decoding="async"
        />
        <div className="hero-overlay" aria-hidden="true" />
      </div>

      <div className="hero-shell">
        <div className="hero-card">
          <h1 className="hero-title">Bienvenidos a Soltex</h1>

          <p className="hero-subtitle">
            Cuellos y pretinas tejidos a medida.
          </p>

          <NavLink to="/productos" className="hero-btn">
            Explora Ahora
          </NavLink>
        </div>
      </div>
    </section>
  );
}
