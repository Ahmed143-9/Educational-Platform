import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import LogoWhite from '../assets/images/Logo-White.png';
import './Navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, logout, isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const handleLogout = () => {
    logout();
    navigate('/');
    closeMobileMenu();
  };

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'scrolled' : ''}`}>
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" onClick={closeMobileMenu}>
          <img src={LogoWhite} alt="Saif Academy Logo" className="logo" />
          <span className="brand-name">Saif Academy</span>
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
                <i className="fas fa-home nav-icon"></i>
                <span>Home</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/courses" className="nav-link" onClick={closeMobileMenu}>
                <i className="fas fa-graduation-cap nav-icon"></i>
                <span>Courses</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/library" className="nav-link" onClick={closeMobileMenu}>
                <i className="fas fa-book nav-icon"></i>
                <span>Library</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/exam" className="nav-link" onClick={closeMobileMenu}>
                <i className="fas fa-file-alt nav-icon"></i>
                <span>Exam</span>
              </Link>
            </li>
            {isAuthenticated ? (
              <li className="nav-item dropdown">
                <a 
                  className="nav-link dropdown-toggle d-flex align-items-center" 
                  href="#" 
                  id="userDropdown" 
                  role="button" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false"
                >
                  <i className="fas fa-user-circle nav-icon"></i>
                  <span>{user?.name || 'User'}</span>
                </a>
                <ul className="dropdown-menu" aria-labelledby="userDropdown">
                  <li>
                    <Link to="/dashboard" className="dropdown-item" onClick={closeMobileMenu}>
                      <i className="fas fa-tachometer-alt me-2"></i>
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link to="/profile" className="dropdown-item" onClick={closeMobileMenu}>
                      <i className="fas fa-user me-2"></i>
                      My Profile
                    </Link>
                  </li>
                  <li>
                    <Link to="/my-courses" className="dropdown-item" onClick={closeMobileMenu}>
                      <i className="fas fa-book-open me-2"></i>
                      My Courses
                    </Link>
                  </li>
                  <li><hr className="dropdown-divider" /></li>
                  <li>
                    <button className="dropdown-item text-danger" onClick={handleLogout}>
                      <i className="fas fa-sign-out-alt me-2"></i>
                      Logout
                    </button>
                  </li>
                </ul>
              </li>
            ) : (
              <>
                {/* <li className="nav-item">
                  <Link to="/login" className="nav-link" onClick={closeMobileMenu}>
                    <i className="fas fa-sign-in-alt nav-icon"></i>
                    <span>Login</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/register" className="nav-link" onClick={closeMobileMenu}>
                    <i className="fas fa-user-plus nav-icon"></i>
                    <span>Register</span>
                  </Link>
                </li> */}
              </>
            )}
            <li className="nav-item">
              <Link to="/scholarship" className="btn btn-primary ms-2" onClick={closeMobileMenu}>
                <i className="fas fa-graduation-cap me-2"></i>
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