import React from 'react'
import './Contact.css';
import ContactImage from './../../images/contact.svg'

export const Contact = () => {
    return (
        <main className="contact">
            <div className="contactContainer">
                <div className="infoContainer">
                    <h1>Contact Us</h1>
                    <div className="contactDetails">
                        <div>
                            <h2>Email</h2>
                            <a href="mailto:example@admin.com"><p>example@admin.com</p></a>
                        </div>
                        <div>
                            <h2>Phone</h2>
                            <a href="tel:+92 321 1237654"><p>+92 321 1237654</p></a>
                        </div>
                        <div>
                            <h2>Address</h2>
                            <p>Unknown Address Lorem, ipsum dolor.</p>
                        </div>
                    </div>
                </div>
                <div className="svg">
                    <img src={ContactImage} alt="ContactImage" />
                </div>
            </div>
        </main>
    )
}
