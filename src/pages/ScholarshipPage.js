import React from 'react';
import './ScholarshipPage.css';

const ScholarshipPage = () => {
  return (
    <div className="scholarship-page">
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <h1 className="mb-4">Scholarship Opportunities</h1>
            <p className="lead mb-4">
              We offer various scholarship programs to help students achieve their educational goals.
            </p>
          </div>
        </div>
        
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h3 className="card-title">Merit-Based Scholarships</h3>
                <p className="card-text">
                  Awarded to students who demonstrate exceptional academic achievement, leadership qualities, 
                  and involvement in extracurricular activities.
                </p>
                <ul>
                  <li>Full tuition coverage</li>
                  <li>Stipend for books and materials</li>
                  <li>Mentorship program</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h3 className="card-title">Need-Based Scholarships</h3>
                <p className="card-text">
                  Designed for students who demonstrate financial need but have the determination and 
                  commitment to pursue their education.
                </p>
                <ul>
                  <li>Partial to full tuition assistance</li>
                  <li>Flexible payment plans</li>
                  <li>Career counseling services</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h3 className="card-title">Diversity Scholarships</h3>
                <p className="card-text">
                  Aimed at promoting diversity and inclusion in our educational programs by supporting 
                  underrepresented groups.
                </p>
                <ul>
                  <li>Tuition discounts up to 50%</li>
                  <li>Networking opportunities</li>
                  <li>Professional development workshops</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h3 className="card-title">Special Achievement Scholarships</h3>
                <p className="card-text">
                  Recognizes students who have overcome significant challenges or demonstrated outstanding 
                  achievements in specific fields.
                </p>
                <ul>
                  <li>One-time awards up to $5,000</li>
                  <li>Recognition ceremony</li>
                  <li>Alumni network access</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-12 text-center mt-4">
            <h3>How to Apply</h3>
            <p>
              Applications for scholarships are accepted twice a year. Please check back for our next 
              application cycle or contact our admissions team for more information.
            </p>
            <button className="btn btn-primary btn-lg">Contact Admissions</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipPage;