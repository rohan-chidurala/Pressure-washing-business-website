import React, { useState } from 'react';
import image1 from '../assets/images.jpg'; // Adjust the path as necessary
import image2 from '../assets/DALL·E 2023-12-04 17.02.13 - A high-quality image representing a pressure washing business. The scene depicts a professional pressure washing service in action, cleaning a residen.png'; // Adjust the path as necessary

const slidesData = [
  {
    title: "Service 1",
    description: "Description of Service 1",
    imageUrl: image1 // Reference to imported image
  },
  {
    title: "Service 2",
    description: "Description of Service 2",
    imageUrl: image2 // Reference to imported image
  },
];

const ServicesPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slidesData.length - 1 ? 0 : prevSlide + 1
    );
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slidesData.length - 1 : prevSlide - 1
    );
  };

  return (
    <div>
      <h1>Our Services</h1>
      <div>
        {/* The Slide Content */}
        <h2>{slidesData[currentSlide].title}</h2>
        <p>{slidesData[currentSlide].description}</p>
        {/* Image will be displayed here */}
        <img src={slidesData[currentSlide].imageUrl} alt={slidesData[currentSlide].title} />

        {/* Navigation Buttons */}
        <button onClick={goToPreviousSlide}>Previous</button>
        <button onClick={goToNextSlide}>Next</button>
      </div>
    </div>
  );
};

export default ServicesPage;
