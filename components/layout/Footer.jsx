// src/components/layout/Footer.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="footer-content">
        <h3 className="footer-title">Get in Touch</h3>
        <p className="footer-description">Feel free to reach out via email or connect on social media.</p>
        <div className="social-links">
          <a href="mailto:shakeeb.sa.ahmed@gmail.com" aria-label="Email Shakeeb Ahmed" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope} /></a>
          <a href="https://github.com/shakeeb-sa/" aria-label="GitHub Profile" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
          <a href="https://pk.linkedin.com/in/shakeeb-ahmed-034093370" aria-label="LinkedIn Profile" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href="https://wa.me/923331234567" aria-label="Contact on WhatsApp" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faWhatsapp} /></a>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} DevTools Hub. Created by Shakeeb Ahmed.</p>
      </div>
    </footer>
  );
};

export default Footer;