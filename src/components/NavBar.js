import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/logo.png'; // Adjust the path if necessary

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Function to handle navigation
  const navigateTo = (path) => {
    setIsOpen(false); // Close the navbar if it's open
    navigate(path); // Navigate to the specified path
  };

  return (
    <nav className="navbar">
      <div className="company-name" onClick={() => navigateTo('/')}>
        J's Pristine Pressure Cleaning
      </div>
      
      {/* Toggles the open class on the menu */}
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Conditionally toggle the 'open' class based on the state */}
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        {/* Navigation Links */}
        <button className="nav-button" onClick={() => navigateTo('/')}>Home</button>
        <button className="nav-button" onClick={() => navigateTo('/services')}>Services</button>
        <button className="nav-button" onClick={() => navigateTo('/contact-us')}>Contact Us</button>
      </div>
    </nav>
  );
};

export default Navbar;
