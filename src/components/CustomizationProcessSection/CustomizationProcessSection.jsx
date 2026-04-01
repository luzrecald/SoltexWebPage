import { CUSTOMIZATION_PROCESS_CONTENT } from "../../data/homeContent";
import "./CustomizationProcessSection.css";

/**
 * Purpose:
 * Reduces purchase friction by explaining, step by step, how clients can
 * customize an order, from "Envíanos tu diseño" to delivery coordination.
 */
export default function CustomizationProcessSection() {
  return (
    <section
      className="process-section"
      id="personalizacion"
      aria-labelledby="process-title"
    >
      <div className="process-section__inner">
        <header className="process-section__header">
          <h2 id="process-title" className="process-section__title">
            {CUSTOMIZATION_PROCESS_CONTENT.title}
          </h2>
        </header>

        <div className="process-section__list" role="list">
          {CUSTOMIZATION_PROCESS_CONTENT.steps.map((step, index) => (
            <article className="process-row" key={step.heading} role="listitem">
              <div className="process-row__number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="process-row__content">
                <h3 className="process-row__title">{step.heading}</h3>
                <p className="process-row__desc">{step.desc}</p>
              </div>

              <div className="process-row__media" aria-hidden="true">
                <img src={step.image} alt="" loading="lazy" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
