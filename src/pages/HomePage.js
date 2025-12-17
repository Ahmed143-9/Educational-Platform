import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { courseAPI } from '../services/api';
import './HomePage.css';
import MainHero from '../assets/images/MainHero.jpg';

const HomePage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      setLoading(true);
      // For now, we'll use sample data since we don't have the backend running
      // In a real implementation, you would uncomment the line below:
      // const data = await courseAPI.getAllCourses();
      
      const sampleData = [
        {
          id: 1,
          title: "Web Development Bootcamp",
          instructor: "John Doe",
          duration: "8 weeks",
          level: "Beginner",
          price: "$99",
          rating: 4.8,
          students: "2,500",
          description: "Learn HTML, CSS, JavaScript and modern frameworks",
          category: "Development"
        },
        {
          id: 2,
          title: "Data Science Fundamentals",
          instructor: "Jane Smith",
          duration: "10 weeks",
          level: "Intermediate",
          price: "$149",
          rating: 4.9,
          students: "1,800",
          description: "Master data analysis and visualization techniques",
          category: "Data Science"
        },
        {
          id: 3,
          title: "Digital Marketing Mastery",
          instructor: "Mike Johnson",
          duration: "6 weeks",
          level: "Beginner",
          price: "$79",
          rating: 4.7,
          students: "3,200",
          description: "Learn SEO, social media marketing and analytics",
          category: "Marketing"
        },
        {
          id: 4,
          title: "Machine Learning Essentials",
          instructor: "Dr. Sarah Chen",
          duration: "12 weeks",
          level: "Advanced",
          price: "$199",
          rating: 4.9,
          students: "1,200",
          description: "Deep dive into ML algorithms and real-world applications",
          category: "AI & ML"
        }
      ];
      
      setCourses(sampleData);
    } catch (err) {
      setError('Failed to fetch courses. Please try again later.');
      console.error('Error fetching courses:', err);
      
      const sampleData = [
        {
          id: 1,
          title: "Web Development Bootcamp",
          instructor: "John Doe",
          duration: "8 weeks",
          level: "Beginner",
          price: "$99",
          rating: 4.8,
          students: "2,500",
          description: "Learn HTML, CSS, JavaScript and modern frameworks",
          category: "Development"
        },
        {
          id: 2,
          title: "Data Science Fundamentals",
          instructor: "Jane Smith",
          duration: "10 weeks",
          level: "Intermediate",
          price: "$149",
          rating: 4.9,
          students: "1,800",
          description: "Master data analysis and visualization techniques",
          category: "Data Science"
        }
      ];
      
      setCourses(sampleData);
    } finally {
      setLoading(false);
    }
  };

  const handleExploreCourses = () => {
    navigate('/courses');
  };

  const handleGetStarted = () => {
    navigate('/signup');
  };

  // Skeleton loader for courses
  const CourseSkeleton = () => (
    <div className="course-card skeleton">
      <div className="course-image skeleton-item"></div>
      <div className="course-info">
        <div className="skeleton-item" style={{ height: '24px', marginBottom: '12px' }}></div>
        <div className="skeleton-item" style={{ height: '16px', marginBottom: '8px' }}></div>
        <div className="skeleton-item" style={{ height: '16px', marginBottom: '16px', width: '80%' }}></div>
        <div className="course-meta">
          <div className="skeleton-item" style={{ height: '14px', width: '40%' }}></div>
          <div className="skeleton-item" style={{ height: '14px', width: '30%' }}></div>
        </div>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="home-page">
       <section className="hero-section">
    <div className="hero-image-wrapper">
      {/* Image will be set via CSS */}
    </div>
    <div className="hero-content">
      <h1 className="hero-title">Unlock Your Potential</h1>
      <p className="hero-subtitle">
        Discover the power of learning with our expert-led courses designed to advance your career and personal growth.
      </p>
      
      <div className="hero-buttons">
        <Link to="/scholarship" className="btn btn-primary">
          <i className="fas fa-graduation-cap"></i> Scholarship
        </Link>
        <button className="btn btn-secondary" onClick={handleExploreCourses}>
          <i className="fas fa-search"></i> Explore Courses
        </button>
        <button className="btn btn-outline" onClick={handleGetStarted}>
          <i className="fas fa-play-circle"></i> Watch Demo
        </button>
      </div>
      
      <div className="hero-features">
        <div className="feature">
          <i className="fas fa-certificate"></i>
          <span>Certified Courses</span>
        </div>
        <div className="feature">
          <i className="fas fa-chart-line"></i>
          <span>Career Growth</span>
        </div>
        <div className="feature">
          <i className="fas fa-users"></i>
          <span>Live Support</span>
        </div>
      </div>
    </div>
  </section>
        <section className="courses-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Featured Courses</h2>
              <p className="section-description">
                Our expert instructors have curated the best courses to help you achieve your goals.
              </p>
            </div>
            <div className="courses-grid">
              {[1, 2, 3, 4].map((n) => (
                <CourseSkeleton key={n} />
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (error) {
    return (
      <div className="home-page">
        <section className="hero-section" style={{ backgroundImage: `url(${MainHero})` }}>
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1 className="hero-title">Unlock Your Potential</h1>
            <p className="hero-subtitle">
              Discover the power of learning with our expert-led courses designed to advance your career and personal growth.
            </p>
            <div className="hero-buttons">
              <Link to="/scholarship" className="btn btn-primary">
                <i className="fas fa-graduation-cap"></i> Scholarship
              </Link>
              <button className="btn btn-secondary" onClick={handleExploreCourses}>
                <i className="fas fa-search"></i> Explore Courses
              </button>
              {/* <button className="btn btn-accent" onClick={handleGetStarted}>
                <i className="fas fa-rocket"></i> Get Started
              </button> */}
            </div>
          </div>
        </section>
        
        <section className="courses-section">
          <div className="container">
            <div className="error-state">
              <i className="fas fa-exclamation-triangle error-icon"></i>
              <h2 className="section-title">Oops! Something went wrong</h2>
              <p className="error-message">{error}</p>
              <button className="btn btn-primary" onClick={fetchCourses}>
                <i className="fas fa-redo"></i> Try Again
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section" style={{ backgroundImage: `url(${MainHero})` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          {/* <div className="hero-badge">Top Rated Platform</div> */}
          <h1 className="hero-title">Unlock Your Potential</h1>
          <p className="hero-subtitle">
            Discover the power of learning with our expert-led courses designed to advance your career and personal growth.
          </p>
          {/* <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">50K+</span>
              <span className="stat-label">Students</span>
            </div>
            <div className="stat">
              <span className="stat-number">200+</span>
              <span className="stat-label">Courses</span>
            </div>
            <div className="stat">
              <span className="stat-number">4.9</span>
              <span className="stat-label">Avg Rating</span>
            </div>
          </div> */}
          <div className="hero-buttons">
            <Link to="/scholarship" className="btn btn-primary">
              <i className="fas fa-graduation-cap"></i> Scholarship
            </Link>
            <button className="btn btn-secondary" onClick={handleExploreCourses}>
              <i className="fas fa-search"></i> Explore Courses
            </button>
            {/* <button className="btn btn-accent" onClick={handleGetStarted}>
              <i className="fas fa-rocket"></i> Get Started
            </button> */}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="courses-section">
  <div className="container">
    <div className="section-header">
      <div className="header-content">
        <span className="section-subtitle">Learn & Grow</span>
        <h2 className="section-title">Featured Courses</h2>
        <p className="section-description">
          Our expert instructors have curated the best courses to help you achieve your goals.
        </p>
      </div>
      <Link to="/courses" className="section-link">
        View All Courses <i className="fas fa-arrow-right"></i>
      </Link>
    </div>
    
    <div className="courses-grid">
      {courses.map(course => (
        <div key={course.id} className="course-card">
          <div className="course-image">
            <div className="image-placeholder">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <div className="course-overlay">
              <span className="course-category">{course.category}</span>
              <div className="course-rating">
                <i className="fas fa-star"></i>
                <span>{course.rating}</span>
              </div>
            </div>
          </div>
          <div className="course-content">
            <div className="course-header">
              <h3 className="course-title">{course.title}</h3>
              <span className="course-price">{course.price}</span>
            </div>
            <p className="course-description">{course.description}</p>
            
            <div className="course-details">
              <div className="detail-item">
                <i className="fas fa-user"></i>
                <span>{course.instructor}</span>
              </div>
              <div className="detail-item">
                <i className="fas fa-clock"></i>
                <span>{course.duration}</span>
              </div>
              <div className="detail-item">
                <i className="fas fa-users"></i>
                <span>{course.students}</span>
              </div>
            </div>
            
            <div className="course-footer">
              <span className={`course-level level-${course.level.toLowerCase()}`}>
                {course.level}
              </span>
              <button className="course-enroll-btn">
                <i className="fas fa-shopping-cart"></i> Enroll Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="cta-section">
  <div className="container">
    <div className="cta-card">
      <div className="cta-content">
        <span className="cta-badge">Limited Time Offer</span>
        <h2 className="cta-title">Ready to Transform Your Career?</h2>
        <p className="cta-description">
          Join thousands of successful learners who have transformed their careers with our courses.
          Start your journey today with our free trial.
        </p>
        
        <div className="cta-features">
          <div className="feature">
            <i className="fas fa-check-circle"></i>
            <span>7-day free trial</span>
          </div>
          <div className="feature">
            <i className="fas fa-check-circle"></i>
            <span>Cancel anytime</span>
          </div>
          <div className="feature">
            <i className="fas fa-check-circle"></i>
            <span>Certificate included</span>
          </div>
        </div>
        
        <div className="cta-buttons">
          <Link to="/signup" className="btn btn-primary btn-lg">
            <i className="fas fa-rocket"></i> Start Learning Free
          </Link>
          <Link to="/demo" className="btn btn-outline-white btn-lg">
            <i className="fas fa-play-circle"></i> Watch Demo
          </Link>
        </div>
        
        <p className="cta-note">
          <i className="fas fa-shield-alt"></i> Secure sign-up · No credit card required
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Library Preview Section */}
      <section className="library-section">
  <div className="container">
    <div className="section-header">
      <span className="section-subtitle">Knowledge Hub</span>
      <h2 className="section-title">Learning Resources</h2>
      <p className="section-description">
        Access our extensive library of educational materials, ebooks, and research papers.
      </p>
    </div>
    
    <div className="resources-grid">
      <div className="resource-card">
        <div className="resource-icon">
          <i className="fas fa-book-open"></i>
        </div>
        <h3 className="resource-title">Ebooks & Guides</h3>
        <div className="resource-count">1,000+</div>
        <p className="resource-description">
          Comprehensive guides and reference materials for all skill levels
        </p>
        <Link to="/library/ebooks" className="resource-link">
          Explore Ebooks <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
      
      <div className="resource-card">
        <div className="resource-icon">
          <i className="fas fa-file-pdf"></i>
        </div>
        <h3 className="resource-title">Research Papers</h3>
        <div className="resource-count">500+</div>
        <p className="resource-description">
          Academic papers and industry research for deep learning
        </p>
        <Link to="/library/research" className="resource-link">
          View Research <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
      
      <div className="resource-card">
        <div className="resource-icon">
          <i className="fas fa-video"></i>
        </div>
        <h3 className="resource-title">Video Tutorials</h3>
        <div className="resource-count">200+</div>
        <p className="resource-description">
          Step-by-step video guides and tutorial sessions
        </p>
        <Link to="/library/videos" className="resource-link">
          Watch Videos <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
      
      <div className="resource-card">
        <div className="resource-icon">
          <i className="fas fa-chart-bar"></i>
        </div>
        <h3 className="resource-title">Case Studies</h3>
        <div className="resource-count">50+</div>
        <p className="resource-description">
          Real-world applications and success stories
        </p>
        <Link to="/library/case-studies" className="resource-link">
          Read Cases <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
    </div>
    
    <div className="section-footer">
      <Link to="/library" className="btn btn-secondary">
        <i className="fas fa-search"></i> Browse Full Library
      </Link>
    </div>
  </div>
</section>

      {/* Exam Preview Section */}
    

      {/* Newsletter Section */}
      <section className="newsletter-section">
  <div className="container">
    <div className="newsletter-card">
      <div className="newsletter-content">
        <div className="newsletter-header">
          <h2 className="newsletter-title">Stay Updated</h2>
          <p className="newsletter-subtitle">
            Get the latest courses, resources, and learning tips delivered to your inbox.
          </p>
        </div>
        
        <form className="newsletter-form">
          <div className="form-container">
            <div className="input-group">
              <div className="input-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="form-input"
                required
              />
              <button type="submit" className="btn btn-primary">
                <i className="fas fa-paper-plane"></i> Subscribe
              </button>
            </div>
            
            <div className="form-features">
              <div className="feature">
                <i className="fas fa-check"></i>
                <span>Weekly updates</span>
              </div>
              <div className="feature">
                <i className="fas fa-check"></i>
                <span>Exclusive content</span>
              </div>
              <div className="feature">
                <i className="fas fa-check"></i>
                <span>No spam ever</span>
              </div>
            </div>
          </div>
          
          <p className="form-note">
            <i className="fas fa-lock"></i> Your information is secure. By subscribing, 
            you agree to our <Link to="/privacy">Privacy Policy</Link> and consent to receive updates.
          </p>
        </form>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default HomePage;