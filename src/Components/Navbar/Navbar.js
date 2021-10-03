import React from 'react';
import "./Navbar.css";

import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export const Navbar = () => {

    const [navOpen, setNavOpen] = useState(false);
    const { pathname } = useLocation();

    return (
        <nav className="navbar">
            <div className="navbarContainer">
                <div onClick={() => setNavOpen(false)} className="logoContainer">
                    PRISM COLLECTION
                </div>
                <div className="hamburger">
                    <div
                        onClick={() => setNavOpen(!navOpen)}
                        className={navOpen === true ? 'menu-btn open' : 'menu-btn'}
                    >
                        <div className="menu-btn_burger"></div>
                    </div>
                </div>
                <div className={!navOpen ? 'itemsContainer' : 'itemsContainer active'}>
                    <ul>
                        <li onClick={() => setNavOpen(false)}>
                            <Link className="link" to="/">Home</Link>
                        </li>
                        <li onClick={() => setNavOpen(false)}>
                            <Link className="link" to="/about">About</Link>
                        </li>
                        <li onClick={() => setNavOpen(false)}>
                            {pathname !== "/" ? (
                                <Link className="link" to="/">Collection</Link>
                            ) : (
                                <a className="link" href="#collection">Collection</a>
                            )}
                        </li>
                        <li onClick={() => setNavOpen(false)}>
                            <Link className="link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
