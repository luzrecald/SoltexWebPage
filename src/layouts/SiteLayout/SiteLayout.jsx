import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import usePageTracking from "../../hooks/usePageTracking";

/**
 * Purpose:
 * Provides the shared commercial shell for every public route, keeping the
 * Soltex navigation and footer visible around all page content.
 */
export default function SiteLayout() {
  usePageTracking();

  return (
    <>
      <Navbar />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
