import { MANUFACTURING_CAPABILITIES } from "../../data/homeContent";
import "./ManufacturingCapabilitiesSection.css";

/**
 * Purpose:
 * Explains the operational strengths behind "Desarrollo textil a medida",
 * helping buyers understand why Soltex can deliver color accuracy, custom
 * sizing, and unique woven designs.
 */
export default function ManufacturingCapabilitiesSection() {
  return (
    <section className="fh-features" aria-labelledby="features-title">
      <div className="fh-featuresInner">
        <header className="fh-featuresHeader">
          <h2 id="features-title" className="fh-featuresTitle">
            Desarrollo textil a medida
          </h2>
        </header>

        <div className="fh-featuresList" role="list">
          {MANUFACTURING_CAPABILITIES.map((item, index) => (
            <article
              key={item.title}
              className={`fh-featureCard ${
                index < MANUFACTURING_CAPABILITIES.length - 1
                  ? "fh-featureCard--border"
                  : ""
              }`}
              role="listitem"
            >
              <div className="fh-featureIconWrap" aria-hidden="true">
                <span className="material-symbols-outlined fh-featureIcon">
                  {item.icon}
                </span>
              </div>

              <div className="fh-featureContent">
                <h3 className="fh-featureHeading">{item.title}</h3>
                <p className="fh-featureText">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
