import React from 'react';
import '../styles/ServicesPage.css'; // Make sure you have the CSS file at this path
import houseWashingImg from '../assets/house washing.png';
import drivewayCleaningImg from '../assets/Driveway.png';
import windowCleaningImg from '../assets/window cleaning.png';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const servicesData = [
  {
    title: "House Washing",
    description: "Experience the transformative power of our professional house washing services. Utilizing advanced pressure washing techniques, we meticulously remove dirt, grime, and mildew, rejuvenating your home's exterior. Our eco-friendly approach ensures the safety of your landscaping and preserves the integrity of your home's surface. Elevate your home's curb appeal and protect your investment with our thorough and gentle cleaning process.",
    imageUrl: houseWashingImg,
  },
  {
    title: "Driveway & Sidewalk Cleaning",
    description: "Revitalize your property's first impression with our driveway and sidewalk cleaning services. Our team skillfully removes stubborn stains, oil spills, and weather-induced discoloration from your driveway and walkways. Using high-quality equipment and environmentally safe cleaning agents, we ensure a spotless, safe, and welcoming path to your home. Trust us to restore the beauty and functionality of your outdoor surfaces.",
    imageUrl: drivewayCleaningImg,
  },
  {
    title: "Window Cleaning",
    description: "Brighten your view with our professional window cleaning services. Our experts specialize in cleaning windows of all types, ensuring streak-free clarity and shine. From single-story homes to multi-level buildings, we handle it all with care and precision. Our use of safe, effective cleaning solutions and attention to detail not only enhances your windows' appearance",
    imageUrl: windowCleaningImg,

  }
  
  ];

const ServicesPage = () => {

  const navigate = useNavigate(); // Initialize useNavigate hook

  const navigateTo = (path) => {
    navigate(path); // Navigate to the specified path
  };


  return (
    <div className="services-page">
      <h1 className="services-header">OUR SERVICES</h1>
      <h2 className="services-subheader">Professional & Quality Exterior Cleaning</h2>
      <div className="services-list">
        {servicesData.map((service, index) => (
          <div className="service-item" key={index}>
            <img src={service.imageUrl} alt={service.title} className="service-image" />
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <button className="read-more-btn" onClick={() => navigateTo('/contact-us')}>Learn More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
