import React from 'react';
import '../styles/ServicesPage.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import WhyChooseUsPage from './WhyChooseUsPage'; // Import the new page component

const ServicesPage = ({ servicesData, addLearnMoreButton }) => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
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
            {addLearnMoreButton ? (
              <button className="read-more-btn" onClick={() => navigateTo('/services')}>Learn More</button>
            ) : (
              <button className="read-more-btn" onClick={() => navigateTo('/contact-us')}>Contact Us for a Free Quote</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
