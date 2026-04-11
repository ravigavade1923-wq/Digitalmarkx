import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/home/Home";
import BlogSection from "./components/blog/BlogSection";
import Footer from "./components/footer/Footer";
import ContactPage from "./components/contact/Contact";
import AboutPage from "./components/about/About";
import BlogDetails from "./components/blog/BlogDetails";
import Services from "./components/service/Services";
import ServiceDetails from "./components/service/ServiceDetails";
import Pricing from "./components/pricing/Pricing";
import ScrollToTop from "./components/ScrollToTop";
import PageTransition from "./components/loader/PageTransition";
import PageLoader from "./components/loader/PageLoader";
import BloggerSingle from "./components/blogger/BloggerSingle";
import BloggerPage from "./components/blogger/BloggerPage";


function App() {
  const [siteLoading, setSiteLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSiteLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (siteLoading) {
    return <PageLoader />;
  }

  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <BlogSection />
              <Footer />
            </>
          }
        />

        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogSection />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetails />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/loader" element={<PageLoader />} />
         <Route path="/blogger" element={<BloggerPage />} />
        <Route path="/blogger/:slug" element={<BloggerSingle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
