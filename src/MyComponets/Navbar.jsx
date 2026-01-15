import { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
 

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
   <> 
    <header>
        <div className="logo">
            <img src="/images/logo/vellorey.jpg" 
                 alt="Vellorey Logo" className="logo-img" />
            Vellorey
        </div>     
      <nav className="navbar">
        <div className="navbar-container">

          {/* Hamburger / cross button */}
          <button
            className={`navbar-toggle ${isOpen ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>

          {/* Navbar menu */}
          <ul className={`navbar-menu ${isOpen ? "active" : ""}`}>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
          
    </>
  );
}

export default Nav;
