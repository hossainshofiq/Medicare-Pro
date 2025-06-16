'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate API call
    try {
      // In a real app, you would call your API here:
      // const response = await fetch('/api/login', { method: 'POST', body: JSON.stringify({ email, password }) });
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simulate successful login
      console.log('Login attempt with:', { email, password });
      
      // Redirect based on user role (in a real app, you'd get this from the API response)
      if (email.includes('admin')) {
        router.push('/admin/dashboard');
      } else {
        router.push('/doctor/dashboard');
      }
    } catch (err) {
      setError('Invalid email or password');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Medicare Pro Login</h1>
        
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-input"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-input"
              minLength="6"
            />
          </div>
          
          <button
            type="submit"
            disabled={isLoading}
            className="login-button"
          >
            {isLoading ? (
              <span className="button-loader">Logging in...</span>
            ) : (
              'Login'
            )}
          </button>
        </form>
        
        <div className="login-footer">
          <p>Don't have an account? <Link href="/auth/register" className="link">Register here</Link></p>
          <p><Link href="/auth/forgot-password" className="link">Forgot password?</Link></p>
        </div>
      </div>

      <style jsx>{`
        .login-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #f8fafc;
          padding: 20px;
        }
        
        .login-card {
          background: white;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 400px;
        }
        
        .login-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          text-align: center;
          color: #1e293b;
        }
        
        .login-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        
        label {
          font-size: 0.875rem;
          color: #334155;
          font-weight: 500;
        }
        
        .form-input {
          padding: 0.75rem;
          border: 1px solid #e2e8f0;
          border-radius: 4px;
          font-size: 1rem;
          transition: border-color 0.2s;
        }
        
        .form-input:focus {
          outline: none;
          border-color: #2563eb;
        }
        
        .login-button {
          background-color: #2563eb;
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
        
        .login-button:hover {
          background-color: #1d4ed8;
        }
        
        .login-button:disabled {
          background-color: #93c5fd;
          cursor: not-allowed;
        }
        
        .button-loader {
          display: inline-block;
        }
        
        .error-message {
          color: #dc2626;
          background-color: #fee2e2;
          padding: 0.75rem;
          border-radius: 4px;
          margin-bottom: 1rem;
          font-size: 0.875rem;
          text-align: center;
        }
        
        .login-footer {
          margin-top: 1.5rem;
          text-align: center;
          font-size: 0.875rem;
          color: #64748b;
        }
        
        .login-footer p {
          margin: 0.5rem 0;
        }
        
        .link {
          color: #2563eb;
          text-decoration: none;
          font-weight: 500;
        }
        
        .link:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default LoginPage;