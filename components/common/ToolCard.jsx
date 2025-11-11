// src/components/common/ToolCard.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ToolCard = ({ icon, title, description, link, linkText, linkIcon }) => {
  return (
    <div className="tool-card">
      <div className="tool-icon"><FontAwesomeIcon icon={icon} /></div>
      <h3 className="tool-title">{title}</h3>
      <p className="tool-desc">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="btn">
        {linkText} <FontAwesomeIcon icon={linkIcon} className="fa-fw" />
      </a>
    </div>
  );
};

export default ToolCard;