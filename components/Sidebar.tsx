import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
                            <Image src="/image.webp" alt="Emon" width={1024} height={1024} />
                        </figure>
                    </div>
                    <div>
                        <small className="text-[1.3rem] 2xl:text-2xl text-gray-500 mb-[.4rem]">Specialization:</small>
                        <h6>React&Next Js Developer and Frontend Designer</h6>
                    </div>
                    <div>
                        <small className="text-[1.3rem] 2xl:text-2xl text-gray-500 mb-[.4rem]">Based in:</small>
                        <h6>Dhaka, Bangladesh</h6>
                    </div>
                    <div className='flex justify-between items-center'>
                        <a href="https://www.linkedin.com/in/mehedi-hasan-emon/" target="_blank" rel="noopener noreferrer" aria-label='linkedin' className='social__link btn'><i className="ph-bold ph-linkedin-logo"></i></a>
                        <a href="https://www.facebook.com/hasanemon0007/" target="_blank" rel="noopener noreferrer" aria-label='facebook' className='social__link btn'><i className="ph-bold ph-facebook-logo"></i></a>
                        <a href="https://wa.me/+8801629795421" target="_blank" rel="noopener noreferrer" aria-label='whatsapp' className='social__link btn'><i className="ph-bold ph-whatsapp-logo"></i></a>
                        <a href="https://m.me/hasanemon0007" target="_blank" rel="noopener noreferrer" aria-label='messanger' className='social__link btn'><i className="ph-bold ph-messenger-logo"></i></a>
                        <a href="mailto:mehediemon7@gmail.com" rel="noopener noreferrer" aria-label='gmail' className='social__link btn'><i className="ph-bold ph-envelope-simple"></i></a>
                    </div>
                    <Link href='#contact' className='btn btn-default btn-hover btn-hover-accent'>
                        <span>Let&apos;s Work Together!</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;