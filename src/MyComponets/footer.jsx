import "./Navbar.css";
import { Link } from "react-router-dom";

function Footer(){

    const currentYear = new Date().getFullYear();

    return(
    <footer className="footer-links">
        <div>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-and-conditions">Terms & Conditions</Link>
            <Link to="/disclaimer">Disclaimer</Link>
            <Link to="/about-us">About Us</Link>            
        </div>
        <div>
            <p className="footer-copy">© {currentYear} Vellorey. All rights reserved.</p>
        </div>
    </footer> 
    );
}
export default Footer;