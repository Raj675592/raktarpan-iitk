// import React from "react";
import "../css/footer.css";

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Raktarpan</h3>
            <p>
              Blood donation initiative at IIT Kanpur saving lives through
              voluntary donation.
            </p>
            <div className="social-links">
              <a
                href="https://www.instagram.com/raktarpan_iitk"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div className="footer-section">
            <h3>Contact Managers</h3>
            <div className="contact-info">
              <div className="manager" >
                <p>
                  <strong>Antima Agrawal</strong>
                </p>
                <p>
                  {/* <i class="fas fa-envelope"></i> antima23@iitk.ac.in |{" "} */}
                  <i class="fas fa-phone"></i> +91 90248 92379
                </p>
              </div>
              <div className="manager">
                <p>
                  <strong>Seetaram Meena</strong>
                </p>
                <p>
                  {/* <i class="fas fa-envelope"></i> seetaram23@iitk.ac.in |{" "} */}
                  <i class="fas fa-phone"></i> +91 88907 30683
                </p>
              </div>
              <div className="manager">
                <p>
                  <strong>Anshika Makhija</strong>
                </p>
                <p>
                  {/* <i class="fas fa-envelope"></i> anshika23@iitk.ac.in |{" "} */}
                  <i class="fas fa-phone"></i> +91 98765 43212
                </p>
              </div>
            
            </div>
          </div>

       
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Raktarpan - IIT Kanpur. All rights reserved.</p>
          <p>Made with ❤️ by Rajkumar Ahirwar</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
