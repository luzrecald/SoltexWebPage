import { motion as Motion } from "framer-motion";

/**
 * Purpose:
 * Adds a shared staged entrance to major commercial sections so pages like
 * "Productos" and "Contacto" feel polished without each section owning its
 * own transition setup.
 */
export default function RevealOnScroll({ children, delay = 0 }) {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </Motion.div>
  );
}
