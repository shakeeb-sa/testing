// src/components/common/HeroSection.jsx
import React from 'react';
import { Link } from 'react-scroll';

const HeroSection = () => {
  return (
    <section className="hero" id="hero" aria-labelledby="hero-title">
      <div className="hero-content">
        <h1 id="hero-title">Powerful Tools for Developers & SEOs</h1>
        <p>
          A curated collection of free, efficient tools designed to streamline your workflow and boost your productivity.
        </p>
        <Link to="tools" smooth={true} duration={500} offset={-80} className="hero-button">Explore Tools</Link>
      </div>
    </section>
  );
};

export default HeroSection;