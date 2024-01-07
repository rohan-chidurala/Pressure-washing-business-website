import Form from '../components/Form';
import '../styles/ContactUsPage.css'

import backgroundImage from '../assets/pexels-photo-106399.jpeg'; // Import your background image

const ContactUsPage = () => {


    return (
        <div className='ContactUs-container' style={{ backgroundImage: `url(${backgroundImage})` }}>
            <Form formName = 'Free Quote'></Form>
        </div>
    );
};

export default ContactUsPage;
