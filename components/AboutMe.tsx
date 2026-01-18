import React from 'react';
import Link from 'next/link';

const AboutMe = () => {
    return (
        <section id='about-me' className='sec__wrapper about-me 2xl:pt-60 2xl:pb-8 3xl:pt-64'>
            <div className='content__wrapper'>
                <p className='sub__title'>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="13px" height="13px" viewBox="0 0 13 13" fill="currentColor"><path fill="currentColor" d="M5.6,12.6c-0.5-0.8-0.7-2.4-1.7-3.5c-1-1-2.7-1.2-3.5-1.7C-0.1,7-0.1,6,0.4,5.6c0.8-0.5,2.3-0.6,3.5-1.8 C5,2.8,5.1,1.2,5.6,0.4C6-0.1,7-0.1,7.4,0.4c0.5,0.8,0.7,2.4,1.8,3.5c1.2,1.2,2.6,1.2,3.5,1.7c0.6,0.4,0.6,1.4,0,1.7 C11.8,7.9,10.2,8,9.1,9.1c-1,1-1.2,2.7-1.7,3.5C7,13.1,6,13.1,5.6,12.6z"></path></svg>
                    <span>About Me</span>
                </p>
                <h2 className=''>Turning complex problems into simple design</h2>
            </div>
            <div className='content__wrapper grid-block'>
                <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="col-span-1 grid-item">
                        <div className='h-full text-center bg-background border border-stroke rounded-(--_radius-xl) p-12'>
                            <p className='text-8xl xl:text-[7rem]/[1] 3xl:text-9xl font-bold font-sync text-transparent -tracking-[.2rem] lining-nums bg-linear-accent [-webkit-text-fill-color:transparent] bg-clip-text'>40+</p>
                            <p className='text-[1.6rem]/[1.2] xl:text-[1.8rem]/[1.2] 3xl:text-[2rem]/[1.2] text-gray-300 font-bold font-sync mt-[.6rem]'>Happy clients</p>
                        </div>
                    </div>
                    <div className="col-span-1 grid-item">
                        <div className='h-full text-center bg-background border border-stroke rounded-(--_radius-xl) p-12'>
                            <p className='text-8xl xl:text-[7rem]/[1] 3xl:text-9xl font-bold font-sync text-transparent -tracking-[.2rem] lining-nums bg-linear-accent [-webkit-text-fill-color:transparent] bg-clip-text'>4+</p>
                            <p className='text-[1.6rem]/[1.2] xl:text-[1.8rem]/[1.2] 3xl:text-[2rem]/[1.2] text-gray-300 font-bold font-sync mt-[.6rem]'>Years of experience</p>
                        </div>
                    </div>
                    <div className="col-span-1 grid-item">
                        <div className='h-full text-center bg-background border border-stroke rounded-(--_radius-xl) p-12'>
                            <p className='text-8xl xl:text-[7rem]/[1] 3xl:text-9xl font-bold font-sync text-transparent -tracking-[.2rem] lining-nums bg-linear-accent [-webkit-text-fill-color:transparent] bg-clip-text'>50+</p>
                            <p className='text-[1.6rem]/[1.2] xl:text-[1.8rem]/[1.2] 3xl:text-[2rem]/[1.2] text-gray-300 font-bold font-sync mt-[.6rem]'>Projects done</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content__wrapper grid-block ">
                <div className="grid grid-cols-1 xl:grid-cols-3">
                    <div className="col-span-1 xl:col-span-2 pt-4 md:pt-8 2xl:pt-[.9rem] grid-item">
                        <p className='mb-6 2xl:mb-9'>I wonder if I&apos;ve been changed in the night? Let me think. Was I the same when I got up this morning? I almost think I can remember feeling a little different. But if I&apos;m not the same, the</p>
                        <p>Be what you would seem to be - or, if you&apos;d like it put more simply - never imagine yourself not to be otherwise than what it might appear to others that what you were or</p>
                        <div className='mt-10 2xl:mt-[3.1rem] 3xl:mt-[3.2rem]'>
                            <Link href={'#portfolio'} className='btn mobile-vertical btn-default btn-hover btn-hover-accent'>
                                <span>Download CV</span>
                                <i className="ph-bold ph-download-simple"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="col-span-1 pt-[1.7rem] md:pt-[2.7rem] 2xl:pt-[1.6rem] grid-item">
                        <div className='mb-[2.6rem] 2xl:mb-12 3xl:mb-[3.2rem]'>
                            <small className="text-[1.3rem] 2xl:text-2xl text-gray-500 mb-[.4rem]">Name</small>
                            <h6>Mehedi Hasan Emon</h6>
                        </div>
                        <div className='mb-[2.6rem] 2xl:mb-12 3xl:mb-[3.2rem]'>
                            <small className="text-[1.3rem] 2xl:text-2xl text-gray-500 mb-[.4rem]">Phone</small>
                            <h6>
                                <a href="tel:+8801629795421" target="_blank" rel="noopener noreferrer" className='text-link-bold lining-nums'>+880-1629-795421</a>
                            </h6>
                        </div>
                        <div className='mb-[2.6rem] 2xl:mb-12 3xl:mb-[3.2rem]'>
                            <small className="text-[1.3rem] 2xl:text-2xl text-gray-500 mb-[.4rem]">Email</small>
                            <h6>
                                <a href="mailto:mehediemon7@gmail.com" target="_blank" rel="noopener noreferrer" className='text-link-bold'>mehediemon7@gmail.com</a>
                            </h6>
                        </div>
                        <div className='mb-[2.6rem] 2xl:mb-12 3xl:mb-[3.2rem]'>
                            <small className="text-[1.3rem] 2xl:text-2xl text-gray-500 mb-[.4rem]">Location</small>
                            <h6>
                                <a href="/google.com" target="_blank" rel="noopener noreferrer" className='text-link-bold'>Dhaka, Bangladesh</a>
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;