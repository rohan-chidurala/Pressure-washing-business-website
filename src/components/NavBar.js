import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles/Navbar.css'; // Import CSS for styling
import logo from '../assets/logo.png'; // Adjust the path if necessary

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to handle menu toggle
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Function to handle navigation
  const navigateTo = (path) => {
    setIsOpen(false); // Close the navbar if it's open
    navigate(path); // Navigate to the specified path
  };

  return (
    <nav className="navbar">
      <a className="company-name" onClick={() => navigateTo('/')}>J's Pristine Pressure Cleaning</a>
      
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={`navbar-links ${isOpen ? "open" : ""}`}>
        {/* Navigation Links */}
        <button className="nav-button" onClick={() => navigateTo('/')}>Home</button>
        <button className="nav-button" onClick={() => navigateTo('/services')}>Services</button>
        <button className="nav-button" onClick={() => navigateTo('/Contact-Us')}>Contact Us</button>
      </div>
    </nav>
  );
};

export default Navbar;
