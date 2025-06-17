import React from 'react';
import Link from 'next/link';
import { MdAdminPanelSettings } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";

const Banner = () => {
    return (
        <div className='bg-blue-50'>
            <div className='w-11/12 mx-auto py-10 grid grid-cols-1 md:grid-cols-2 gap-8'>
                {/* Admin Section */}
                <section className='bg-white text-center rounded-2xl p-8 space-y-4 shadow-md hover:shadow-lg transition-shadow duration-200 border border-blue-100'>
                    <div className='flex justify-center text-5xl text-blue-600'>
                        <MdAdminPanelSettings />
                    </div>
                    <h2 className='text-2xl font-bold text-gray-800'>Admin Portal</h2>
                    <p className='text-gray-600'>Manage doctors and system settings</p>
                    <div className='flex flex-col sm:flex-row justify-center items-center gap-4 pt-2'>
                        <Link 
                            href="/api/v1/auth/login" 
                            className='w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition duration-200 font-medium'
                        >
                            Admin Login
                        </Link>
                        <Link 
                            href="/api/v1/auth/register" 
                            className='w-full sm:w-auto bg-white hover:bg-blue-50 text-blue-600 border border-blue-600 px-6 py-2 rounded-md transition duration-200 font-medium'
                        >
                            Admin Registration
                        </Link>
                    </div>
                </section>

                {/* Doctor Section */}
                <section className='bg-white text-center rounded-2xl p-8 space-y-4 shadow-md hover:shadow-lg transition-shadow duration-200 border border-teal-100'>
                    <div className='flex justify-center text-5xl text-teal-600'>
                        <FaUserDoctor />
                    </div>
                    <h2 className='text-2xl font-bold text-gray-800'>Doctor Portal</h2>
                    <p className='text-gray-600'>Manage your practice and assistants</p>
                    <div className='pt-2'>
                        <Link 
                            href="/api/v1/auth/login" 
                            className='w-full sm:w-auto bg-teal-600 hover:bg-teal-700 text-white px-8 py-2 rounded-md transition duration-200 font-medium'
                        >
                            Doctor Login
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Banner;