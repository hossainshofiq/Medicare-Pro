import React from 'react';
import Link from 'next/link';
import { MdAdminPanelSettings } from "react-icons/md";

const Banner = () => {
    return (
        <div className='flex justify-between items-center bg-blue-50 p-6 rounded-lg shadow-sm mb-80'>
            {/* Admin Section */}
            <section className='space-y-4'>
                <MdAdminPanelSettings></MdAdminPanelSettings>
                <h2 className='text-xl font-semibold text-gray-800'>Admin Portal</h2>
                <div className='flex space-x-4'>
                    <Link href="/auth/admin/login" className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition duration-200'>
                        Admin Login
                    </Link>
                    <Link href="/auth/admin/register" className='bg-white hover:bg-gray-100 text-blue-600 border border-blue-600 px-4 py-2 rounded-md transition duration-200'>
                        Admin Registration
                    </Link>
                </div>
            </section>

            {/* Doctor Section */}
            <section className='space-y-4'>
                <h2 className='text-xl font-semibold text-gray-800'>Doctor Portal</h2>
                <div className='flex space-x-4'>
                    <Link href="/auth/doctor/login" className='bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition duration-200'>
                        Doctor Login
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Banner;