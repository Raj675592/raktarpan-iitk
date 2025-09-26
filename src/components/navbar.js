import React, { useState, useEffect } from "react";
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
            <a href="/" className="logo">
              <img src={logo} alt="Raktarpan IIT Kanpur Logo" className="logo-img" />
              RAKTARPAN IIT KANPUR
            </a>
          </div>

          {/* Hamburger Menu Button */}
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li>
              <a href="/" onClick={closeMenu}>Home</a>
            </li>
             <li>
              <a href="#gallery" onClick={closeMenu}>
                Gallery

              </a>
            </li>
            <li>
              <a href="#about" onClick={closeMenu}>About Us</a>
            </li>
           
            <li>
              <a href="#camps" onClick={closeMenu}>Blood Camps</a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu}>Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <span>RAKTARPAN</span>
            </div>
            <h1>Be Someone's Lifeline</h1>
            <h2>Save Lives Through Blood Donation at IIT Kanpur</h2>
            <p>
              Your single blood donation can save up to three precious lives. Join our mission 
              to bridge the gap between donors and those in critical need. Find nearby blood camps, 
              connect with verified donors, or request emergency blood assistance.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">1000+</span>
                <span className="stat-label">Lives Saved</span>
              </div>
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Active Donors</span>
              </div>
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Blood Camps</span>
              </div>
            </div>
            <div className="hero-actions">
              <a href="#camps" className="btn btn-primary">Find Blood Camps</a>
              <a href="#about" className="btn btn-secondary" style={{color:"white"}}>Learn More</a>
            </div>
            <div className="hero-emergency">
              <p>📞 <strong>Emergency Blood Request:</strong> +91 98765 BLOOD (24/7)</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Navbar;
