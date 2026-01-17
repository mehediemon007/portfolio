import React from 'react';
import Link from 'next/link';

// *** import icons
import { LuMessageSquareMore } from "react-icons/lu";

const Header = () => {
    return (
        <header className='header'>
            <div className='flex justify-between items-center'>
                <nav>
                    <ul className='flex justify-start items-center gap-4'>
                        <li>
                            <Link href={'/'} className='menu__link btn active'>Home</Link>
                        </li>
                        <li>
                            <Link href={'/'} className='menu__link btn'>Portfolio</Link>
                        </li>
                        <li>
                            <Link href={'/'} className='menu__link btn'>About Me</Link>
                        </li>
                        <li>
                            <Link href={'/'} className='menu__link btn'>Resume</Link>
                        </li>
                        <li>
                            <Link href={'/'} className='menu__link btn'>Contact</Link>
                        </li>
                    </ul>
                </nav>
                <Link href={'/'} className='btn'><span>Let&apos;s Talk</span> <LuMessageSquareMore/></Link>
            </div>
        </header>
    )
}

export default Header;