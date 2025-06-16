'use client';
import Link from 'next/link';
import { useState } from 'react';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      console.log('Form data:', formData);
      // Note: As per requirements, this won't actually call the API
      // Admin registration is only done via Postman
      setTimeout(() => setIsSubmitting(false), 1000);
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h1 className="register-title">Admin Registration</h1>
        
        <p className="register-note">
          Note: This is a demo form only. Admin accounts are created via Postman.
        </p>

        <form onSubmit={handleSubmit} className="register-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? 'error' : ''}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={errors.password ? 'error' : ''}
            />
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={errors.confirmPassword ? 'error' : ''}
            />
            {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
          </div>

          <button
            type="submit"
            className="register-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Processing...' : 'Register'}
          </button>
          
          <p className="login-link">
            Already have an account?{' '}
            <Link href="/login">Login here</Link>
          </p>
        </form>
      </div>

      <style jsx>{`
        .register-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #f5f5f5;
          padding: 20px;
        }
        
        .register-card {
          background: white;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 500px;
        }
        
        .register-title {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
          text-align: center;
          color: #333;
        }
        
        .register-note {
          color: #666;
          text-align: center;
          margin-bottom: 1.5rem;
          font-size: 0.875rem;
        }
        
        .register-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        
        label {
          font-size: 0.875rem;
          color: #444;
          font-weight: 500;
        }
        
        input {
          padding: 0.75rem;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 1rem;
        }
        
        input.error {
          border-color: #e53e3e;
        }
        
        .error-message {
          color: #e53e3e;
          font-size: 0.75rem;
        }
        
        .register-button {
          background-color: #3182ce;
          color: white;
          padding: 0.75rem;
          border: none;
          border-radius: 4px;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          margin-top: 0.5rem;
          transition: background-color 0.2s;
        }
        
        .register-button:hover {
          background-color: #2c5282;
        }
        
        .register-button:disabled {
          background-color: #a0aec0;
          cursor: not-allowed;
        }
        
        .login-link {
          text-align: center;
          margin-top: 1rem;
          color: #666;
          font-size: 0.875rem;
        }
        
        .login-link a {
          color: #3182ce;
          text-decoration: none;
        }
        
        .login-link a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default RegisterPage;