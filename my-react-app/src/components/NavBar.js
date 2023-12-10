import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles/Navbar.css'; // Import CSS for styling

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
      <div className="company-name">J's Pristine Pressure Washing</div>
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={`navbar-links ${isOpen ? "open" : ""}`}>
        {/* Navigation Links */}
        <button className="nav-button" onClick={() => navigateTo('/')}>Home</button>
        <button className="nav-button" onClick={() => navigateTo('/services')}>Services</button>
      </div>
    </nav>
  );
};

export default Navbar;
