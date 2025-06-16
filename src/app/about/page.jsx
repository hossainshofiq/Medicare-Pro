import React from 'react';

const AboutPage = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">About Medicare Pro</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Revolutionizing healthcare management through innovative technology solutions
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
                    <p className="text-gray-600 mb-6">
                        Medicare Pro is dedicated to simplifying healthcare administration by providing a comprehensive
                        platform that connects administrators with medical professionals. Our goal is to streamline
                        doctor management, appointment scheduling, and patient care coordination.
                    </p>
                    <p className="text-gray-600">
                        We believe in leveraging technology to improve healthcare accessibility while maintaining
                        the highest standards of data security and patient privacy.
                    </p>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Features</h2>
                    <ul className="space-y-3 text-gray-600">
                        <li className="flex items-start">
                            <span className="text-green-500 mr-2">✓</span>
                            <span>Secure admin portal for managing medical professionals</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-500 mr-2">✓</span>
                            <span>Doctor subscription management system</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-500 mr-2">✓</span>
                            <span>Assistant management tools for medical practices</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-500 mr-2">✓</span>
                            <span>Real-time notifications and alerts</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-500 mr-2">✓</span>
                            <span>Comprehensive reporting and analytics</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-8 mb-16">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Our Team</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                        <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                        <h3 className="text-xl font-medium text-gray-800">Dr. Sarah Johnson</h3>
                        <p className="text-blue-600 mb-2">Chief Medical Officer</p>
                        <p className="text-gray-600 text-sm">
                            15+ years of healthcare administration experience
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                        <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                        <h3 className="text-xl font-medium text-gray-800">Michael Chen</h3>
                        <p className="text-blue-600 mb-2">Lead Developer</p>
                        <p className="text-gray-600 text-sm">
                            Healthcare technology specialist
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                        <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                        <h3 className="text-xl font-medium text-gray-800">Lisa Rodriguez</h3>
                        <p className="text-blue-600 mb-2">Product Manager</p>
                        <p className="text-gray-600 text-sm">
                            Patient experience advocate
                        </p>
                    </div>
                </div>
            </div>

            <div className="text-center">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get Started Today</h2>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                    Join hundreds of healthcare professionals who trust Medicare Pro to manage their practices efficiently.
                </p>
                <div className="space-x-4">
                    <a href="/auth/admin/register" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                        Admin Registration
                    </a>
                    <a href="/auth/doctor/login" className="inline-block border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition">
                        Doctor Login
                    </a>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;