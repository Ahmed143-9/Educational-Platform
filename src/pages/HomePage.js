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
              <button className="btn btn-accent" onClick={handleGetStarted}>
                <i className="fas fa-rocket"></i> Get Started
              </button>
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
        <section className="hero-section">
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
              <button className="btn btn-accent" onClick={handleGetStarted}>
                <i className="fas fa-rocket"></i> Get Started
              </button>
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
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-badge">Top Rated Platform</div>
          <h1 className="hero-title">Unlock Your Potential</h1>
          <p className="hero-subtitle">
            Discover the power of learning with our expert-led courses designed to advance your career and personal growth.
          </p>
          <div className="hero-stats">
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
          </div>
          <div className="hero-buttons">
            <Link to="/scholarship" className="btn btn-primary">
              <i className="fas fa-graduation-cap"></i> Scholarship
            </Link>
            <button className="btn btn-secondary" onClick={handleExploreCourses}>
              <i className="fas fa-search"></i> Explore Courses
            </button>
            <button className="btn btn-accent" onClick={handleGetStarted}>
              <i className="fas fa-rocket"></i> Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="courses-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Courses</h2>
            <p className="section-description">
              Our expert instructors have curated the best courses to help you achieve your goals.
            </p>
            <Link to="/courses" className="btn-text">
              View All Courses <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
          
          <div className="courses-grid">
            {courses.map(course => (
              <div key={course.id} className="course-card">
                <div className="course-badge">{course.category}</div>
                <div className="course-image">
                  <div className="placeholder-image">
                    <i className="fas fa-graduation-cap"></i>
                  </div>
                  <div className="course-rating">
                    <i className="fas fa-star"></i> {course.rating}
                  </div>
                </div>
                <div className="course-info">
                  <div className="course-header">
                    <h3 className="course-title">{course.title}</h3>
                    <span className="course-price">{course.price}</span>
                  </div>
                  <p className="course-description">{course.description}</p>
                  <div className="course-meta">
                    <div className="meta-item">
                      <i className="fas fa-user"></i>
                      <span>{course.instructor}</span>
                    </div>
                    <div className="meta-item">
                      <i className="fas fa-clock"></i>
                      <span>{course.duration}</span>
                    </div>
                    <div className="meta-item">
                      <i className="fas fa-users"></i>
                      <span>{course.students}</span>
                    </div>
                  </div>
                  <div className="course-level">
                    <span className={`level-badge ${course.level.toLowerCase()}`}>
                      {course.level}
                    </span>
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
          <div className="cta-content">
            <h2 className="cta-title">Ready to Transform Your Career?</h2>
            <p className="cta-description">
              Join thousands of successful learners who have transformed their careers with our courses.
            </p>
            <div className="cta-buttons">
              <Link to="/signup" className="btn btn-primary btn-lg">
                <i className="fas fa-user-plus"></i> Start Learning Free
              </Link>
              <Link to="/demo" className="btn btn-outline btn-lg">
                <i className="fas fa-play-circle"></i> Watch Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Library Preview Section */}
      <section className="library-preview">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Learning Resources</h2>
            <p className="section-description">
              Access our extensive library of educational materials, ebooks, and research papers.
            </p>
          </div>
          
          <div className="library-stats">
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-book"></i>
              </div>
              <h3 className="stat-number">1000+</h3>
              <p className="stat-label">Ebooks & Guides</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-file-alt"></i>
              </div>
              <h3 className="stat-number">500+</h3>
              <p className="stat-label">Research Papers</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-video"></i>
              </div>
              <h3 className="stat-number">200+</h3>
              <p className="stat-label">Video Tutorials</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3 className="stat-number">50+</h3>
              <p className="stat-label">Case Studies</p>
            </div>
          </div>
          
          <div className="text-center">
            <Link to="/library" className="btn btn-secondary">
              <i className="fas fa-archive"></i> Explore Library
            </Link>
          </div>
        </div>
      </section>

      {/* Exam Preview Section */}
      <section className="exam-preview">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Practice Exams & Assessments</h2>
            <p className="section-description">
              Test your knowledge with our comprehensive exam preparation tools.
            </p>
          </div>
          
          <div className="exam-types">
            <div className="exam-card">
              <div className="exam-icon">
                <i className="fas fa-certificate"></i>
              </div>
              <h3 className="exam-title">Certification Prep</h3>
              <p className="exam-description">
                Prepare for industry certifications with our comprehensive practice tests
              </p>
              <ul className="exam-features">
                <li><i className="fas fa-check"></i> Real exam simulations</li>
                <li><i className="fas fa-check"></i> Detailed explanations</li>
                <li><i className="fas fa-check"></i> Performance analytics</li>
              </ul>
            </div>
            
            <div className="exam-card featured">
              <div className="exam-icon">
                <i className="fas fa-clock"></i>
              </div>
              <h3 className="exam-title">Mock Exams</h3>
              <p className="exam-description">
                Simulate real exam conditions with timed assessments and adaptive questions
              </p>
              <ul className="exam-features">
                <li><i className="fas fa-check"></i> Timed assessments</li>
                <li><i className="fas fa-check"></i> Adaptive difficulty</li>
                <li><i className="fas fa-check"></i> Instant scoring</li>
              </ul>
            </div>
            
            <div className="exam-card">
              <div className="exam-icon">
                <i className="fas fa-chart-bar"></i>
              </div>
              <h3 className="exam-title">Progress Tracking</h3>
              <p className="exam-description">
                Monitor your improvement with detailed analytics and personalized recommendations
              </p>
              <ul className="exam-features">
                <li><i className="fas fa-check"></i> Performance tracking</li>
                <li><i className="fas fa-check"></i> Weakness analysis</li>
                <li><i className="fas fa-check"></i> Learning path suggestions</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center">
            <Link to="/exam" className="btn btn-primary">
              <i className="fas fa-play-circle"></i> Start Practicing
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <h2 className="newsletter-title">Stay Updated</h2>
            <p className="newsletter-description">
              Subscribe to our newsletter for the latest courses, resources, and learning tips.
            </p>
            <form className="newsletter-form">
              <div className="form-group">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="form-input"
                  required
                />
                <button type="submit" className="btn btn-primary">
                  <i className="fas fa-paper-plane"></i> Subscribe
                </button>
              </div>
              <p className="form-note">
                By subscribing, you agree to our Privacy Policy and consent to receive updates.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;