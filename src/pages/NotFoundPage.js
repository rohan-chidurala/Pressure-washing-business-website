// NotFoundPage.js
import React from 'react';
import '../styles/NotFoundPage.css'; // Import the CSS file

function NotFoundPage() {
  return (
    <div className="not-found-container">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <a href="/" className="not-found-button">Go to Homepage</a>
    </div>
  );
}

export default NotFoundPage;
