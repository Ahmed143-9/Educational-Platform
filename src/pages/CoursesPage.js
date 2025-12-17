import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { courseAPI } from '../services/api';
import { AuthContext } from '../contexts/AuthContext';
import './CoursesPage.css';

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      setLoading(true);
      // Uncomment this line when backend is running:
      const data = await courseAPI.getAllCourses();
      setCourses(data);
    } catch (err) {
      setError('Failed to fetch courses');
      console.error('Error fetching courses:', err);
      
      // Sample data as fallback
      const sampleData = [
        {
          id: 1,
          title: "Web Development Bootcamp",
          slug: "web-development-bootcamp",
          instructor: "John Doe",
          duration: "8 weeks",
          level: "Beginner",
          price: "$99",
          rating: 4.8,
          students: "2,500",
          description: "Learn HTML, CSS, JavaScript and modern frameworks like React and Node.js"
        },
        {
          id: 2,
          title: "Data Science Fundamentals",
          slug: "data-science-fundamentals",
          instructor: "Jane Smith",
          duration: "10 weeks",
          level: "Intermediate",
          price: "$149",
          rating: 4.9,
          students: "1,800",
          description: "Master data analysis and visualization techniques with Python and R"
        }
      ];
      
      setCourses(sampleData);
    } finally {
      setLoading(false);
    }
  };

  const handleEnrollClick = (courseId) => {
    // Check if user is logged in
    if (!user) {
      // Redirect to login page with return URL
      navigate('/login', { state: { from: `/courses/${courseId}/enroll` } });
      return;
    }
    
    // If user is logged in, proceed with enrollment
    enrollInCourse(courseId);
  };

  const enrollInCourse = async (courseId) => {
    try {
      // In a real implementation, you would call:
      // await courseAPI.enrollInCourse(courseId);
      
      // For now, show an alert
      alert('Successfully enrolled in course! Redirecting to payment...');
      navigate('/payment');
    } catch (err) {
      console.error('Enrollment error:', err);
      alert('Failed to enroll in course. Please try again.');
    }
  };

  if (loading) {
    return (
      <div className="courses-page">
        <div className="container">
          <h1 className="page-title">Loading Courses...</h1>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="courses-page">
        <div className="container">
          <h1 className="page-title">Error Loading Courses</h1>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="courses-page">
      <section className="courses-hero">
        <div className="container">
          <h1 className="page-title">Our Courses</h1>
          <p className="page-subtitle">
            Discover a wide range of courses taught by industry experts to advance your career
          </p>
        </div>
      </section>

      <section className="courses-list">
        <div className="container">
          <div className="courses-header">
            <h2 className="section-title">Available Courses</h2>
            <div className="courses-filters">
              <select className="filter-select">
                <option>All Categories</option>
                <option>Web Development</option>
                <option>Data Science</option>
                <option>Digital Marketing</option>
                <option>Design</option>
                <option>Mobile Development</option>
              </select>
              <select className="filter-select">
                <option>All Levels</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </div>
          </div>
          
          <div className="courses-grid">
            {courses.map(course => (
              <div key={course.id} className="course-card">
                <div className="course-header">
                  <h3 className="course-title">{course.title}</h3>
                  <div className="course-rating">
                    <span className="rating-stars">{'★'.repeat(Math.floor(course.rating))}</span>
                    <span className="rating-value">{course.rating}</span>
                  </div>
                </div>
                <p className="course-instructor">by {course.instructor}</p>
                <p className="course-description">{course.description}</p>
                <div className="course-meta">
                  <div className="meta-item">
                    <span className="meta-label">Duration:</span>
                    <span className="meta-value">{course.duration}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Level:</span>
                    <span className="meta-value">{course.level}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Students:</span>
                    <span className="meta-value">{course.students}</span>
                  </div>
                </div>
                <div className="course-footer">
                  <div className="course-price">{course.price}</div>
                  <button className="btn primary-btn" onClick={() => handleEnrollClick(course.id)}>Enroll Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="instructor-section">
        <div className="container">
          <h2 className="section-title">Become an Instructor</h2>
          <p className="section-description">
            Share your knowledge and earn money by creating online courses
          </p>
          <button className="btn secondary-btn">Teach on Saif Academy</button>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;