import './SocialIcons.scss';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialIcons = () => {
  return (
    <div className="social-icons animate-icons">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/cwmill3r"
      >
        <FontAwesomeIcon icon={['fab', 'github']} />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/christopher-miller-062a05140/"
      >
        <FontAwesomeIcon icon={['fab', 'linkedin']} />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://medium.com/@cwmill3r"
      >
        <FontAwesomeIcon icon={['fab', 'medium']} />
      </a>
    </div>
  );
};

export default SocialIcons;

//style={{ color: colorPrimary }} for icons
