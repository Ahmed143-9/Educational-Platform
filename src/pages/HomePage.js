import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { courseAPI } from '../services/api';
import './HomePage.css';

const HomePage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      setLoading(true);
      // For now, we'll use sample data since we don't have the backend running
      // In a real implementation, you would uncomment the line below:
      // const data = await courseAPI.getAllCourses();
      
      // Sample data for demonstration
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
          description: "Learn HTML, CSS, JavaScript and modern frameworks"
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
          description: "Master data analysis and visualization techniques"
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
          description: "Learn SEO, social media marketing and analytics"
        }
      ];
      
      setCourses(sampleData);
    } catch (err) {
      setError('Failed to fetch courses');
      console.error('Error fetching courses:', err);
      
      // Sample data as fallback
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
          description: "Learn HTML, CSS, JavaScript and modern frameworks"
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
          description: "Master data analysis and visualization techniques"
        }
      ];
      
      setCourses(sampleData);
    } finally {
      setLoading(false);
    }
  };

  const handleExploreCourses = () => {
    // Redirect to courses page
    window.location.href = '/courses';
  };

  const handleScholarship = () => {
    // Redirect to login for scholarship application
    window.location.href = '/login';
  };

  if (loading) {
    return (
      <div className="home-page">
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">Unlock Your Potential</h1>
            <p className="hero-subtitle">
              Discover the power of learning with our expert-led courses designed to advance your career and personal growth.
            </p>
            <div className="hero-buttons">
              <button className="btn primary-btn" onClick={handleScholarship}>Scholarship</button>
              <button className="btn secondary-btn" onClick={handleExploreCourses}>Explore Courses</button>
            </div>
          </div>
        </section>
        <section className="courses-section">
          <div className="container">
            <h2 className="section-title">Loading Featured Courses...</h2>
          </div>
        </section>
      </div>
    );
  }

  if (error) {
    return (
      <div className="home-page">
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">Unlock Your Potential</h1>
            <p className="hero-subtitle">
              Discover the power of learning with our expert-led courses designed to advance your career and personal growth.
            </p>
            <div className="hero-buttons">
              <button className="btn primary-btn" onClick={handleScholarship}>Scholarship</button>
              <button className="btn secondary-btn" onClick={handleExploreCourses}>Explore Courses</button>
            </div>
          </div>
        </section>
        <section className="courses-section">
          <div className="container">
            <h2 className="section-title">Error Loading Courses</h2>
            <p>{error}</p>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Unlock Your Potential</h1>
          <p className="hero-subtitle">
            Discover the power of learning with our expert-led courses designed to advance your career and personal growth.
          </p>
          <div className="hero-buttons">
            <button className="btn primary-btn" onClick={handleScholarship}>Scholarship</button>
            <button className="btn secondary-btn" onClick={handleExploreCourses}>Explore Courses</button>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="courses-section">
        <div className="container">
          <h2 className="section-title">Featured Courses</h2>
          <p className="section-description">
            Our expert instructors have curated the best courses to help you achieve your goals.
          </p>
          <div className="courses-grid">
            {courses.slice(0, 3).map(course => (
              <div key={course.id} className="course-card">
                <div className="course-image">
                  <div className="placeholder-image">Course Image</div>
                </div>
                <div className="course-info">
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>
                  <div className="course-meta">
                    <span className="instructor">{course.instructor}</span>
                    <span className="duration">{course.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Library Preview Section */}
      <section className="library-preview">
        <div className="container">
          <h2 className="section-title">Learning Resources</h2>
          <p className="section-description">
            Access our extensive library of educational materials, ebooks, and research papers.
          </p>
          <div className="library-stats">
            <div className="stat-item">
              <h3>1000+</h3>
              <p>Ebooks & Guides</p>
            </div>
            <div className="stat-item">
              <h3>500+</h3>
              <p>Research Papers</p>
            </div>
            <div className="stat-item">
              <h3>200+</h3>
              <p>Video Tutorials</p>
            </div>
          </div>
          <Link to="/library" className="btn secondary-btn">Explore Library</Link>
        </div>
      </section>

      {/* Exam Preview Section */}
      <section className="exam-preview">
        <div className="container">
          <h2 className="section-title">Practice Exams</h2>
          <p className="section-description">
            Test your knowledge with our comprehensive exam preparation tools.
          </p>
          <div className="exam-types">
            <div className="exam-card">
              <h3>Certification Prep</h3>
              <p>Prepare for industry certifications with our practice tests</p>
            </div>
            <div className="exam-card">
              <h3>Mock Exams</h3>
              <p>Simulate real exam conditions with timed assessments</p>
            </div>
            <div className="exam-card">
              <h3>Progress Tracking</h3>
              <p>Monitor your improvement with detailed analytics</p>
            </div>
          </div>
          <Link to="/exam" className="btn primary-btn">Start Practicing</Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;