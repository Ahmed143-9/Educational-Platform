import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import './DashboardPage.css';

const DashboardPage = () => {
  const { user, logout } = useContext(AuthContext);

  // Sample data for enrolled courses
  const enrolledCourses = [
    {
      id: 1,
      title: "Web Development Bootcamp",
      progress: 75,
      instructor: "John Doe",
      duration: "8 weeks"
    },
    {
      id: 2,
      title: "Data Science Fundamentals",
      progress: 40,
      instructor: "Jane Smith",
      duration: "10 weeks"
    }
  ];

  // Sample data for recent activity
  const recentActivity = [
    {
      id: 1,
      action: "Completed lesson",
      course: "Web Development Bootcamp",
      lesson: "Introduction to React",
      time: "2 hours ago"
    },
    {
      id: 2,
      action: "Started course",
      course: "Data Science Fundamentals",
      lesson: "Python Basics",
      time: "1 day ago"
    },
    {
      id: 3,
      action: "Downloaded resource",
      course: "Web Development Bootcamp",
      lesson: "CSS Styling Guide",
      time: "3 days ago"
    }
  ];

  return (
    <div className="dashboard-page">
      <div className="container">
        <div className="dashboard-header">
          <div className="welcome-section">
            <h1>Welcome back, {user?.name || 'Student'}!</h1>
            <p>Continue your learning journey</p>
          </div>
          <button className="btn secondary-btn" onClick={logout}>
            Logout
          </button>
        </div>

        <div className="dashboard-stats">
          <div className="stat-card">
            <div className="stat-icon">📚</div>
            <div className="stat-info">
              <h3>3</h3>
              <p>Courses Enrolled</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">✅</div>
            <div className="stat-info">
              <h3>12</h3>
              <p>Lessons Completed</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🏆</div>
            <div className="stat-info">
              <h3>2</h3>
              <p>Certificates Earned</p>
            </div>
          </div>
        </div>

        <div className="dashboard-content">
          <div className="courses-section">
            <h2>Your Courses</h2>
            <div className="courses-grid">
              {enrolledCourses.map(course => (
                <div key={course.id} className="course-card">
                  <h3>{course.title}</h3>
                  <p className="course-instructor">by {course.instructor}</p>
                  <div className="progress-container">
                    <div className="progress-bar">
                      <div 
                        className="progress-fill" 
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                    <span className="progress-text">{course.progress}% Complete</span>
                  </div>
                  <button className="btn primary-btn">Continue Learning</button>
                </div>
              ))}
            </div>
          </div>

          <div className="activity-section">
            <h2>Recent Activity</h2>
            <div className="activity-list">
              {recentActivity.map(activity => (
                <div key={activity.id} className="activity-item">
                  <div className="activity-icon">📝</div>
                  <div className="activity-details">
                    <p className="activity-action">
                      {activity.action} <strong>{activity.lesson}</strong> in <strong>{activity.course}</strong>
                    </p>
                    <p className="activity-time">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;