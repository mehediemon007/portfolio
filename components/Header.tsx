"use client";

import React, { useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
    // Track which section is active
    const [activeSection, setActiveSection] = useState("home");

    const menu = [
        { label: "Home", id: "home" },
        { label: "Portfolio", id: "portfolio" },
        { label: "About Me", id: "about-me" },
        { label: "Resume", id: "resume" },
        { label: "Contact", id: "contact" },
    ];

    const handleSetActive = (id: string) => {
        setActiveSection(id);
    };

    return (
        <header className="header">
            <div className="flex justify-between items-center">
                <nav>
                    <ul className="flex gap-4">
                        {menu.map((item) => (
                            <li key={item.id}>
                                <Link
                                    to={item.id}
                                    spy
                                    smooth
                                    duration={500}
                                    offset={0} // adjust for fixed header
                                    onSetActive={handleSetActive}
                                    className={`menu__link btn ${
                                        activeSection === item.id ? "active" : ""
                                    }`}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <a
                    href="mailto:mehediemon7@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-default btn-hover btn-hover-accent"
                >
                    <span>Let&apos;s Talk</span>
                    <i className="ph-bold ph-chat-dots"></i>
                </a>
            </div>
        </header>
    );
};

export default Header;
