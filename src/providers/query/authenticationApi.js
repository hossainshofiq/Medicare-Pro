// src/features/auth/authApi.js
export const authApi = {
  loginAdmin: async (credentials) => {
    const response = await fetch('https://medicare-pro-backend.vercel.app/api/v1/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials)
    });
    
    if (!response.ok) {
      throw new Error('Login failed');
    }
    
    return await response.json();
  }
};