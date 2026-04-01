import "./CompanyStorySection.css";

/**
 * Purpose:
 * Builds trust around the "EMPRESA FAMILIAR" positioning by telling the Soltex
 * origin story and framing the company as a reliable long-term manufacturing
 * partner.
 */
export default function CompanyStorySection() {
  return (
    <section id="empresa" className="story" aria-labelledby="story-title">
      <div className="story-inner">
        <div className="story-grid">
          <div className="story-content">
            <p className="story-kicker">EMPRESA FAMILIAR</p>

            <h2 className="story-title" id="story-title">
              Una trayectoria construida con consistencia
            </h2>

            <div className="story-prose">
              <p>
                Soltex nació en 2011 como un emprendimiento familiar, impulsado
                por la necesidad de fabricar cuellos y pretinas tejidos en un
                contexto donde la oferta local era limitada.
              </p>

              <p>
                Desde sus inicios, la empresa ha construido un camino de
                crecimiento sostenido, basado en la experiencia, el trabajo
                constante y la visión de desarrollar componentes tejidos de alta
                calidad.
              </p>

              <p>
                Hoy colaboramos con marcas y confeccionistas que buscan precisión,
                identidad y excelencia en cada prenda.
              </p>
            </div>
          </div>

          <div className="story-media">
            <div className="story-video-wrap">
              <video
                className="story-video"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source src="/maquina.CompanyStorySection.webm" type="video/webm" />
                Tu navegador no soporta el video.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
