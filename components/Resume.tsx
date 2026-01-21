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
                            <span className='resume-lines__date'>Feb 2025 - Dec 2025</span>
                        </div>
                        <div className="col-span-1 md:col-span-5">
                            <h5 className='resume-lines__title'>Lead Frontend Developer</h5>
                            <p className='resume-lines__source'>in the <a href='https://atctbd.com/' target='_blank' className='text-link-bold'>ATCT BD.</a> (sister concern of QRBD)</p>
                        </div>
                        <div className="col-span-1 md:col-span-5">
                            <p className='small resume-lines__descr'>
                                Responsible for designing, developing, and optimizing a full-scale multi-vendor eCommerce platform, delivering end-to-end buyer experiences and a robust, role-based merchant management system. Led implementation of online and offline sales workflows, including a POS system with real-time inventory synchronization. Integrated and maintained scalable REST APIs with strong validation and error handling. Drove performance optimization using Next.js and advanced React patterns, achieving excellent Lighthouse and Core Web Vitals scores while ensuring high performance and usability under heavy data loads.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-12 resume-lines__item">
                        <div className="col-span-1 md:col-span-2">
                            <span className='resume-lines__date'>Sep 2022 - Nov 2024</span>
                        </div>
                        <div className="col-span-1 md:col-span-5">
                            <h5 className='resume-lines__title'>Frontend Developer<span className='resume-lines__source'> (Project Based)</span></h5>
                            <p className='resume-lines__source'>in the <a href='https://www.onixlab.io/' target='_blank' className='text-link-bold'>Onixlab Studio Ltd.</a></p>
                        </div>
                        <div className="col-span-1 md:col-span-5">
                            <p className='small resume-lines__descr'>
                                Developed and modernized responsive websites for 10+ clients using semantic HTML5, CSS, JavaScript, and Next.js, improving performance, interactivity, and SEO. Successfully migrated legacy sites to modern frameworks, achieving measurable gains in Lighthouse scores and Core Web Vitals while keeping platforms up to date with current web technologies like Tailwind CSS.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-12 resume-lines__item">
                        <div className="col-span-1 md:col-span-2">
                            <span className='resume-lines__date'>Nov 2021 - May 2023</span>
                        </div>
                        <div className="col-span-1 md:col-span-5">
                            <h5 className='resume-lines__title'>Frontend Developer</h5>
                            <p className='resume-lines__source'>in the <a href='https://akaarit.com/' target='_blank' className='text-link-bold'>Akaar IT Ltd.</a></p>
                        </div>
                        <div className="col-span-1 md:col-span-5">
                            <p className='small resume-lines__descr'>
                                Redesigned and enhanced company websites and POS software, including dashboard visualizations with Chart.js, analytics cards, business report tables, and a restaurant reservation feature. Developed and maintained front-end solutions for 10+ e-commerce platforms using semantic HTML, Next.js, and React.js, implementing inline text editing, REST API integrations, and optimized coding structures. Collaborated closely with back-end teams to build and improve UI for ERP and CRM systems, achieving improved performance and higher Google Lighthouse scores.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-12 resume-lines__item">
                        <div className="col-span-1 md:col-span-2">
                            <span className='resume-lines__date'>May 2021 - Oct 2021</span>
                        </div>
                        <div className="col-span-1 md:col-span-5">
                            <h5 className='resume-lines__title'>Frontend Designer</h5>
                            <p className='resume-lines__source'>in the <a href='https://thecodude.com/' target='_blank' className='text-link-bold'>Thecodude</a> team</p>
                        </div>
                        <div className="col-span-1 md:col-span-5">
                            <p className='small resume-lines__descr'>Converted UI designs into pixel-perfect, fully responsive websites for <a href="https://themeforest.net/item/rasin-business-consulting-html-template/34052070?s_rank=6" target='_blank'>Themeforest</a> marketplace.</p>
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
                            <Image src='/icons/icon-nextjs.svg' alt='next' width={120} height={90} className='w-auto h-24 md:h-36 xl:h-24 3xl:h-28 mx-auto'/>
                            <h6 className='lining-nums mt-6 leading-none'>NextJs</h6>
                        </div>
                    </div>
                    <div className="col-span-1 flex grid-item-s">
                        <div className="relative w-full bg-background border border-stroke rounded-(--_radius-xl) text-center p-12">
                            <Image src='/icons/icon-reactjs.svg' alt='react' width={120} height={90} className='w-auto h-24 md:h-36 xl:h-24 3xl:h-28 mx-auto'/>
                            <h6 className='lining-nums mt-6 leading-none'>ReactJs</h6>
                        </div>
                    </div>
                    <div className="col-span-1 flex grid-item-s">
                        <div className="relative w-full bg-background border border-stroke rounded-(--_radius-xl) text-center p-12">
                            <Image src='/icons/icon-javascript.svg' alt='javascropt' width={120} height={90} className='w-auto h-24 md:h-36 xl:h-24 3xl:h-28 mx-auto'/>
                            <h6 className='lining-nums mt-6 leading-none'>Javascript</h6>
                        </div>
                    </div>
                    <div className="col-span-1 flex grid-item-s">
                        <div className="relative w-full bg-background border border-stroke rounded-(--_radius-xl) text-center p-12">
                            <Image src='/icons/icon-html.svg' alt='photoshop' width={120} height={90} className='w-auto h-24 md:h-36 xl:h-24 3xl:h-28 mx-auto'/>
                            <h6 className='lining-nums mt-6 leading-none'>HTML5</h6>
                        </div>
                    </div>
                    <div className="col-span-1 flex grid-item-s">
                        <div className="relative w-full bg-background border border-stroke rounded-(--_radius-xl) text-center p-12">
                            <Image src='/icons/icon-css.svg' alt='photoshop' width={120} height={90} className='w-auto h-24 md:h-36 xl:h-24 3xl:h-28 mx-auto'/>
                            <h6 className='lining-nums mt-6 leading-none'>CSS3</h6>
                        </div>
                    </div>
                    <div className="col-span-1 flex grid-item-s">
                        <div className="relative w-full bg-background border border-stroke rounded-(--_radius-xl) text-center p-12">
                            <Image src='/icons/icon-tailwind.svg' alt='photoshop' width={120} height={90} className='w-auto h-24 md:h-36 xl:h-24 3xl:h-28 mx-auto'/>
                            <h6 className='lining-nums mt-6 leading-none'>Tailwind Css</h6>
                        </div>
                    </div>
                    <div className="col-span-1 flex grid-item-s">
                        <div className="relative w-full bg-background border border-stroke rounded-(--_radius-xl) text-center p-12">
                            <Image src='/icons/icon-bootstrap.svg' alt='photoshop' width={120} height={90} className='w-auto h-24 md:h-36 xl:h-24 3xl:h-28 mx-auto'/>
                            <h6 className='lining-nums mt-6 leading-none'>Bootstrap</h6>
                        </div>
                    </div>
                    <div className="col-span-1 flex grid-item-s">
                        <div className="relative w-full bg-background border border-stroke rounded-(--_radius-xl) text-center p-12">
                            <Image src='/icons/icon-scss.svg' alt='photoshop' width={120} height={90} className='w-auto h-24 md:h-36 xl:h-24 3xl:h-28 mx-auto'/>
                            <h6 className='lining-nums mt-6 leading-none'>SCSS</h6>
                        </div>
                    </div>
                    <div className="col-span-1 flex grid-item-s">
                        <div className="relative w-full bg-background border border-stroke rounded-(--_radius-xl) text-center p-12">
                            <Image src='/icons/icon-redux.svg' alt='photoshop' width={120} height={90} className='w-auto h-24 md:h-36 xl:h-24 3xl:h-28 mx-auto'/>
                            <h6 className='lining-nums mt-6 leading-none'>Redux</h6>
                        </div>
                    </div>
                    <div className="col-span-1 flex grid-item-s">
                        <div className="relative w-full bg-background border border-stroke rounded-(--_radius-xl) text-center p-12">
                            <Image src='/icons/icon-zod.svg' alt='photoshop' width={120} height={90} className='w-auto h-24 md:h-36 xl:h-24 3xl:h-28 mx-auto'/>
                            <h6 className='lining-nums mt-6 leading-none'>Zod</h6>
                        </div>
                    </div>
                    <div className="col-span-1 flex grid-item-s">
                        <div className="relative w-full bg-background border border-stroke rounded-(--_radius-xl) text-center p-12">
                            <Image src='/icons/icon-hook-form.svg' alt='photoshop' width={120} height={90} className='w-auto h-24 md:h-36 xl:h-24 3xl:h-28 mx-auto'/>
                            <h6 className='lining-nums mt-6 leading-none'>React Hook Form</h6>
                        </div>
                    </div>
                    <div className="col-span-1 flex grid-item-s">
                        <div className="relative w-full bg-background border border-stroke rounded-(--_radius-xl) text-center p-12">
                            <Image src='/icons/icon-jest.svg' alt='photoshop' width={120} height={90} className='w-auto h-24 md:h-36 xl:h-24 3xl:h-28 mx-auto'/>
                            <h6 className='lining-nums mt-6 leading-none'>Jest</h6>
                        </div>
                    </div>
                    <div className="col-span-1 flex grid-item-s">
                        <div className="relative w-full bg-background border border-stroke rounded-(--_radius-xl) text-center p-12">
                            <Image src='/icons/icon-node.svg' alt='photoshop' width={120} height={90} className='w-auto h-24 md:h-36 xl:h-24 3xl:h-28 mx-auto'/>
                            <h6 className='lining-nums mt-6 leading-none'>NodeJs</h6>
                        </div>
                    </div>
                    <div className="col-span-1 flex grid-item-s">
                        <div className="relative w-full bg-background border border-stroke rounded-(--_radius-xl) text-center p-12">
                            <Image src='/icons/icon-nest.svg' alt='photoshop' width={120} height={90} className='w-auto h-24 md:h-36 xl:h-24 3xl:h-28 mx-auto'/>
                            <h6 className='lining-nums mt-6 leading-none'>NestJs</h6>
                        </div>
                    </div>
                    <div className="col-span-1 flex grid-item-s">
                        <div className="relative w-full bg-background border border-stroke rounded-(--_radius-xl) text-center p-12">
                            <Image src='/icons/icon-express.svg' alt='photoshop' width={120} height={90} className='w-auto h-24 md:h-36 xl:h-24 3xl:h-28 mx-auto'/>
                            <h6 className='lining-nums mt-6 leading-none'>ExpressJs</h6>
                        </div>
                    </div>
                    <div className="col-span-1 flex grid-item-s">
                        <div className="relative w-full bg-background border border-stroke rounded-(--_radius-xl) text-center p-12">
                            <Image src='/icons/icon-prisma.svg' alt='photoshop' width={120} height={90} className='w-auto h-24 md:h-36 xl:h-24 3xl:h-28 mx-auto'/>
                            <h6 className='lining-nums mt-6 leading-none'>Prisma</h6>
                        </div>
                    </div>
                    <div className="col-span-1 flex grid-item-s">
                        <div className="relative w-full bg-background border border-stroke rounded-(--_radius-xl) text-center p-12">
                            <Image src='/icons/icon-typeorm.svg' alt='photoshop' width={120} height={90} className='w-auto h-24 md:h-36 xl:h-24 3xl:h-28 mx-auto'/>
                            <h6 className='lining-nums mt-6 leading-none'>Type ORM</h6>
                        </div>
                    </div>
                    <div className="col-span-1 flex grid-item-s">
                        <div className="relative w-full bg-background border border-stroke rounded-(--_radius-xl) text-center p-12">
                            <Image src='/icons/icon-postgresql.svg' alt='photoshop' width={120} height={90} className='w-auto h-24 md:h-36 xl:h-24 3xl:h-28 mx-auto'/>
                            <h6 className='lining-nums mt-6 leading-none'>PostgreSQL</h6>
                        </div>
                    </div>
                    <div className="col-span-1 flex grid-item-s">
                        <div className="relative w-full bg-background border border-stroke rounded-(--_radius-xl) text-center p-12">
                            <Image src='/icons/icon-mongo.svg' alt='photoshop' width={120} height={90} className='w-auto h-24 md:h-36 xl:h-24 3xl:h-28 mx-auto'/>
                            <h6 className='lining-nums mt-6 leading-none'>MongoDB</h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume;