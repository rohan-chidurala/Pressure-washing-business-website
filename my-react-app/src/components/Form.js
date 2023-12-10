import React from 'react';
import '../styles/Form.css'; // Import your CSS file

const Form = () => {
  return (
    <div className="quote-form">
        <h2>Get Your Free Quote</h2>
        <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Address" />
            <textarea placeholder="Additional Information"></textarea>
            <button type="submit">Submit</button>
        </form>
    </div>
  );
};

export default Form;
