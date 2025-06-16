import Link from 'next/link';
import React from 'react';

const NotFoundPage404 = () => {
    return (
        <div className='text-center justify-center items-center'>
            <h1 className='text-red-500 font-semibold'>Page Not Found</h1>
            <Link className='text-green-500 font-semibold' href={"/"}>Back to Home</Link>
        </div>
    );
};

export default NotFoundPage404;