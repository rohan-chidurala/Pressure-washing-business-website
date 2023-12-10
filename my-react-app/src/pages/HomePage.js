import React from 'react';
import '../styles/Home.css'; // Import your CSS file
import backgroundImage from '../assets/pexels-photo-106399.jpeg'; // Import your background image

import Form from '../components/Form';

const HomePage = () => {
  return (
    <div className="full-screen-background" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="content">
        <div className="description">
          <h2>Highly Rated Pressure Washing Company</h2>
          <p>Our quality and service are unmatched. Find out for yourself why J's pristine Pressure Washing is LA's top residential & commercial pressure washing company.</p>
          <button className="button">LEARN MORE</button>
        </div>
        <Form></Form>
      </div>
    </div>
  );
};

export default HomePage;
