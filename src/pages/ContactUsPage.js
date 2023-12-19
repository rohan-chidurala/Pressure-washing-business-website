import React, { useState } from 'react';
import axios from 'axios';
import Form from '../components/Form';
import '../styles/ContactUsPage.css'

import backgroundImage from '../assets/pexels-photo-106399.jpeg'; // Import your background image

const ContactUsPage = () => {


    return (
        <div className='ContactUs-container' style={{ backgroundImage: `url(${backgroundImage})` }}>
            <Form formName = 'Contact Us'></Form>
        </div>
    );
};

export default ContactUsPage;
