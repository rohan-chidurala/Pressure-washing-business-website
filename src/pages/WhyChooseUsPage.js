// WhyChooseUsPage.js
import React from 'react';
import '../styles/WhyChooseUsPage.css';
import imageUrl from '../assets/why us.jpg';

const WhyChooseUsPage = () => {
  const CheckmarkIcon = () => (
    <svg viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="checkmark-icon">
      <path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z"></path>
    </svg>
  );

  return (
    <div className="why-choose-us-container">
      <div className="testimonial-container">
        <div className='testimonial-image'>
          <img title="Our Pressure Cleaning Services" src={imageUrl} alt="" />
        </div>
        <div className="testimonial-section">
          <blockquote >
            "After experiencing frustration with responsiveness from other companies, I'm so glad I found J's Pristine Pressure Washing. From my first call, I was happy with the service provided."
          </blockquote>
          <cite>Debbie Lyon - Orange, CA</cite>
        </div>

      </div>
      <div className="why-choose-us-content">
        <h1>Why Choose J's Pristine Pressure Washing?</h1>
        <p>
    We are a fully-insured, professional pressure washing company based in the <span className="la">LA area</span>, using the latest power washing equipment on the market. We have completed hundreds of jobs, ensuring our customer service is unmatched. Call today to schedule your next power washing appointment!</p>
          <ul className="benefits-list">
          <li><CheckmarkIcon /> Highly Rated Cleaning</li>
          <li><CheckmarkIcon /> Fully Licensed</li>
          <li><CheckmarkIcon /> FREE Estimates</li>
          <li><CheckmarkIcon /> 100% Satisfaction</li>
        </ul>
      </div>

    </div>
  );
};

export default WhyChooseUsPage;
