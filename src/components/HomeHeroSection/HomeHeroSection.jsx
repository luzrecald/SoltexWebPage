import { NavLink } from "react-router-dom";
import "./HomeHeroSection.css";

export default function HomeHeroSection() {
  return (
    <section className="hero" aria-label="Presentación Soltex">
      <div className="hero-bg">
        <img
          src="/hero.webp"
          alt="Cuellos y pretinas personalizadas de Soltex Paraguay"
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

          <p className="sr-only">
            Soltex Paraguay es una fábrica de cuellos y pretinas personalizadas
            de algodón y poliéster para remeras polo, uniformes escolares,
            camperas, buzos y prendas deportivas. Diseños a medida con mano de
            obra 100% paraguaya.
          </p>

          <NavLink to="/productos" className="hero-btn">
            Explora Ahora
          </NavLink>
        </div>
      </div>
    </section>
  );
}