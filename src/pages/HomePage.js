import React from 'react';
import '../styles/Home.css'; // Import your CSS file
import '../styles/Testimonial.css'; // Import your CSS file
import { useNavigate } from 'react-router-dom'; // Import useNavigate

import backgroundImage from '../assets/pexels-photo-106399.jpeg'; // Import your background image

import Form from '../components/Form';
import Testimonial from '../components/Testimonial'; // Import your Testimonial component
import ServicesPage from '../pages/ServicesPage';
import WhyChooseUsPage from './WhyChooseUsPage'; // Import the new page component


import review1 from '../assets/temp.png'; // Adjust the path as necessary
import review2 from '../assets/review-2.jpg'; // Adjust the path as necessary
import review3 from '../assets/review1.png'; // Adjust the path as necessary



import houseWashingImg from '../assets/house washing.png';
import drivewayCleaningImg from '../assets/Driveway.png';
import windowCleaningImg from '../assets/window cleaning.png';





const servicesData = [
  {
    title: "House Washing",
    description: "Revamp your home's exterior with our eco-friendly house washing services, designed to remove dirt and mildew safely.",
    imageUrl: houseWashingImg,
  },
  {
    title: "Driveway & Sidewalk Cleaning",
    description: "Enhance your entryway with our driveway and sidewalk cleaning, removing stains and spills with precision.",
    imageUrl: drivewayCleaningImg,
  },
  {
    title: "Window Cleaning",
    description: "Experience crystal-clear views with our streak-free window cleaning service for all building types.",
    imageUrl: windowCleaningImg,
  }
];




const HomePage = () => {
  const shouldShowLearnMoreButton = true;

  const navigate = useNavigate(); // Initialize useNavigate hook

  const navigateTo = (path) => {
    navigate(path); // Navigate to the specified path
  };



  return (
    <div>
      <div className="full-screen-background" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="content">
          <div className="description">
            <h2>Highly Rated Pressure Washing Company</h2>
            <p>Our quality and service are unmatched. Find out for yourself why J's pristine Pressure Washing is LA's top residential & commercial pressure washing company.</p>
            <button className="button" onClick={() => navigateTo('/contact-us')} >LEARN MORE</button>
          </div>
          <Form></Form>
        </div>
      </div>
      <WhyChooseUsPage></WhyChooseUsPage>
      <div className='testimonials-container'>
        <div className="testimonials">
            <h3>What Our Customers Say</h3>
              <div className="testimonial-list">
              <Testimonial 
                name="Michael Thompson" 
                review="Outstanding service! The attention to detail on our sidewalk cleaning was top-notch. It's never looked better. Highly recommend their services." 
                imageUrl={review1} // Replace with an appropriate image
              />
              <Testimonial 
                name="David Johnson" 
                review="Really impressed with the quality of the window cleaning. They left everything spotless and streak-free. Professional and efficient team." 
                imageUrl={review2} // Replace with an appropriate image
              />

              <Testimonial 
                name="Chris Evans" 
                review="These guys are fantastic! They transformed the look of my house with their house washing service. The difference is night and day. Great job!" 
                imageUrl={review3} // Replace with an appropriate image
              />


              </div>
          </div>
        </div>
      <div>
        <ServicesPage 
          servicesData={servicesData} 
          addLearnMoreButton={shouldShowLearnMoreButton}
        />
      </div>
    </div>
  );
};

export default HomePage;
