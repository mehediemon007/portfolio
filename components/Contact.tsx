import React from 'react';

const Contact = () => {
    return (
        <section id='contact' className='sec__wrapper contact'>
            <div className='content__wrapper mb-16 md:mb-20 xl:mb-[4.7rem] 3xl:mb-[5.3rem]'>
                <p className='sub__title'>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="13px" height="13px" viewBox="0 0 13 13" fill="currentColor"><path fill="currentColor" d="M5.6,12.6c-0.5-0.8-0.7-2.4-1.7-3.5c-1-1-2.7-1.2-3.5-1.7C-0.1,7-0.1,6,0.4,5.6c0.8-0.5,2.3-0.6,3.5-1.8 C5,2.8,5.1,1.2,5.6,0.4C6-0.1,7-0.1,7.4,0.4c0.5,0.8,0.7,2.4,1.8,3.5c1.2,1.2,2.6,1.2,3.5,1.7c0.6,0.4,0.6,1.4,0,1.7 C11.8,7.9,10.2,8,9.1,9.1c-1,1-1.2,2.7-1.7,3.5C7,13.1,6,13.1,5.6,12.6z"></path></svg>
                    <span>Contact</span>
                </p>
                <h2 className=''>Let&apos;s make something awesome together!</h2>
            </div>
            <div className="content__wrapper grid-block block-large">
                <div>
                    <form action="">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="col-span-1 px-6 2xl:px-10 mb-12">
                                <input type="text" placeholder='Your Name*'/>
                            </div>
                            <div className="col-span-1 px-6 2xl:px-10 mb-12">
                                <input type="text" placeholder='Company Name'/>
                            </div>
                            <div className="col-span-1 px-6 2xl:px-10 mb-12">
                                <input type="text" placeholder='Email Address*'/>
                            </div>
                            <div className="col-span-1 px-6 2xl:px-10 mb-12">
                                <input type="text" placeholder='Phone Number*'/>
                            </div>
                            <div className="col-span-2 px-6 2xl:px-10 mb-12">
                                <textarea placeholder='A Few Words*' className='h-64 resize-none'/>
                                <div className="d-flex justify-content-between">
                                    <span>0 / 500</span>
                                </div>
                            </div>
                            <div className="col-span-2 px-6 2xl:px-10">
                                <button className='btn mobile-vertical btn-default btn-hover btn-hover-accent'>
                                    <span>Send Message</span>
                                    <i className="ph-bold ph-paper-plane-tilt"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="content__wrapper grid-block">
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 px-2 2xl:px-6">
                    <div className="col-span-1 grid-item-s">
                        <div className="socials-cards__card group">
                            <i className="ph-bold ph-linkedin-logo"></i>
                            <a className="socials-cards__link" href="https://www.linkedin.com/in/mehedi-hasan-emon/" target="_blank" rel="noopener noreferrer"></a>
                        </div>
                    </div>
                    <div className="col-span-1 grid-item-s">
                        <div className="socials-cards__card group">
                            <i className="ph-bold ph-facebook-logo"></i>
                            <a className="socials-cards__link" href="https://www.facebook.com/mehedi.emon.007" target="_blank" rel="noopener noreferrer"></a>
                        </div>
                    </div>
                    <div className="col-span-1 grid-item-s">
                        <div className="socials-cards__card group">
                            <i className="ph-bold ph-whatsapp-logo"></i>
                            <a className="socials-cards__link" href="https://wa.me/+8801629795421" target="_blank" rel="noopener noreferrer"></a>
                        </div>
                    </div>
                    <div className="col-span-1 grid-item-s">
                        <div className="socials-cards__card group">
                            <i className="ph-bold ph-messenger-logo"></i>
                            <a className="socials-cards__link" href="https://m.me/mehedi.emon.007" target="_blank" rel="noopener noreferrer"></a>
                        </div>
                    </div>
                    <div className="col-span-1 grid-item-s">
                        <div className="socials-cards__card group">
                            <i className="ph-bold ph-discord-logo"></i>
                            <a className="socials-cards__link" href="https://discord.com/users/1289504649795342389" target="_blank" rel="noopener noreferrer"></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content__wrapper">
                <div className="pt-16 md:pt-[4.7rem] 3xl:pt-[5.2rem] pb-[4.3rem] md:pb-[5.2rem] 3xl:pb-[5.7rem]">
                    <p className="teaser__text">Want to know more about me, tell me about your project or just to say hello?<a className="text-link-bold" href="mailto:example@example.com?subject=Message%20from%20your%20site">Drop me a line</a>and I&apos;ll get back as soon as possible.</p>
                </div>
            </div>
            <div className="content__wrapper">
                <div className="grid grid-cols-1 md:grid-cols-3 border-t border-t-stroke pt-[4.3rem] md:pt-[3.3rem] 2xl:pt-[3.3rem] pb-[4.2rem] md:pb-[3.2rem] lg:pb-[10.3rem] 2xl:pb-[14.4rem]">
                    <div className="col-span-1 mb-[1.7rem] md:mb-0">
                        <p className="text-[1.6rem]/[1.2] font-bold font-sync text-gray-300">Location</p>
                        <p className="text-[1.6rem]/[1.4] font-normal font-sync text-(--text-muted) lining-nums">
                            Dhaka, Bangladesh
                        </p>
                    </div>
                    <div className="col-span-1 mb-[1.7rem] md:mb-0">
                        <p className="text-[1.6rem]/[1.2] font-bold font-sync text-gray-300">Phone</p>
                        <p className="text-[1.6rem]/[1.4] font-normal font-sync text-(--text-muted) lining-nums">
                            <a className="text-link-bold text-(--text-muted)" href="tel:+8801629795421" rel="noopener noreferrer">+880-1629-795421</a>
                        </p>
                    </div>
                    <div className="col-span-1 mb-[1.7rem] md:mb-0">
                        <p className="text-[1.6rem]/[1.2] font-bold font-sync text-gray-300">Email</p>
                        <p className="text-[1.6rem]/[1.4] font-normal font-sync text-(--text-muted) lining-nums">
                            <a className="text-link-bold text-(--text-muted)" href="mailto:mehediemon7@gmail.com" rel="noopener noreferrer">mehediemon7@gmail.com</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;