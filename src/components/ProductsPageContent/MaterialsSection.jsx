import { PRODUCT_MATERIALS } from "../../data/catalogContent";

export default function MaterialsSection() {
  return (
    <section className="pg-materials">
      <div className="pg-container">
        <div className="pg-sectionHead">
          <div className="pg-sectionHead__copy">
            <span className="pg-kicker">Materiales</span>
            <h2 className="pg-sectionTitle">Materia prima de alta calidad</h2>
            <p className="pg-sectionLead">
              Trabajamos con fibras de alta calidad para lograr piezas cómodas y
              duraderas.
            </p>
          </div>
        </div>

        <div className="pg-materials__grid">
          {PRODUCT_MATERIALS.map((material) => (
            <article
              key={material.title}
              className="pg-materialCard pg-materialCard--simple"
            >
              <div className="pg-materialCard__body pg-materialCard__body--full">
                <h3 className="pg-materialCard__title">{material.title}</h3>
                <p className="pg-materialCard__text">{material.text}</p>

                <ul className="pg-materialCard__list">
                  {material.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
