import React from 'react';
import '../styles/Form.css'; // Import your CSS file

const Form = ({ formName }) => {
  return (
    <div className="quote-form">
        <h2>{formName}</h2>
        <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Address" />
            <input type="tel" placeholder="Phone Number" /> {/* Phone Number field */}
            <select name="jobType" defaultValue="">
                <option value="" disabled>Select Job Type</option>
                <option value="houseWashing">House Washing</option>
                <option value="drivewayCleaning">Driveway Cleaning</option>
                <option value="windowCleaning">Window Cleaning</option>
            </select>
            <textarea placeholder="Additional Information"></textarea>
            <button type="submit">Submit</button>
        </form>
    </div>
  );
};

export default Form;
