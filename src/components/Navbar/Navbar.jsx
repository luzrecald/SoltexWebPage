import { useCallback, useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

const navItems = [
  { label: "EMPRESA", to: "/" },
  { label: "PRODUCTOS", to: "/productos" },
  { label: "CONTACTO", to: "/contacto" },
];

const MOBILE_BREAKPOINT = 980;

/**
 * Purpose:
 * Serves as the primary wayfinding layer for the brand, exposing the core
 * visitor paths "EMPRESA", "PRODUCTOS", and "CONTACTO" while reinforcing the
 * local trust message "Mano de obra 100% Paraguaya".
 */
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const toggleRef = useRef(null);
  const menuRef = useRef(null);
  const firstLinkRef = useRef(null);
  const restoreFocusRef = useRef(false);
  const previousFocusRef = useRef(null);

  const closeMenu = useCallback((restoreFocus = true) => {
    restoreFocusRef.current = restoreFocus;
    setIsMenuOpen(false);
  }, []);

  const openMenu = useCallback(() => {
    previousFocusRef.current = document.activeElement;
    restoreFocusRef.current = true;
    setIsMenuOpen(true);
  }, []);

  const handleToggleClick = () => {
    if (isMenuOpen) {
      closeMenu(true);
      return;
    }

    openMenu();
  };

  const isItemActive = (item) => {
    if (item.to === "/") {
      return location.pathname === "/";
    }

    if (item.to === "/productos") {
      return (
        location.pathname === "/productos" ||
        location.pathname.startsWith("/productos/")
      );
    }

    return location.pathname === item.to;
  };

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu(true);
        return;
      }

      if (event.key !== "Tab" || !menuRef.current) {
        return;
      }

      const focusableElements = menuRef.current.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );

      if (!focusableElements.length) {
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [closeMenu, isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) {
      if (restoreFocusRef.current) {
        (previousFocusRef.current instanceof HTMLElement
          ? previousFocusRef.current
          : toggleRef.current
        )?.focus();
      }

      restoreFocusRef.current = false;
      return;
    }

    const handleResize = () => {
      if (window.innerWidth > MOBILE_BREAKPOINT) {
        closeMenu(false);
      }
    };

    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, [closeMenu, isMenuOpen]);

  return (
    <nav className="site-nav" aria-label="Navegación principal">
      <div className="site-nav__inner">
        <NavLink
          to="/"
          end
          className="site-nav__brand"
          onClick={() => closeMenu(false)}
          aria-label="Ir a inicio"
        >
          <img
            src="/footer-logo.png"
            alt="Soltex"
            className="site-nav__logo"
            loading="eager"
            decoding="async"
          />
        </NavLink>

        <div className="site-nav__links">
          {navItems.map((item) => (
            <Link
              key={item.label}
              className={`site-nav__link ${
                isItemActive(item) ? "is-active" : ""
              }`}
              aria-current={isItemActive(item) ? "page" : undefined}
              to={item.to}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="site-nav__badge" aria-label="Mano de obra 100% Paraguaya">
          <img
            src="/paraguay-flag.png"
            alt="Bandera de Paraguay"
            className="site-nav__flag"
            loading="lazy"
            decoding="async"
          />
          <span className="site-nav__badge-text">Mano de obra 100% Paraguaya</span>
        </div>

        <button
          ref={toggleRef}
          className={`site-nav__toggle ${isMenuOpen ? "is-open" : ""}`}
          type="button"
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMenuOpen}
          aria-controls="site-nav-mobile"
          onClick={handleToggleClick}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        id="site-nav-mobile"
        ref={menuRef}
        className={`site-nav__mobile ${isMenuOpen ? "is-open" : ""}`}
        aria-hidden={!isMenuOpen}
        aria-label="Menú"
      >
        <div className="site-nav__mobile-inner">
          {navItems.map((item, index) => (
            <Link
              key={item.label}
              ref={index === 0 ? firstLinkRef : undefined}
              className={`site-nav__mobile-link ${
                isItemActive(item) ? "is-active" : ""
              }`}
              aria-current={isItemActive(item) ? "page" : undefined}
              to={item.to}
              onClick={() => closeMenu(false)}
              tabIndex={isMenuOpen ? 0 : -1}
            >
              {item.label}
            </Link>
          ))}

          <div className="site-nav__mobile-badge">
            <img
              src="/paraguay-flag.png"
              alt="Bandera de Paraguay"
              className="site-nav__mobile-flag"
              loading="lazy"
              decoding="async"
            />
            <span className="site-nav__mobile-badge-text">
              Mano de obra 100% Paraguaya
            </span>
          </div>
        </div>
      </div>

      <button
        type="button"
        className={`site-nav__backdrop ${isMenuOpen ? "is-open" : ""}`}
        aria-hidden={!isMenuOpen}
        tabIndex={isMenuOpen ? 0 : -1}
        aria-label="Cerrar menú"
        onClick={() => closeMenu(true)}
      />
    </nav>
  );
}
