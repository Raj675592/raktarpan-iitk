import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";
import logo from "../assets/images/logo.png";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Handle body scroll when menu is open/closed
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    // Cleanup function to remove class on component unmount
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]);

  // Close menu on window resize (when switching to desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  return (
    <>
      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}></div>
      
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo-container">
            <Link to="/" className="logo">
              <img src={logo} alt="Raktarpan IIT Kanpur Logo" className="logo-img" />
              RAKTARPAN IIT KANPUR
            </Link>
          </div>

          {/* Hamburger Menu Button */}
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li>
              <Link to="/" onClick={closeMenu}>Home</Link>
            </li>
             <li>
              <Link to="/gallery" onClick={closeMenu}>
                Gallery

              </Link>
            </li>
            <li>
              <Link to="/about" onClick={closeMenu}>About Us</Link>
            </li>
           
            <li>
              <Link to="/camps" onClick={closeMenu}>Blood Camps</Link>
            </li>
            <li>
              <Link to ="/Facts" onClick={closeMenu}>Blood Facts</Link>
            </li>
           
          </ul>
        </div>
      </nav>

      
    </>
  );
};
export default Navbar;
