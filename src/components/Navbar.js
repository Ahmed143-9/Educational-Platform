import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const { user, logout, isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const handleLogout = () => {
    logout();
    navigate('/');
    closeMobileMenu();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" onClick={closeMobileMenu}>
          <img src="/Logo-White.png" alt="CourseApp Logo" className="logo" />
        </Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={handleClick}
          aria-controls="navbarNav" 
          aria-expanded={click ? "true" : "false"} 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${click ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/courses" className="nav-link" onClick={closeMobileMenu}>
                Courses
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/library" className="nav-link" onClick={closeMobileMenu}>
                Library
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/exam" className="nav-link" onClick={closeMobileMenu}>
                Exam
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a 
                className="nav-link dropdown-toggle" 
                href="#" 
                id="userDropdown" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                {isAuthenticated ? (user?.name || 'User') : 'Account'}
              </a>
              <ul className="dropdown-menu" aria-labelledby="userDropdown">
                {!isAuthenticated ? (
                  <>
                    <li>
                      <Link to="/login" className="dropdown-item" onClick={closeMobileMenu}>
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link to="/register" className="dropdown-item" onClick={closeMobileMenu}>
                        Register
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link to="/dashboard" className="dropdown-item" onClick={closeMobileMenu}>
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link to="/profile" className="dropdown-item" onClick={closeMobileMenu}>
                        My Profile
                      </Link>
                    </li>
                    <li>
                      <Link to="/my-courses" className="dropdown-item" onClick={closeMobileMenu}>
                        My Courses
                      </Link>
                    </li>
                    <li><hr className="dropdown-divider" /></li>
                    <li>
                      <button className="dropdown-item text-danger" onClick={handleLogout}>
                        Logout
                      </button>
                    </li>
                  </>
                )}
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/scholarship" className="btn btn-primary ms-2" onClick={closeMobileMenu}>
                Scholarship
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;