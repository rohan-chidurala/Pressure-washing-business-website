import React from 'react';
import '../styles/Footer.css'; // Make sure this import path is correct

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-contact">
          <p><i className="fas fa-phone"></i> +1 949-435-9928</p>
          <p><i className="fas fa-envelope"></i> jspristinepressureclean@gmail.com</p>
        </div>
        <div className="footer-social">
          <a href="https://www.facebook.com" className="social-link"><i className="fab fa-facebook-f"></i></a>
          <a href="https://www.instagram.com" className="social-link"><i className="fab fa-instagram"></i></a>
        </div>
        
        <div className="footer-action">
          <button className="action-button">Book Your Cleaning</button>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2023 J's Pristine Pressure Cleaning. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a> | 
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
