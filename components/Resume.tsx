import React from 'react';
import Image from 'next/image';

const Resume = () => {
    return (
        <section id='resume' className='sec__wrapper resume '>
            <div className='content__wrapper block-large'>
                <p className='sub__title'>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="13px" height="13px" viewBox="0 0 13 13" fill="currentColor"><path fill="currentColor" d="M5.6,12.6c-0.5-0.8-0.7-2.4-1.7-3.5c-1-1-2.7-1.2-3.5-1.7C-0.1,7-0.1,6,0.4,5.6c0.8-0.5,2.3-0.6,3.5-1.8 C5,2.8,5.1,1.2,5.6,0.4C6-0.1,7-0.1,7.4,0.4c0.5,0.8,0.7,2.4,1.8,3.5c1.2,1.2,2.6,1.2,3.5,1.7c0.6,0.4,0.6,1.4,0,1.7 C11.8,7.9,10.2,8,9.1,9.1c-1,1-1.2,2.7-1.7,3.5C7,13.1,6,13.1,5.6,12.6z"></path></svg>
                    <span>Resume</span>
                </p>
                <h2>Professional and practical experience</h2>
                <p className='mt-12 md:mt-16 xl:mt-[3.6rem] 2xl:mt-[4.2rem] 3xl:mt-[4.1rem]'>Be what you would seem to be - or, if you&apos;d like it put more simply - never imagine yourself not to be otherwise than what it might appear to others that what you were or might have been was not otherwise than what you had been would have appeared to them to be otherwise.</p>
            </div>
            <div className="content__wrapper block-large">
                <div className="section-h3">
                    <h3>Work experience</h3>
                </div>
                <div className='resume-lines'>
                    <div className="grid grid-cols-1 md:grid-cols-12 resume-lines__item">
                        <div className="col-span-1 md:col-span-2">
                            <span className='resume-lines__date'>2018 - 2019</span>
                        </div>
                        <div className="col-span-1 md:col-span-5">
                            <h5 className='resume-lines__title'>Illustrator</h5>
                            <p className='resume-lines__source'>in the <a href='/ss' target='_blanl' className='text-link-bold'>Creative Mind</a> agency</p>
                        </div>
                        <div className="col-span-1 md:col-span-5">
                            <p className='small resume-lines__descr'>I created original images for a range of digital and printed products.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-12 resume-lines__item">
                        <div className="col-span-1 md:col-span-2">
                            <span className='resume-lines__date'>2019 - 2021</span>
                        </div>
                        <div className="col-span-1 md:col-span-5">
                            <h5 className='resume-lines__title'>Graphic Designer</h5>
                            <p className='resume-lines__source'>in the <a href='/ss' target='_blanl' className='text-link-bold'>Moon Light</a> agency</p>
                        </div>
                        <div className="col-span-1 md:col-span-5">
                            <p className='small resume-lines__descr'>My job was to create adverts, branding, signage and other media products.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-12 resume-lines__item">
                        <div className="col-span-1 md:col-span-2">
                            <span className='resume-lines__date'>2021 - now</span>
                        </div>
                        <div className="col-span-1 md:col-span-5">
                            <h5 className='resume-lines__title'>UI/UX Designer</h5>
                            <p className='resume-lines__source'>in the <a href='/ss' target='_blanl' className='text-link-bold'>Moon Light</a> agency</p>
                        </div>
                        <div className="col-span-1 md:col-span-5">
                            <p className='small resume-lines__descr'>I am actively involved in creating user interfaces for mobile apps and websites.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content__wrapper">
                <div className="section-h3 section-h3-grid">
                    <h3>My favourite tools</h3>
                </div>
            </div>
            <div className="content__wrapper grid-block">
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 px-2 2xl:px-6">
                    <div className="col-span-1 flex grid-item-s">
                        <div className="relative w-full bg-background border border-stroke rounded-(--_radius-xl) text-center p-12">
                            <Image src='/icon-reactjs.svg' alt='react' width={120} height={90} className='w-auto h-24 md:h-36 xl:h-24 3xl:h-28 mx-auto'/>
                            <h6 className='lining-nums mt-6 leading-none'>ReactJs</h6>
                        </div>
                    </div>
                    <div className="col-span-1 flex grid-item-s">
                        <div className="relative w-full bg-background border border-stroke rounded-(--_radius-xl) text-center p-12">
                            <Image src='/icon-nextjs.svg' alt='next' width={120} height={90} className='w-auto h-24 md:h-36 xl:h-24 3xl:h-28 mx-auto'/>
                            <h6 className='lining-nums mt-6 leading-none'>NextJs</h6>
                        </div>
                    </div>
                    <div className="col-span-1 flex grid-item-s">
                        <div className="relative w-full bg-background border border-stroke rounded-(--_radius-xl) text-center p-12">
                            <Image src='/icon-javascript.svg' alt='javascropt' width={120} height={90} className='w-auto h-24 md:h-36 xl:h-24 3xl:h-28 mx-auto'/>
                            <h6 className='lining-nums mt-6 leading-none'>Javascript</h6>
                        </div>
                    </div>
                    <div className="col-span-1 flex grid-item-s">
                        <div className="relative w-full bg-background border border-stroke rounded-(--_radius-xl) text-center p-12">
                            <Image src='/icon-html.svg' alt='photoshop' width={120} height={90} className='w-auto h-24 md:h-36 xl:h-24 3xl:h-28 mx-auto'/>
                            <h6 className='lining-nums mt-6 leading-none'>HTML5</h6>
                        </div>
                    </div>
                    <div className="col-span-1 flex grid-item-s">
                        <div className="relative w-full bg-background border border-stroke rounded-(--_radius-xl) text-center p-12">
                            <Image src='/icon-css.svg' alt='photoshop' width={120} height={90} className='w-auto h-24 md:h-36 xl:h-24 3xl:h-28 mx-auto'/>
                            <h6 className='lining-nums mt-6 leading-none'>CSS3</h6>
                        </div>
                    </div>
                    <div className="col-span-1 flex grid-item-s">
                        <div className="relative w-full bg-background border border-stroke rounded-(--_radius-xl) text-center p-12">
                            <Image src='/icon-photoshop.svg' alt='photoshop' width={120} height={90} className='w-auto h-24 md:h-36 xl:h-24 3xl:h-28 mx-auto'/>
                            <h6 className='lining-nums mt-6 leading-none'>Photoshop</h6>
                        </div>
                    </div>
                    <div className="col-span-1 flex grid-item-s">
                        <div className="relative w-full bg-background border border-stroke rounded-(--_radius-xl) text-center p-12">
                            <Image src='/icon-photoshop.svg' alt='photoshop' width={120} height={90} className='w-auto h-24 md:h-36 xl:h-24 3xl:h-28 mx-auto'/>
                            <h6 className='lining-nums mt-6 leading-none'>Photoshop</h6>
                        </div>
                    </div>
                    <div className="col-span-1 flex grid-item-s">
                        <div className="relative w-full bg-background border border-stroke rounded-(--_radius-xl) text-center p-12">
                            <Image src='/icon-photoshop.svg' alt='photoshop' width={120} height={90} className='w-auto h-24 md:h-36 xl:h-24 3xl:h-28 mx-auto'/>
                            <h6 className='lining-nums mt-6 leading-none'>Photoshop</h6>
                        </div>
                    </div>
                    <div className="col-span-1 flex grid-item-s">
                        <div className="relative w-full bg-background border border-stroke rounded-(--_radius-xl) text-center p-12">
                            <Image src='/icon-photoshop.svg' alt='photoshop' width={120} height={90} className='w-auto h-24 md:h-36 xl:h-24 3xl:h-28 mx-auto'/>
                            <h6 className='lining-nums mt-6 leading-none'>Photoshop</h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume;