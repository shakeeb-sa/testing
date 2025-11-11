// src/components/layout/Header.jsx
import React from 'react';
import { Link } from 'react-scroll'; // For smooth scrolling
import { useTheme } from '../../contexts/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header">
      <nav className="nav-container" role="navigation" aria-label="Main Navigation">
        <Link to="hero" smooth={true} duration={500} className="logo" aria-label="Homepage" style={{ cursor: 'pointer' }}>
          <FontAwesomeIcon icon={faTools} />
          <span>DevTools Hub</span>
        </Link>

        <div className="nav-right-group">
          <ul id="nav-menu">
            <li><Link to="hero" smooth={true} duration={500} spy={true}>Home</Link></li>
            <li><Link to="tools" smooth={true} duration={500} spy={true} offset={-80}>Tools</Link></li>
            <li><Link to="contact" smooth={true} duration={500} spy={true}>Contact</Link></li>
          </ul>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;