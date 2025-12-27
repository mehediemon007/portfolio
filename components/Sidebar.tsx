import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { FaFacebook, FaLinkedin, FaGithub, FaEnvelope, FaXTwitter } from "react-icons/fa6";

const Sidebar = () => {
    return (
        <div className='sidebar-container'>
            <div className="profile-section">
                <div>
                    <p className='text-[1.8rem] font-bold font-sync text-gray-100'>Mehedi Hasan Emon</p>
                    <Image src="/image.webp" alt="Emon" width={240} height={240} />
                </div>
                <div className='text-gray-100 font-sync'>
                    <p className='text-[13px]'>Specialization:</p>
                    <h6 className='text-base font-bold'>Frontend Developer</h6>
                </div>
                <div className='text-gray-100 font-sync'>
                    <p className='text-[13px]'>Based in:</p>
                    <h6 className='text-base font-bold'>Dhaka, Bangladesh</h6>
                </div>
                <div className='flex items-center gap-2'>
                    <a href="#" className='inline-flex justify-center items-center w-11 h-11 text-gray-100 bg-[#161616] border border-[#4b4b51] rounded-[20px]'><FaGithub/></a>
                    <a href="#" className='inline-flex justify-center items-center w-11 h-11 text-gray-100 bg-[#161616] border border-[#4b4b51] rounded-[20px]'><FaLinkedin/></a>
                    <a href="#" className='inline-flex justify-center items-center w-11 h-11 text-gray-100 bg-[#161616] border border-[#4b4b51] rounded-[20px]'><FaFacebook/></a>
                    <a href="#" className='inline-flex justify-center items-center w-11 h-11 text-gray-100 bg-[#161616] border border-[#4b4b51] rounded-[20px]'><FaXTwitter/></a>
                    <a href="mailto:mehediemon7@gmail.com" className='inline-flex justify-center items-center w-11 h-11 text-gray-100 bg-[#161616] border border-[#4b4b51] rounded-[20px]'><FaEnvelope/></a>
                </div>
                <Link href='#contact'>Let&apos;s Work Together!</Link>
            </div>
        </div>
    )
}

export default Sidebar;