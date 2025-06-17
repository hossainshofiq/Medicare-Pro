import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-base-300 text-base-content p-4">
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by Medicare Pro Industries Ltd</p>
            </aside>
            <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <a target='_blank' className='text-blue-600 text-xl'>
                    <FaFacebook></FaFacebook>
                </a>
                <a target='_blank' className='text-blue-600 text-xl'>
                    <FaLinkedin></FaLinkedin>
                </a>
                <a target='_blank' className='text-xl'>
                    <FaGithub></FaGithub>
                </a>
            </nav>
        </footer>
    );
};

export default Footer;