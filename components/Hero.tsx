import React from 'react';
import Link from 'next/link';

// *** Import Icons

const Hero = () => {
    return (
        <section id='home' className='relative h-auto lg:h-[calc(100vh-650px)] 2xl:h-[calc(100vh-80px)] py-14 md:py-20 lg:py-0'>
            <div className='content__wrapper'>
                <p className='sub__title'>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="13px" height="13px" viewBox="0 0 13 13" fill="currentColor"><path fill="currentColor" d="M5.6,12.6c-0.5-0.8-0.7-2.4-1.7-3.5c-1-1-2.7-1.2-3.5-1.7C-0.1,7-0.1,6,0.4,5.6c0.8-0.5,2.3-0.6,3.5-1.8 C5,2.8,5.1,1.2,5.6,0.4C6-0.1,7-0.1,7.4,0.4c0.5,0.8,0.7,2.4,1.8,3.5c1.2,1.2,2.6,1.2,3.5,1.7c0.6,0.4,0.6,1.4,0,1.7 C11.8,7.9,10.2,8,9.1,9.1c-1,1-1.2,2.7-1.7,3.5C7,13.1,6,13.1,5.6,12.6z"></path></svg>
                    <span>Let&apos;s meet!</span>
                </p>
                <h1 className='lg:max-w-4xl xl:max-w-[660px] 2xl:max-w-[760px] 3xl:max-w-[900px]'>I&apos;m Alex Walker Digital designer and illustrator.</h1>
                <div className='w-full sm:w-auto mt-16 md:mt-[4.6rem] 2xl:mt-[5.1rem] 3xl:mt-[4.8rem]'>
                    <Link href={'#portfolio'} className='btn mobile-vertical btn-default btn-hover btn-hover-accent-mobile'>
                        <span>My Works </span>
                        <i className="ph-bold ph-squares-four"></i>
                    </Link>
                    <Link href={'#portfolio'} className='btn mobile-vertical btn-default btn-hover btn-hover-outline-mobile'>
                        <span>Download CV</span>
                        <i className="ph-bold ph-download-simple"></i>
                    </Link>
                </div>
            </div>
            {/* <div className="rotating-btn">
                <a href="#portfolio" className="rotating-btn__link slide-down">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 120 120" enableBackground="new 0 0 120 120" xmlSpace="preserve" className="animate-rotation" data-value="360" style={{transform: "rotate(0deg)"}}>
                        <defs>
                            <path id="textPath" d="M110,59.5c0,27.6-22.4,50-50,50s-50-22.4-50-50s22.4-50,50-50S110,31.9,110,59.5z"></path>
                        </defs>
                        <g>
                            <use xlinkHref="#textPath" fill="none"></use>
                            <text><textPath xlinkHref="#textPath">Scroll for More * Scroll for More *</textPath></text>
                        </g>
                    </svg>
                    <IoIosArrowRoundDown/>
                </a>
            </div> */}
            
        </section>
    )
}

export default Hero;