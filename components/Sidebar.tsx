import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { FaFacebook, FaLinkedin, FaGithub, FaEnvelope, FaXTwitter } from "react-icons/fa6";

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebar__container">
                <div className="profile__contents">
                    <div>
                        <div className='mb-8'>
                            <p className='text-[2.8rem]/[1.06] 2xl:text-[3.6rem] font-bold font-sync text-gray-300'>Mehedi Hasan Emon</p>
                        </div>
                        <figure className='rounded-5xl mb-[.8rem] overflow-hidden'>
                            <Image src="/image.webp" alt="Emon" width={300} height={300} />
                        </figure>
                    </div>
                    <div>
                        <small className="text-[1.3rem] 2xl:text-2xl text-gray-500 mb-[.4rem]">Specialization:</small>
                        <h6>Frontend Developer</h6>
                    </div>
                    <div>
                        <small className="text-[1.3rem] 2xl:text-2xl text-gray-500 mb-[.4rem]">Based in:</small>
                        <h6>Dhaka, Bangladesh</h6>
                    </div>
                    <div className='flex justify-between items-center'>
                        <a href="#" className='social__link btn'><FaGithub/></a>
                        <a href="#" className='social__link btn'><FaLinkedin/></a>
                        <a href="#" className='social__link btn'><FaFacebook/></a>
                        <a href="#" className='social__link btn'><FaXTwitter/></a>
                        <a href="mailto:mehediemon7@gmail.com" className='social__link btn'><FaEnvelope/></a>
                    </div>
                    <Link href='#contact' className='btn btn-default btn-hover btn-hover-accent'>Let&apos;s Work Together!</Link>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;