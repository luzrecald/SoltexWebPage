import "./NationwideShippingCTA.css";

/**
 * Purpose:
 * Captures high-intent visitors outside the local area with the message
 * "¿Estás en el interior? Hacemos envíos a todo el país" and routes them
 * toward direct contact.
 */
export default function NationwideShippingCTA() {
  return (
    <section className="shipping-banner" aria-label="Envíos">
      <div className="shipping-banner__inner">
        <span className="shipping-banner__bus" aria-hidden="true">
          🚌
        </span>

        <h2 className="shipping-banner__text">
          ¿Estás en el interior? Hacemos envíos a todo el país
        </h2>

        <a href="/contacto" className="shipping-banner__cta">
          Contactar ahora
        </a>
      </div>
    </section>
  );
}
