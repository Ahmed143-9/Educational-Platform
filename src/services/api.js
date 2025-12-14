// API service to communicate with Laravel backend
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';

// Helper function to make API requests
const apiRequest = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(url, config);
    const text = await response.text();
    
    // Handle empty responses
    if (!text) {
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      return {};
    }
    
    // Try to parse JSON
    let data;
    try {
      data = JSON.parse(text);
    } catch (parseError) {
      // If parsing fails, return the raw text
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}. Response: ${text}`);
      }
      return { message: text };
    }
    
    if (!response.ok) {
      // Extract error message from Laravel validation errors
      let errorMessage = 'Something went wrong';
      if (data.errors) {
        // Laravel validation errors - try different possible formats
        if (Array.isArray(data.errors)) {
          // Simple array of errors
          errorMessage = data.errors[0];
        } else if (typeof data.errors === 'object') {
          // Object with field-specific errors
          const firstErrorField = Object.keys(data.errors)[0];
          if (Array.isArray(data.errors[firstErrorField])) {
            errorMessage = data.errors[firstErrorField][0];
          } else {
            errorMessage = data.errors[firstErrorField];
          }
        } else {
          errorMessage = data.errors;
        }
      } else if (data.message) {
        errorMessage = data.message;
      } else {
        errorMessage = `HTTP ${response.status}: ${response.statusText}`;
      }
      throw new Error(errorMessage);
    }
    
    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

// Auth APIs
export const authAPI = {
  register: (userData) => apiRequest('/register', {
    method: 'POST',
    body: JSON.stringify(userData),
  }),
  
  login: (credentials) => apiRequest('/login', {
    method: 'POST',
    body: JSON.stringify(credentials),
  }),
  
  logout: () => apiRequest('/logout', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
  }),
};

// Course APIs
export const courseAPI = {
  getAllCourses: () => apiRequest('/courses'),
  
  getCourseBySlug: (slug) => apiRequest(`/courses/${slug}`),
  
  enrollInCourse: (courseId) => apiRequest(`/courses/${courseId}/enroll`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
  }),
  
  getMyCourses: () => apiRequest('/my-courses', {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
  }),
};

// Library APIs
export const libraryAPI = {
  getAllResources: () => apiRequest('/library'),
  
  getResourceById: (id) => apiRequest(`/library/${id}`),
};

// Exam APIs
export const examAPI = {
  getExamById: (id) => apiRequest(`/exams/${id}`, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
  }),
  
  submitExam: (examId, answers) => apiRequest(`/exams/${examId}/submit`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify({ answers }),
  }),
};

// Payment APIs
export const paymentAPI = {
  initiatePayment: (paymentData) => apiRequest('/payments/initiate', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify(paymentData),
  }),
  
  verifyPayment: (verificationData) => apiRequest('/payments/verify', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify(verificationData),
  }),
};