import { Navigate } from "react-router-dom";

/**
 * Purpose:
 * Preserves the "/personalizacion" entry point by redirecting visitors to the
 * homepage flow where the customization process is explained in Spanish.
 */
export default function Customization() {
  return <Navigate to={{ pathname: "/", hash: "#personalizacion" }} replace />;
}
