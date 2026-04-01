import { useEffect, useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";
import RevealOnScroll from "../RevealOnScroll/RevealOnScroll";
import { CONTACT_FORM_ID } from "../../config/forms";
import { CONTACT_CONTENT, CONTACT_DETAILS } from "../../data/contactData";
import {
  ANALYTICS_EVENTS,
  trackEvent,
  trackLead,
} from "../../lib/analytics";
import "./ContactSection.css";

/**
 * Purpose:
 * Concentrates the main conversion actions under "Contacto" / "Hablemos",
 * combining the inquiry form, WhatsApp, email, and "Visítanos" location block
 * for prospects ready to start a conversation.
 */
export default function ContactSection() {
  const [state, handleSubmit] = useForm(CONTACT_FORM_ID);
  const formRef = useRef(null);
  const didTrackSuccessRef = useRef(false);

  useEffect(() => {
    if (state.succeeded) {
      formRef.current?.reset();

      if (!didTrackSuccessRef.current) {
        trackEvent(ANALYTICS_EVENTS.formSubmit, {
          form_name: "contacto",
          location: "contacto",
        });
        trackEvent(ANALYTICS_EVENTS.generateLead, {
          form_name: "contacto",
          location: "contacto",
          method: "form",
        });
        didTrackSuccessRef.current = true;
      }

      return;
    }

    didTrackSuccessRef.current = false;
  }, [state.succeeded]);

  const handleWhatsappClick = () => {
    trackLead("whatsapp", {
      location: "contacto",
      label: CONTACT_DETAILS.whatsappLabel,
    });
  };

  const handleEmailClick = () => {
    trackLead("email", {
      location: "contacto",
      label: CONTACT_DETAILS.email,
    });
  };

  return (
    <section className="contact-page" id="contacto" aria-labelledby="ct-title">
      <div className="contact-shell">
        <RevealOnScroll delay={0.1}>
          <header className="ct-header">
            <span className="ct-kicker">{CONTACT_CONTENT.kicker}</span>
            <h1 className="ct-title" id="ct-title">
              {CONTACT_CONTENT.title}
            </h1>
            <p className="ct-lead">{CONTACT_CONTENT.lead}</p>
          </header>
        </RevealOnScroll>

        <RevealOnScroll delay={0.18}>
          <section className="ct-main">
            <aside className="ct-info" aria-label="Información de contacto">
              <div className="ct-infoBlock">
                <div className="ct-infoGroup">
                  <span className="ct-label">Ubicación</span>
                  <p>{CONTACT_DETAILS.location}</p>
                </div>

                <div className="ct-infoGroup">
                  <span className="ct-label">WhatsApp</span>
                  <a
                    href={`https://wa.me/${CONTACT_DETAILS.whatsappDigits}`}
                    target="_blank"
                    rel="noreferrer"
                    onClick={handleWhatsappClick}
                  >
                    {CONTACT_DETAILS.whatsappLabel}
                  </a>
                </div>

                <div className="ct-infoGroup">
                  <span className="ct-label">Email</span>
                  <a
                    href={`mailto:${CONTACT_DETAILS.email}`}
                    onClick={handleEmailClick}
                  >
                    {CONTACT_DETAILS.email}
                  </a>
                </div>
              </div>
            </aside>

            <div className="ct-formCard">
              <form ref={formRef} className="ct-form" onSubmit={handleSubmit}>
                <div className="ct-grid">
                  <div className="ct-field">
                    <label htmlFor="ct-name">Nombre completo</label>
                    <input
                      id="ct-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                    />
                  </div>

                  <div className="ct-field">
                    <label htmlFor="ct-email">Email</label>
                    <input
                      id="ct-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                      className="ct-status is-error"
                    />
                  </div>

                  <div className="ct-field">
                    <label htmlFor="ct-phone">Teléfono</label>
                    <input
                      id="ct-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                    />
                  </div>

                  <div className="ct-field">
                    <label htmlFor="ct-subject">Asunto</label>
                    <input id="ct-subject" name="subject" type="text" required />
                  </div>
                </div>

                <div className="ct-field ct-field--message">
                  <label htmlFor="ct-message">Mensaje</label>
                  <textarea id="ct-message" name="message" rows={6} required />
                  <ValidationError
                    prefix="Mensaje"
                    field="message"
                    errors={state.errors}
                    className="ct-status is-error"
                  />
                </div>

                <div className="ct-actions">
                  <button
                    className="ct-btn"
                    type="submit"
                    disabled={state.submitting}
                  >
                    {state.submitting ? "Enviando..." : "Enviar mensaje"}
                  </button>

                  {state.succeeded ? (
                    <p className="ct-status is-ok" role="status">
                      Mensaje enviado correctamente. Te responderemos lo antes
                      posible.
                    </p>
                  ) : null}

                  {!state.succeeded && state.errors?.length > 0 ? (
                    <p className="ct-status is-error" role="alert">
                      No pudimos enviar tu mensaje. Intentá nuevamente o
                      escribinos por WhatsApp o email.
                    </p>
                  ) : null}
                </div>
              </form>
            </div>
          </section>
        </RevealOnScroll>
      </div>

      <RevealOnScroll delay={0.24}>
        <section className="ct-visit" aria-label="Ubicación visual">
          <img
            src={CONTACT_DETAILS.mapImage}
            alt="Sucursal Soltex"
            className="ct-visitBg"
          />

          <div className="ct-visitCard">
            <span className="ct-label">{CONTACT_CONTENT.visitKicker}</span>
            <h3>{CONTACT_CONTENT.visitTitle}</h3>
            <p>{CONTACT_CONTENT.visitText}</p>
            <a href={CONTACT_DETAILS.mapsUrl} target="_blank" rel="noreferrer">
              {CONTACT_CONTENT.mapsLabel}
            </a>
          </div>
        </section>
      </RevealOnScroll>
    </section>
  );
}
