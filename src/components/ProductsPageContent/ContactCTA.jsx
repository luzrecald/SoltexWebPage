import { Link } from "react-router-dom";
import { PRODUCT_CATALOG_CTA } from "../../data/catalogContent";

export default function ContactCTA() {
  return (
    <section className="pg-cta">
      <div className="pg-container">
        <div className="pg-cta__content">
          <span className="pg-cta__kicker">{PRODUCT_CATALOG_CTA.kicker}</span>
          <h2 className="pg-cta__title">{PRODUCT_CATALOG_CTA.title}</h2>

          <Link to={PRODUCT_CATALOG_CTA.to} className="pg-cta__button">
            {PRODUCT_CATALOG_CTA.buttonLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
