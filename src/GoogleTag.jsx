import { useEffect } from "react";

const GA_MEASUREMENT_ID = "G-6LC4E5V54M";

function GoogleAnalytics() {
  useEffect(() => {
    // Prevent duplicate injection
    if (window.gtag) return;

    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}');
    `;
    document.head.appendChild(script2);
  }, []);

  return null;
}

export default GoogleAnalytics;
