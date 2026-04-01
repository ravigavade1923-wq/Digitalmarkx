import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PageLoader from "./PageLoader";

export default function PageTransition({ children }) {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setLoading(true);
    setShowContent(false);

    const timer = setTimeout(() => {
      setLoading(false);
      setShowContent(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 1800);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {loading && <PageLoader />}
      <div className={`wm-page-content ${showContent ? "show" : ""}`}>
        {children}
      </div>
    </>
  );
}
