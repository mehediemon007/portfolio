"use client";

import React, { useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
    // Track which section is active
    const [activeSection, setActiveSection] = useState("home");

    const menu = [
        { label: "Home", icon: "ph-house-simple", id: "home" },
        { label: "Portfolio", icon: "ph-squares-four", id: "portfolio" },
        { label: "About Me", icon: "ph-user", id: "about-me" },
        { label: "Resume", icon: "ph-article", id: "resume" },
        { label: "Contact", icon: "ph-envelope", id: "contact" },
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
                                    <span>{item.label}</span>
                                    <i className={`ph-bold ${item.icon}`}></i>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <a
                    href="mailto:mehediemon7@gmail.com"
                    rel="noopener noreferrer"
                    className="header__trigger btn btn-default btn-hover btn-hover-accent"
                >
                    <span className="hidden lg:inline">Let&apos;s Talk</span>
                    <i className="ph-bold ph-chat-dots"></i>
                </a>
            </div>
        </header>
    );
};

export default Header;
