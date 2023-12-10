// PrivacyPolicy.js
import React from 'react';
import '../styles/PrivacyPolicy.css'; // Ensure you have the corresponding CSS file for styling

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <h1>Privacy Policy</h1>
      <p>Last updated: [Today's Date]</p>

      <h2>Introduction</h2>
      <p>Your Company Name ("we", "our", or "us") operates the Your Website URL (the "Service").</p>
      <p>This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.</p>

      <h2>Information Collection and Use</h2>
      <p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>

      <h3>Types of Data Collected</h3>
      <h4>Personal Data</h4>
      <p>While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:</p>
      <ul>
        <li>Email address</li>
        <li>First name and last name</li>
        <li>Phone number</li>
        <li>Address, State, Province, ZIP/Postal code, City</li>
        <li>Cookies and Usage Data</li>
      </ul>

      <h4>Usage Data</h4>
      <p>We may also collect information on how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, and other diagnostic data.</p>

      <h4>Tracking & Cookies Data</h4>
      <p>We use cookies and similar tracking technologies to track the activity on our Service and we hold certain information.</p>
      <p>Cookies are files with a small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Other tracking technologies are also used such as beacons, tags, and scripts to collect and track information and to improve and analyze our Service.</p>
      <p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</p>
      
      // ... Continue with other sections like Service Providers, Security, Links to Other Sites, etc.

      <h2>Children's Privacy</h2>
      <p>Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13 years of age. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.</p>

      <h2>Changes to This Privacy Policy</h2>
      <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
      <p>We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy.</p>
      <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>

      <h2>Contact Us</h2>
      <p>If you have any questions about this Privacy Policy, please contact us:</p>
      <ul>
        <li>By email: [Your Contact Email]</li>
        <li>By visiting this page on our website: [Your Contact Page URL]</li>
        <li>By phone number: [Your Contact Number]</li>
        <li>By mail: [Your Business Address]</li>
      </ul>
    </div>
  );
};

export default PrivacyPolicy;
