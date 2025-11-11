// src/components/common/ToolsSection.jsx
import React from 'react';
import ToolCard from './ToolCard';
import { faLink, faExchangeAlt, faDownload, faPlay, faArrowRight, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faChrome } from '@fortawesome/free-brands-svg-icons';

// Data is separated from presentation
const toolsData = [
  {
    icon: faLink,
    title: 'URL Path Separator',
    description: 'Efficiently split and manage URL paths by separating each segment for clearer analysis and navigation.',
    link: 'https://shakeeb-sa.github.io/url-path-separator/',
    linkText: 'Try Now',
    linkIcon: faArrowRight
  },
  {
    icon: faExchangeAlt,
    title: 'Multi-Format Link Converter',
    description: 'Instantly convert links between various formats, including BBCode, HTML, and plain URLs.',
    link: 'https://shakeeb-sa.github.io/multi-format-link-converter',
    linkText: 'Try Now',
    linkIcon: faArrowRight
  },
  {
    icon: faChrome,
    title: 'Guestbook Extractor',
    description: 'A Chrome extension that automates backlink extraction from guestbooks and removes duplicates.',
    link: 'https://shakeeb-sa.github.io/guestbook-extractor-chrome-extension/',
    linkText: 'Download Now',
    linkIcon: faDownload
  },
  {
    icon: faLaptopCode,
    title: 'All About Coding',
    description: 'A comprehensive collection of coding tutorials and video resources curated from YouTube.',
    link: 'https://shakeeb-sa.github.io/all-about-coding/',
    linkText: 'Watch Now',
    linkIcon: faPlay
  }
];

const ToolsSection = () => {
  return (
    <section id="tools" aria-labelledby="tools-heading">
      <h2 id="tools-heading">Our Tools & Resources</h2>
      <div className="tools-grid">
        {toolsData.map((tool, index) => (
          <ToolCard
            key={index}
            icon={tool.icon}
            title={tool.title}
            description={tool.description}
            link={tool.link}
            linkText={tool.linkText}
            linkIcon={tool.linkIcon}
          />
        ))}
      </div>
    </section>
  );
};

export default ToolsSection;