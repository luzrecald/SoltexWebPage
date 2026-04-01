import { Link } from "react-router-dom";
import "./NotFound.css";

/**
 * Purpose:
 * Handles unknown public routes with a clear 404 state instead of silently
 * sending visitors back to the homepage.
 */
export default function NotFound() {
  return (
    <section className="nf-page" aria-labelledby="nf-title">
      <div className="nf-inner">
        <p className="nf-kicker">404</p>
        <h1 id="nf-title" className="nf-title">
          Esta página no existe
        </h1>
        <p className="nf-copy">
          La URL que intentaste abrir no corresponde a una sección pública de
          Soltex.
        </p>

        <div className="nf-actions">
          <Link to="/" className="nf-link nf-link--primary">
            Volver al inicio
          </Link>
          <Link to="/productos" className="nf-link">
            Ver productos
          </Link>
          <Link to="/contacto" className="nf-link">
            Contacto
          </Link>
        </div>
      </div>
    </section>
  );
}
