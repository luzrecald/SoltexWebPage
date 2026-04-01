import { useRef, useState } from "react";
import { PRODUCT_CUSTOMIZATION_SLIDES } from "../../data/catalogContent";

export default function CustomizationSlider() {
  const [current, setCurrent] = useState(0);
  const touchStartXRef = useRef(null);
  const touchEndXRef = useRef(null);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % PRODUCT_CUSTOMIZATION_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? PRODUCT_CUSTOMIZATION_SLIDES.length - 1 : prev - 1
    );
  };

  const handleTouchStart = (event) => {
    touchStartXRef.current = event.targetTouches[0].clientX;
    touchEndXRef.current = null;
  };

  const handleTouchMove = (event) => {
    touchEndXRef.current = event.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartXRef.current === null || touchEndXRef.current === null) {
      return;
    }

    const distance = touchStartXRef.current - touchEndXRef.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) nextSlide();
    if (distance < -minSwipeDistance) prevSlide();
  };

  const activeSlide = PRODUCT_CUSTOMIZATION_SLIDES[current];

  return (
    <section className="pg-custom">
      <div className="pg-container pg-custom__grid">
        <div className="pg-custom__copy">
          <span className="pg-kicker">Personalización</span>
          <h2 className="pg-sectionTitle">Opciones de personalización</h2>
          <p className="pg-sectionLead pg-sectionLead--custom">
            Deslizá para ver las distintas opciones de personalización.
          </p>

          <article className="pg-customItem">
            <div className="pg-customItem__top">
              <h3 className="pg-customItem__title">{activeSlide.title}</h3>
              <span className="pg-customItem__counter">
                {current + 1}/{PRODUCT_CUSTOMIZATION_SLIDES.length}
              </span>
            </div>

            <p className="pg-customItem__text">{activeSlide.text}</p>
          </article>

          <div className="pg-custom__controls">
            <button
              type="button"
              className="pg-custom__navButton"
              onClick={prevSlide}
              aria-label="Ver opción anterior"
            >
              <span className="pg-custom__navArrow" aria-hidden="true">
                &larr;
              </span>
            </button>

            <div className="pg-custom__carouselDots">
              {PRODUCT_CUSTOMIZATION_SLIDES.map((slide, index) => (
                <button
                  key={slide.title}
                  type="button"
                  className={`pg-custom__carouselDot ${
                    current === index ? "is-active" : ""
                  }`}
                  onClick={() => setCurrent(index)}
                  aria-label={`Ver ${slide.title}`}
                />
              ))}
            </div>

            <button
              type="button"
              className="pg-custom__navButton"
              onClick={nextSlide}
              aria-label="Ver opción siguiente"
            >
              <span className="pg-custom__navArrow" aria-hidden="true">
                &rarr;
              </span>
            </button>
          </div>
        </div>

        <div
          className="pg-custom__visuals"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="pg-custom__mainImage">
            <img
              src={activeSlide.image}
              alt={activeSlide.title}
              loading="lazy"
              className="pg-custom__sliderImage"
            />
          </div>

          <div className="pg-custom__sideImages">
            {PRODUCT_CUSTOMIZATION_SLIDES.map((slide, index) => (
              <button
                key={slide.title}
                type="button"
                className={`pg-custom__thumb ${
                  current === index ? "is-active" : ""
                }`}
                onClick={() => setCurrent(index)}
                aria-label={`Seleccionar ${slide.title}`}
              >
                <img src={slide.image} alt={slide.title} loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
