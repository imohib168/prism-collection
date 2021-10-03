import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";

import { FaFacebook, FaTwitter, FaInstagramSquare, FaWhatsappSquare } from 'react-icons/fa';
import { RiFacebookFill, RiInstagramLine, RiWhatsappLine } from 'react-icons/ri';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footerContainer">
                <div className="linksContainer">
                    <h2 className="heading">Links</h2>
                    <ul className="links1">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About us</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact us</Link>
                        </li>
                    </ul>
                </div>
                <div className="newsContainer">
                    <h2 className="heading">Latest News</h2>
                    <h3>The Big Launch</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, odit? Lorem ipsum dolor sit amet.
                    </p>
                </div>
                <div className="socialLinksContainer">
                    <h2 className="heading">Follow Us</h2>
                    <ul>
                        <li>
                            <a target="_blank" href="https://www.facebook.com/"><RiFacebookFill /></a>
                        </li>
                        <li>
                            <a target="_blank" href="https://www.twitter.com/"><FaTwitter /></a>
                        </li>
                        <li>
                            <a target="_blank" href="https://www.whatsapp.com/"><RiWhatsappLine /></a>
                        </li>
                        <li>
                            <a target="_blank" href="https://www.instagram.com/"><RiInstagramLine /></a>
                        </li>
                    </ul>
                </div>
                <div className="newsLetterContainer">
                    <h2 className="heading">Newsletter</h2>
                    <p>Sign up for the latest news, offers <br /> and styles</p>
                    <form>
                        <input type="email" name="Email" />
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </footer>
    )
}
