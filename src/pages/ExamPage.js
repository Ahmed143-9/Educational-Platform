import React, { useState, useEffect } from 'react';
import { examAPI } from '../services/api';
import './ExamPage.css';

const liveClassLinks = [
  {
    id: 1,
    date: "Today",
    subject: "React",
    title: "React Hooks Deep Dive",
    time: "8:00 PM",
    instructor: "John Doe",
    zoomLink: "https://zoom.us/"
  },
  {
    id: 2,
    date: "Tomorrow",
    subject: "JavaScript",
    title: "JavaScript ES6+",
    time: "7:30 PM",
    instructor: "Jane Smith",
    zoomLink: "https://zoom.us/"
  }
];

// Handle join meeting
const handleJoinMeeting = (link) => {
  window.open(link, '_blank');
};

const ExamPage = () => {
  const [exams, setExams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchExams();
  }, []);

  const fetchExams = async () => {
    try {
      setLoading(true);
      // For now, we'll use sample data since we don't have the backend running
      // In a real implementation, you would uncomment the line below:
      // const data = await examAPI.getExams();
      
      // Sample data for demonstration
      const sampleData = [
        {
          id: 1,
          title: "React Developer Certification",
          duration: "2 hours",
          questions: "60 questions",
          difficulty: "Intermediate"
        },
        {
          id: 2,
          title: "JavaScript Fundamentals",
          duration: "1.5 hours",
          questions: "50 questions",
          difficulty: "Beginner"
        },
        {
          id: 3,
          title: "Data Science Professional",
          duration: "3 hours",
          questions: "80 questions",
          difficulty: "Advanced"
        },
        {
          id: 4,
          title: "UI/UX Design Principles",
          duration: "2 hours",
          questions: "55 questions",
          difficulty: "Intermediate"
        }
      ];
      
      setExams(sampleData);
    } catch (err) {
      setError('Failed to fetch exams');
      console.error('Error fetching exams:', err);
      
      // Sample data as fallback
      const sampleData = [
        {
          id: 1,
          title: "React Developer Certification",
          duration: "2 hours",
          questions: "60 questions",
          difficulty: "Intermediate"
        },
        {
          id: 2,
          title: "JavaScript Fundamentals",
          duration: "1.5 hours",
          questions: "50 questions",
          difficulty: "Beginner"
        }
      ];
      
      setExams(sampleData);
    } finally {
      setLoading(false);
    }
  };

  // Sample data for exam categories
  const examCategories = [
    {
      id: 1,
      title: "Certification Exams",
      description: "Prepare for industry-recognized certifications",
      icon: "🏆"
    },
    {
      id: 2,
      title: "Mock Tests",
      description: "Simulate real exam conditions with timed assessments",
      icon: "⏱️"
    },
    {
      id: 3,
      title: "Subject Tests",
      description: "Test your knowledge in specific subjects",
      icon: "📚"
    },
    {
      id: 4,
      title: "Progress Assessments",
      description: "Track your learning progress over time",
      icon: "📈"
    }
  ];

  if (loading) {
    return (
      <div className="exam-page">
        <div className="container">
          <h1 className="page-title">Loading Exams...</h1>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="exam-page">
        <div className="container">
          <h1 className="page-title">Error Loading Exams</h1>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="exam-page">
      <section className="exam-hero">
        <div className="container">
          <h1 className="page-title">Exam Preparation</h1>
          <p className="page-subtitle">
            Master your skills and boost your confidence with our comprehensive exam preparation tools
          </p>
        </div>
      </section>

       {/* Live Class Links Section - NEW SECTION */}
      <section className="live-class-links">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Live Class Links</h2>
            <p className="section-description">
              Join daily live classes by clicking the Join button. Admin updates links daily.
            </p>
          </div>
          
          <div className="class-links-grid">
            {liveClassLinks.map(classLink => (
              <div key={classLink.id} className="class-link-card">
                <div className="class-link-header">
                  <span className="class-date">{classLink.date}</span>
                  <span className="class-subject">{classLink.subject}</span>
                </div>
                
                <div className="class-link-content">
                  <h3 className="class-title">{classLink.title}</h3>
                  
                  <div className="class-details">
                    <div className="detail">
                      <i className="fas fa-clock"></i>
                      <span>{classLink.time}</span>
                    </div>
                    <div className="detail">
                      <i className="fas fa-user"></i>
                      <span>{classLink.instructor}</span>
                    </div>
                  </div>
                </div>
                
                <div className="class-link-footer">
                  <button 
                    className="btn btn-primary"
                    onClick={() => handleJoinMeeting(classLink.zoomLink)}
                  >
                    <i className="fas fa-video"></i> Join Class
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="exam-categories">
        <div className="container">
          <h2 className="section-title">Exam Types</h2>
          <div className="categories-grid">
            {examCategories.map(category => (
              <div key={category.id} className="category-card">
                <div className="category-icon">{category.icon}</div>
                <h3 className="category-title">{category.title}</h3>
                <p className="category-description">{category.description}</p>
                <button className="btn secondary-btn">Start Practicing</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="popular-exams">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Popular Exams</h2>
            <button className="btn secondary-btn">View All Exams</button>
          </div>
          <div className="exams-grid">
            {exams.map(exam => (
              <div key={exam.id} className="exam-card">
                <div className="exam-header">
                  <h3 className="exam-title">{exam.title}</h3>
                  <span className={`exam-difficulty difficulty-${exam.difficulty.toLowerCase()}`}>
                    {exam.difficulty}
                  </span>
                </div>
                <div className="exam-details">
                  <div className="detail-item">
                    <span className="detail-label">Duration:</span>
                    <span className="detail-value">{exam.duration}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Questions:</span>
                    <span className="detail-value">{exam.questions}</span>
                  </div>
                </div>
                <button className="btn primary-btn">Take Exam</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="exam-features">
        <div className="container">
          <h2 className="section-title">Why Choose Our Exam Platform?</h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-number">1</div>
              <div className="feature-content">
                <h3>Realistic Exam Simulation</h3>
                <p>Experience exam conditions that closely mirror actual certification tests</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-number">2</div>
              <div className="feature-content">
                <h3>Detailed Performance Analytics</h3>
                <p>Get comprehensive insights into your strengths and areas for improvement</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-number">3</div>
              <div className="feature-content">
                <h3>Personalized Study Plans</h3>
                <p>Receive customized recommendations based on your performance</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-number">4</div>
              <div className="feature-content">
                <h3>Expert-Curated Content</h3>
                <p>Access questions developed by industry professionals and educators</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExamPage;