import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <div className="container">
        <div className="not-found-content">
          <div className="not-found-icon">😢</div>
          <h1>404 - Page Not Found</h1>
          <p>Oops! The page you're looking for doesn't exist.</p>
          <Link to="/" className="btn primary-btn">
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;