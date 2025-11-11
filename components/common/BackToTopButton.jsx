// src/components/common/BackToTopButton.jsx
import React from 'react';
import useScrollPosition from '../../hooks/useScrollPosition';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const BackToTopButton = () => {
  const scrollY = useScrollPosition();

  // Determine if the button should be visible
  const isVisible = scrollY > 300;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Dynamically set the className based on visibility
  const buttonClassName = `back-to-top ${isVisible ? 'visible' : ''}`;

  return (
    <button
      className={buttonClassName}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </button>
  );
};

export default BackToTopButton;