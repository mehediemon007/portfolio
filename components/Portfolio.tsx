import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Portfolio = () => {
    return (
        <section id='portfolio' className='sec__wrapper portfolio md:pt-44 md:pb-16 2xl:pt-60 2xl:pb-8 3xl:pt-64'>
            <div className='content__wrapper'>
                <p className='sub__title'>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="13px" height="13px" viewBox="0 0 13 13" fill="currentColor"><path fill="currentColor" d="M5.6,12.6c-0.5-0.8-0.7-2.4-1.7-3.5c-1-1-2.7-1.2-3.5-1.7C-0.1,7-0.1,6,0.4,5.6c0.8-0.5,2.3-0.6,3.5-1.8 C5,2.8,5.1,1.2,5.6,0.4C6-0.1,7-0.1,7.4,0.4c0.5,0.8,0.7,2.4,1.8,3.5c1.2,1.2,2.6,1.2,3.5,1.7c0.6,0.4,0.6,1.4,0,1.7 C11.8,7.9,10.2,8,9.1,9.1c-1,1-1.2,2.7-1.7,3.5C7,13.1,6,13.1,5.6,12.6z"></path></svg>
                    <span>Portfolio</span>
                </p>
                <h2 className=''>Check out my featured projects</h2>
            </div>
            <div className='content__wrapper grid-block'>
                <div className="grid grid-cols-2">
                    <div className='col-span-1'>
                        <figure className='relative grid-item'>
                            <Link href={'/'} className='relative block rounded-(--_radius-xl) overflow-hidden xl:scale-100 xl:transition-transform xl:duration-300 xl:ease-(--_animbezier) hover:xl:transform-[scale3d(1.03,1.03,1.03)]'>
                                <Image src='/project1.webp' width={800} height={800} alt='Project1'/>
                            </Link>
                            <figcaption className="absolute bottom-0 left-6 2xl:left-10 w-[calc(100%-3rem)] 2xl:w-[calc(100%-5rem)] py-10 px-12" itemProp="caption description">
                                <h5 className="hidden">Isometric House</h5>
                                <div className="card__tags d-flex flex-wrap">
                                    <span className="rounded-tag text-(--text-opp-light) bg-white">Illustrations</span>
                                    <span className="rounded-tag text-(--text-opp-light) bg-white">3D Render</span>
                                </div>
                                <p className="small hidden">Mauris porttitor lobortis ligula, quis molestie lorem scelerisque eu. Morbi aliquam enim odio.</p>
                            </figcaption>
                        </figure>
                    </div>
                    <div className='col-span-1'>
                        <figure className='relative grid-item'>
                            <Link href={'/'} className='relative block rounded-(--_radius-xl) overflow-hidden xl:scale-100 xl:transition-transform xl:duration-300 xl:ease-(--_animbezier) hover:xl:transform-[scale3d(1.03,1.03,1.03)]'>
                                <Image src='/project2.webp' width={800} height={800} alt='Project2'/>
                            </Link>
                            <figcaption className="absolute bottom-0 left-6 2xl:left-10 w-[calc(100%-3rem)] 2xl:w-[calc(100%-5rem)] py-10 px-12" itemProp="caption description">
                                <h5 className="hidden">Isometric House</h5>
                                <div className="card__tags d-flex flex-wrap">
                                    <span className="rounded-tag text-(--text-light) bg-background">Illustrations</span>
                                    <span className="rounded-tag text-(--text-light) bg-background">3D Render</span>
                                </div>
                                <p className="small hidden">Mauris porttitor lobortis ligula, quis molestie lorem scelerisque eu. Morbi aliquam enim odio.</p>
                            </figcaption>
                        </figure>
                    </div>
                    <div className='col-span-1'>
                        <figure className='relative grid-item'>
                            <Link href={'/'} className='relative block rounded-(--_radius-xl) overflow-hidden xl:scale-100 xl:transition-transform xl:duration-300 xl:ease-(--_animbezier) hover:xl:transform-[scale3d(1.03,1.03,1.03)]'>
                                <Image src='/project3.webp' width={800} height={800} alt='Project3'/>
                            </Link>
                            <figcaption className="absolute bottom-0 left-6 2xl:left-10 w-[calc(100%-3rem)] 2xl:w-[calc(100%-5rem)] py-10 px-12" itemProp="caption description">
                                <h5 className="hidden">Isometric House</h5>
                                <div className="card__tags d-flex flex-wrap">
                                    <span className="rounded-tag text-(--text-light) bg-background">Illustrations</span>
                                    <span className="rounded-tag text-(--text-light) bg-background">3D Render</span>
                                </div>
                                <p className="small hidden">Mauris porttitor lobortis ligula, quis molestie lorem scelerisque eu. Morbi aliquam enim odio.</p>
                            </figcaption>
                        </figure>
                    </div>
                     <div className='col-span-1'>
                        <figure className='relative grid-item'>
                            <Link href={'/'} className='relative block rounded-(--_radius-xl) overflow-hidden xl:scale-100 xl:transition-transform xl:duration-300 xl:ease-(--_animbezier) hover:xl:transform-[scale3d(1.03,1.03,1.03)]'>
                                <Image src='/project4.webp' width={800} height={800} alt='Project4'/>
                            </Link>
                            <figcaption className="absolute bottom-0 left-6 2xl:left-10 w-[calc(100%-3rem)] 2xl:w-[calc(100%-5rem)] py-10 px-12" itemProp="caption description">
                                <h5 className="hidden">Isometric House</h5>
                                <div className="card__tags d-flex flex-wrap">
                                    <span className="rounded-tag text-(--text-opp-light) bg-white">Illustrations</span>
                                    <span className="rounded-tag text-(--text-opp-light) bg-white">3D Render</span>
                                </div>
                                <p className="small hidden">Mauris porttitor lobortis ligula, quis molestie lorem scelerisque eu. Morbi aliquam enim odio.</p>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;