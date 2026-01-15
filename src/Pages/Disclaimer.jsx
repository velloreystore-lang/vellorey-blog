import Navbar from '..//MyComponets/Navbar.jsx';
import Footer from '..//MyComponets/footer.jsx';

function Disclaimer() {
  return (
    <>
    <Navbar />
    <article>
    <div className="page-container">
      <h1>Disclaimer</h1>
      <p>Updated: 16 January 2026</p>

      <p>We provide helpful information, inspiring content, and reliable product suggestions. However, all content is for general purposes only, and you should use your own judgment.</p>

      <p>While we try to keep everything accurate, we cannot guarantee complete correctness. Products, prices, or external information may change without notice. Please verify anything important before making decisions.</p>

      <p>Clicking third-party links may take you outside our platform. We are not responsible for their content, policies, or actions. Check their terms before using their services.</p>

      <p>Purchases through affiliate links may earn us a small commission. We promote only items we believe bring value, but the final choice is yours.</p>

      <p>By using our platform, you accept this disclaimer and agree to act responsibly. For questions: contact@vellorey.com</p>
    </div>
    </article>
    <Footer />
    
    </>
  );
}

export default Disclaimer;
