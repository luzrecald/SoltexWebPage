import { GALLERY_HIGHLIGHTS } from "../../data/homeContent";
import "./Gallery.css";

/**
 * Purpose:
 * Provides visual proof for the promise "Excelencia en cada puntada" and uses
 * short Spanish highlights to reinforce craftsmanship and premium finishing.
 */
const Gallery = () => {
  return (
    <section className="gallery" id="galeria">
      <div className="gallery-inner">
        <div className="gallery-layout">
          <div className="gallery-copy">
            <h2 className="gallery-title">Excelencia en cada puntada</h2>

            <div className="gallery-points">
              {GALLERY_HIGHLIGHTS.map((item) => (
                <div className="gallery-point" key={item}>
                  <span className="gallery-point__dot" aria-hidden="true" />
                  <span className="gallery-point__text">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="gallery-visuals">
            <div className="gallery-visual gallery-visual--left">
              <img
                src="/img1.Gallery.webp"
                alt="Detalle textil de alta calidad"
                loading="lazy"
              />
            </div>

            <div className="gallery-visual gallery-visual--right">
              <img
                src="/img2.Gallery.webp"
                alt="Prenda terminada con acabado premium"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
