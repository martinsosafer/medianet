import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-links">
                    <a href="#">Home</a>
                    <a href="#">About Us</a>
                    <a href="#">Contact Us</a>
                </div>
                <div className="footer-copyright">
                    Copyright © My Website
                </div>
            </div>
        </footer>
    );
};

export default Footer;
