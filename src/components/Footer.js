import React from 'react';
import './Footer.css';
import { authAPI, courseAPI, libraryAPI } from '../services/api';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>CourseApp</h3>
            <p>
              Empowering learners worldwide with quality education and practical skills for the future.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">Facebook</a>
              <a href="#" className="social-link">Twitter</a>
              <a href="#" className="social-link">LinkedIn</a>
              <a href="#" className="social-link">Instagram</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/courses">Courses</a></li>
              <li><a href="/library">Library</a></li>
              <li><a href="/exam">Exam Preparation</a></li>
              <li><a href="#">Scholarship</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Support Center</a></li>
              <li><a href="#">Community</a></li>
              <li><a href="#">Events</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Us</h4>
            <address>
              <p>Email: info@courseapp.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Address: 123 Education St, Learning City</p>
            </address>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} CourseApp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;