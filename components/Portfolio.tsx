import React from 'react';
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
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className='col-span-1'>
                        <figure className='relative grid-item'>
                            <a href='https://bazrin.com/' target="_blank" rel="noopener noreferrer" className='relative block max-h-[800px] rounded-(--_radius-xl) overflow-hidden xl:scale-100 xl:transition-transform xl:duration-300 xl:ease-(--_animbezier) hover:xl:transform-[scale3d(1.03,1.03,1.03)]'>
                                <Image src='/bazrin-ecommerce.webp' width={800} height={800} alt='Project1'/>
                            </a>
                            <figcaption className="py-10" itemProp="caption description">
                                <a href='https://bazrin.com/' target="_blank" rel="noopener noreferrer">
                                    <h5>Bazrin Multi-vendor Ecommerce</h5>
                                </a>
                                <div className="card__tags d-flex flex-wrap">
                                    <span className="rounded-tag text-(--text-opp-light) bg-secondary">NextJs</span>
                                    <span className="rounded-tag text-(--text-opp-light) bg-secondary">ReactJs</span>
                                    <span className="rounded-tag text-(--text-opp-light) bg-secondary">Tailwind CSS</span>
                                    <span className="rounded-tag text-(--text-opp-light) bg-secondary">Shadcn UI</span>
                                    <span className="rounded-tag text-(--text-opp-light) bg-secondary">React Hook Form</span>
                                    <span className="rounded-tag text-(--text-opp-light) bg-secondary">Zustand</span>
                                </div>
                                <p className="small"><a href='https://bazrin.com/' target="_blank" rel="noopener noreferrer">Bazrin.com</a> is a responsive multi-vendor e-commerce web application designed to showcase and sell consumer products through a clean, user-friendly interface. The project focuses on delivering a smooth shopping experience with product listing, detailed product pages, cart functionality, and checkout flow.</p>
                            </figcaption>
                        </figure>
                    </div>
                    <div className='col-span-1'>
                        <figure className='relative grid-item'>
                            <a href='https://merchant.bazrin.com/' target="_blank" rel="noopener noreferrer" className='relative block max-h-[800px] rounded-(--_radius-xl) overflow-hidden xl:scale-100 xl:transition-transform xl:duration-300 xl:ease-(--_animbezier) hover:xl:transform-[scale3d(1.03,1.03,1.03)]'>
                                <Image src='/bazrin-dashboard.webp' width={800} height={800} alt='Project2'/>
                            </a>
                            <figcaption className="py-10" itemProp="caption description">
                                <a href='https://merchant.bazrin.com/' target="_blank" rel="noopener noreferrer">
                                    <h5>Bazrin Merchant Panel</h5>
                                </a>
                                <div className="card__tags d-flex flex-wrap">
                                    <div className="card__tags d-flex flex-wrap">
                                        <span className="rounded-tag text-(--text-opp-light) bg-secondary">NextJs</span>
                                        <span className="rounded-tag text-(--text-opp-light) bg-secondary">ReactJs</span>
                                        <span className="rounded-tag text-(--text-opp-light) bg-secondary">Tailwind CSS</span>
                                        <span className="rounded-tag text-(--text-opp-light) bg-secondary">Shadcn UI</span>
                                        <span className="rounded-tag text-(--text-opp-light) bg-secondary">React Hook Form</span>
                                        <span className="rounded-tag text-(--text-opp-light) bg-secondary">Context Api</span>
                                        <span className="rounded-tag text-(--text-opp-light) bg-secondary">NextAuth</span>
                                        <span className="rounded-tag text-(--text-opp-light) bg-secondary">TanStack Table</span>
                                        <span className="rounded-tag text-(--text-opp-light) bg-secondary">ApexCharts</span>
                                    </div>
                                </div>
                                <p className="small">The Bazrin Merchant Panel is a web-based admin and POS management system built to give merchants full control over their online and in-store operations from a single platform. It is designed for efficiency, accuracy, and real-time synchronization between sales channels.</p>
                            </figcaption>
                        </figure>
                    </div>
                    <div className='col-span-1'>
                        <figure className='relative grid-item'>
                            <a href='https://sokherhut.com/' target="_blank" rel="noopener noreferrer" className='relative block max-h-[800px] rounded-(--_radius-xl) overflow-hidden xl:scale-100 xl:transition-transform xl:duration-300 xl:ease-(--_animbezier) hover:xl:transform-[scale3d(1.03,1.03,1.03)]'>
                                <Image src='/sokherhut.webp' width={800} height={800} alt='Project3'/>
                            </a>
                            <figcaption className="py-10" itemProp="caption description">
                                <a href='https://sokherhut.com/' target="_blank" rel="noopener noreferrer">
                                    <h5>Sokherhut Ecommerce</h5>
                                </a>
                                <div className="card__tags d-flex flex-wrap">
                                    <span className="rounded-tag text-(--text-opp-light) bg-secondary">NextJs</span>
                                    <span className="rounded-tag text-(--text-opp-light) bg-secondary">ReactJs</span>
                                    <span className="rounded-tag text-(--text-opp-light) bg-secondary">Tailwind CSS</span>
                                    <span className="rounded-tag text-(--text-opp-light) bg-secondary">Swiper</span>
                                </div>
                                <p className="small"><a href='https://sokherhut.com/' target="_blank" rel="noopener noreferrer">Sokherhut.com</a> is a consumer-focused e-commerce web platform built to facilitate online shopping with an emphasis on affordability and accessibility for the local market. From a development standpoint, the project is structured as a full-stack web application that supports end-to-end e-commerce operations.</p>
                            </figcaption>
                        </figure>
                    </div>
                    <div className='col-span-1'>
                        <figure className='relative grid-item'>
                            <a href='https://prism.fi/' target="_blank" rel="noopener noreferrer" className='relative block max-h-[800px] rounded-(--_radius-xl) overflow-hidden xl:scale-100 xl:transition-transform xl:duration-300 xl:ease-(--_animbezier) hover:xl:transform-[scale3d(1.03,1.03,1.03)]'>
                                <Image src='/prism.webp' width={800} height={800} alt='Project4'/>
                            </a>
                            <figcaption className="py-10" itemProp="caption description">
                                <a href='https://prism.fi/' target="_blank" rel="noopener noreferrer">
                                    <h5>Prism Crypto Card</h5>
                                </a>
                                <div className="card__tags d-flex flex-wrap">
                                    <span className="rounded-tag text-(--text-opp-light) bg-secondary">NextJs</span>
                                    <span className="rounded-tag text-(--text-opp-light) bg-secondary">ReactJs</span>
                                    <span className="rounded-tag text-(--text-opp-light) bg-secondary">Tailwind CSS</span>
                                </div>
                                <p className="small"><a href='https://prism.fi/' target="_blank" rel="noopener noreferrer">Prism.fi</a> is a financial web platform focused on enabling users to spend cryptocurrency seamlessly worldwide by integrating traditional payment infrastructure with digital assets. The core product offering centers around crypto-backed payment cards that allow users to deposit various cryptocurrencies and spend them like fiat money through Visa’s global network.</p>
                            </figcaption>
                            {/* <figcaption className="absolute bottom-0 left-6 2xl:left-10 w-[calc(100%-3rem)] 2xl:w-[calc(100%-5rem)] py-10 px-12" itemProp="caption description">
                            </figcaption> */}
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;