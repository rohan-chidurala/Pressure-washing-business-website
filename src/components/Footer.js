import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-contact">
          <p><i className="fas fa-phone"></i> +1 949-435-9928</p>
          <p><i className="fas fa-envelope"></i> jspristinepressureclean@gmail.com</p>
        </div>
        <div className="footer-social">
          {/* Social links can go here */}
        </div>
        <div className="footer-action">
          <button className="action-button">Book Your Cleaning</button>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2023 J's Pristine Pressure Cleaning. All Rights Reserved.</p>
        <div className="footer-links">
          <Link to="/privacy-policy">Privacy Policy</Link> {/* Privacy Policy link */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
