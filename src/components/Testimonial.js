import React from 'react';

const Testimonial = ({ name, review, imageUrl}) => {
  return (
    <div className="testimonial-item">
      <img src={imageUrl} alt={`Photo of ${name}`} />
      <h4>{name}</h4>
      <p>{review}</p>
    </div>
  );
}

export default Testimonial;
