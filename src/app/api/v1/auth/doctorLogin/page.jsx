'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa6';
import { toast } from 'react-toastify';

const DoctorLoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            // Validate inputs
            if (!email || !password) {
                throw new Error('Email and password are required');
            }

            // API call
            const response = await fetch('https://medicare-pro-backend.vercel.app/api/v1/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password })
            });

            // Handle response
            const data = await response.json();

            if (!response.ok) {
                // Handle API errors
                throw new Error(data.message || 'Login failed');
            }

            // Successful login
            // console.log('Login successful:', data);
            toast.success('Login Successful');

            // Store token and user data (adjust based on your API response)
            localStorage.setItem('authToken', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));

            // Redirect based on user role
            if (data.user.role === 'super_admin') {
                router.push('/admin/dashboard');
            } else if (data.user.role === 'doctor') {
                router.push('/doctor/dashboard');
            } else {
                router.push('/dashboard');
            }

        } catch (err) {
            console.error('Login error:', err);
            setError(err.message || 'An error occurred during login');
        } finally {
            setIsLoading(false);
        }
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setIsLoading(true);
    //     setError('');

    //     try {
    //         // Simulate API call
    //         await new Promise(resolve => setTimeout(resolve, 1000));

    //         // In a real app, you would call your API here:
    //         const response = await fetch('/api/v1/auth/login', {
    //           method: 'POST',
    //           headers: { 'Content-Type': 'application/json' },
    //           body: JSON.stringify({ email, password })
    //         });

    //         // For demo purposes, we'll simulate a successful login
    //         console.log('Login attempt with:', { email, password });

    //         // Redirect to admin dashboard
    //         router.push('/admin/dashboard');
    //     } catch (err) {
    //         setError('Invalid email or password');
    //     } finally {
    //         setIsLoading(false);
    //     }
    // };

    return (
        <>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
                <Link href={"/"}>
                    <div className='flex justify-center items-center text-blue-600 hover:text-blue-500 gap-2 btn mb-5'>
                        <FaArrowLeft></FaArrowLeft>
                        <span>Back to Home</span>
                    </div>
                </Link>
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                    <h1 className="text-center text-3xl font-extrabold mb-6 text-gray-800">
                        Doctor Login
                    </h1>

                    {error && (
                        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded text-center">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                                minLength="6"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? 'Logging in...' : 'Login'}
                        </button>
                    </form>

                    <div className="mt-6 text-center text-sm text-gray-600">
                        Need help? Contact{' '}
                        <a href="mailto:hr@mydrtech.in" className="text-blue-600 hover:underline">
                            hr@mydrtech.in
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DoctorLoginPage;