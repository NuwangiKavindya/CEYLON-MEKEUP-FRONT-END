import React from "react";

import "./footer.css";


function Footer() {
  return (
    <footer className="bg-dark text-light py-3">
      <div className="container-footer" style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexWrap: 'wrap', padding: '20px', height: '400px' }}>
        
        {/* Left side - logo and text */}
        <div style={{ width: '33%'}}>
          <div className="d-flex align-items-center">
            <img
              src="/assets/images/logo.png"
              alt="logo"
              className="img-fluid"
              style={{ width: "40px", height: "40px", marginRight: "10px" }}
            />
            <div>
              <a className="nav-link-logo text-light" href="#" style={{ fontWeight: "bold", textDecoration: "none" }}>
                GlowMuse
              </a>
              <p className="mb-0">Your Glow Guide</p>
            </div>
          </div>
          
          <div class="social-icons" style={{ display:'flex', flexDirection: 'row', gap: '15px', marginTop: '20px' }}>
            <a href="https://facebook.com" target="_blank"><i class="fab fa-facebook-f fa-2x"></i></a>
            <a href="https://twitter.com" target="_blank"><i class="fab fa-twitter fa-2x"></i></a>
            <a href="https://instagram.com" target="_blank"><i class="fab fa-instagram fa-2x"></i></a>
            <a href="https://whatsapp.com" target="_blank"><i class="fab fa-whatsapp fa-2x"></i></a>
          </div>

        </div>

        {/* Right side - links */}
        <div className="footer-items mt-3 mt-md-0" style={{ width: '44%', display: 'flex', flexDirection: 'column', justifyContent: 'left'}}>
          <a href="#" className="text-light me-3">Privacy Policy</a>
          <a href="#" className="text-light">Terms of Service</a>
        </div>

        {/* Right side - links */}
        <div className="footer-items mt-3 mt-md-0" style={{ width: '23%', display: 'flex', flexDirection: 'column', justifyContent: 'left'}}>
          <h3>Contact Us</h3>
          {/* LOCATION   */}
          <p className="text-light"><i class="fas fa-map-marker-alt"></i>  123 Glow Street, Beauty City</p>
          {/* PHONE NUMBER */}
          <p className="text-light"><i class="fas fa-phone"></i>  +1 (555) 123-4567
          </p>
          {/* EMAIL */}
          <p className="text-light"><i class="fas fa-envelope"></i>  support@glowmuse.com</p>
        </div>

      </div>
    </footer>

  );
}

export default Footer;


