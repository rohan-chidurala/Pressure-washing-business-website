// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import NotFoundPage from './pages/NotFoundPage'; // Import the NotFoundPage component
import DrivewayCleaningPage from './pages/DrivewayCleaningPage'; // Import the new page component
import ContactUsPage from './pages/ContactUsPage';

import houseWashingImg from './assets/house washing.png';
import drivewayCleaningImg from './assets/Driveway.png';
import windowCleaningImg from './assets/window cleaning.png';


const servicesData = [
  {
    title: "House Washing",
    description: "Rediscover the beauty of your home with our professional house washing services. Employing advanced pressure washing techniques, we meticulously eliminate all traces of dirt, grime, and algae. Our eco-friendly and gentle methods protect your landscaping while refreshing your home's facade, thereby enhancing its curb appeal and safeguarding your investment.",
    imageUrl: houseWashingImg,
  },
  {
    title: "Driveway & Sidewalk Cleaning",
    description: "Make a lasting first impression with our specialized driveway and sidewalk cleaning services. Our experienced team eradicates persistent stains, oil spills, and discoloration, transforming your driveway and walkways. We use superior equipment and eco-safe cleaners to deliver a pristine, hazard-free entrance to your residence.",
    imageUrl: drivewayCleaningImg,
  },
  {
    title: "Window Cleaning",
    description: "Illuminate your spaces with our expert window cleaning services. Our skilled professionals ensure streak-free transparency for every window type. Tackling all heights, from bungalows to high rises, we're dedicated to delivering impeccable clarity using safe, streak-free cleaning agents for a spotless and radiant finish.",
    imageUrl: windowCleaningImg,
  }
];


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage 
          servicesData = {servicesData}
          addLearnMoreButton={false}
          />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/driveway-cleaning" element={<DrivewayCleaningPage />} /> {/* Add the new route for driveway cleaning */}
          <Route path="/contact-us" element={<ContactUsPage />} /> {/* Add the new route for driveway cleaning */}

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
