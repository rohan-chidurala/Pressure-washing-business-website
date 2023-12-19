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

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
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
