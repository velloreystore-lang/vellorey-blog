// src/App.jsx
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

// Pages
import Home from "./Pages/Home";
import Article from "./Pages/Article";
import Privacy from "./Pages/PrivacyPolicy";
import Terms from "./Pages/TermsAndConditions";
import Disclaimer from "./Pages/Disclaimer";
import About from "./Pages/AboutUs";
import GoogleAnalytics from "./GoogleTag.jsx";

function PageTracker() {
  const location = useLocation();

  useEffect(() => {
    window.gtag?.("config", "G-6LC4E5V54M", {
      page_path: location.pathname,
    });
  }, [location.pathname]);

  return null;
}


function App() {
  return (
    <>
    <GoogleAnalytics />
    <PageTracker />
    <Routes>
      {/* Home page */}
      <Route path="/" element={<Home />} />

      {/* Dynamic article page */}
      <Route path="/article/:id" element={<Article />} />

      {/* Static pages */}
      <Route path="/privacy-policy" element={<Privacy />} />
      <Route path="/terms-and-conditions" element={<Terms />} />
      <Route path="/disclaimer" element={<Disclaimer />} />
      <Route path="/about-us" element={<About />} />
    </Routes>
    </>
  );
}

export default App;
