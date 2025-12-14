import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { libraryAPI } from '../services/api';
import { AuthContext } from '../contexts/AuthContext';
import './LibraryPage.css';

const LibraryPage = () => {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    if (!user) {
      navigate('/login', { state: { from: '/library' } });
      return;
    }
    
    fetchResources();
  }, [user, navigate]);

  const fetchResources = async () => {
    try {
      setLoading(true);
      // Uncomment this line when backend is running:
      // const data = await libraryAPI.getAllResources();
      
      // Sample data for demonstration
      const sampleData = [
        {
          id: 1,
          title: "Advanced React Patterns",
          type: "Ebook",
          author: "Jane Smith",
          date: "2025-11-15"
        },
        {
          id: 2,
          title: "Machine Learning Fundamentals",
          type: "Video",
          author: "John Doe",
          date: "2025-11-10"
        },
        {
          id: 3,
          title: "Data Structures & Algorithms",
          type: "Research Paper",
          author: "Prof. Alan Turing",
          date: "2025-11-05"
        },
        {
          id: 4,
          title: "UI/UX Design Principles",
          type: "Audio Book",
          author: "Sarah Johnson",
          date: "2025-10-28"
        }
      ];
      
      setResources(sampleData);
    } catch (err) {
      setError('Failed to fetch library resources');
      console.error('Error fetching resources:', err);
      
      // Sample data as fallback
      const sampleData = [
        {
          id: 1,
          title: "Advanced React Patterns",
          type: "Ebook",
          author: "Jane Smith",
          date: "2025-11-15"
        },
        {
          id: 2,
          title: "Machine Learning Fundamentals",
          type: "Video",
          author: "John Doe",
          date: "2025-11-10"
        }
      ];
      
      setResources(sampleData);
    } finally {
      setLoading(false);
    }
  };

  // Sample data for library categories
  const libraryCategories = [
    {
      id: 1,
      title: "Ebooks & Guides",
      count: "1,200+",
      description: "Comprehensive guides and textbooks on various subjects"
    },
    {
      id: 2,
      title: "Research Papers",
      count: "800+",
      description: "Academic papers and research publications"
    },
    {
      id: 3,
      title: "Video Tutorials",
      count: "500+",
      description: "Step-by-step video lessons and tutorials"
    },
    {
      id: 4,
      title: "Audio Books",
      count: "300+",
      description: "Narrated books for on-the-go learning"
    }
  ];

  // Show login message if user is not authenticated
  if (!user) {
    return (
      <div className="library-page">
        <div className="container">
          <div className="access-denied">
            <h2>Access Denied</h2>
            <p>You need to be logged in to access the library.</p>
            <button 
              className="btn primary-btn"
              onClick={() => navigate('/login', { state: { from: '/library' } })}
            >
              Login to Continue
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="library-page">
        <div className="container">
          <h1 className="page-title">Loading Library Resources...</h1>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="library-page">
        <div className="container">
          <h1 className="page-title">Error Loading Library</h1>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="library-page">
      <section className="library-hero">
        <div className="container">
          <h1 className="page-title">Learning Library</h1>
          <p className="page-subtitle">
            Access our extensive collection of educational resources to enhance your learning journey
          </p>
        </div>
      </section>

      <section className="library-categories">
        <div className="container">
          <h2 className="section-title">Resource Categories</h2>
          <div className="categories-grid">
            {libraryCategories.map(category => (
              <div key={category.id} className="category-card">
                <div className="category-count">{category.count}</div>
                <h3 className="category-title">{category.title}</h3>
                <p className="category-description">{category.description}</p>
                <button className="btn secondary-btn">Browse {category.title}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="recent-resources">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Recently Added</h2>
            <button className="btn secondary-btn">View All Resources</button>
          </div>
          <div className="resources-list">
            {resources.map(resource => (
              <div key={resource.id} className="resource-item">
                <div className="resource-type">{resource.type}</div>
                <div className="resource-info">
                  <h3 className="resource-title">{resource.title}</h3>
                  <p className="resource-author">by {resource.author}</p>
                  <p className="resource-date">Added on {resource.date}</p>
                </div>
                <button className="btn primary-btn">Access</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="library-features">
        <div className="container">
          <h2 className="section-title">Library Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📚</div>
              <h3>Personalized Recommendations</h3>
              <p>Get suggestions based on your learning history and interests</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔖</div>
              <h3>Bookmark & Save</h3>
              <p>Save your favorite resources for quick access later</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Mobile Friendly</h3>
              <p>Access all resources on any device, anywhere</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔍</div>
              <h3>Advanced Search</h3>
              <p>Find exactly what you need with our powerful search tools</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LibraryPage;