import React from 'react';

const Testimonial = ({ name, review, imageUrl}) => {
  return (
    <div className="testimonial-item">
      <img loading='lazy' title="Pressure Cleaning Customer" src={imageUrl} alt="" />
      <h4>{name}</h4>
      <p>{review}</p>
    </div>
  );
}

export default Testimonial;
