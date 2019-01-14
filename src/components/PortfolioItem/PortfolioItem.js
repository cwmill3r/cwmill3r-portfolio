import './PortfolioItem.scss';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PortfolioItem = props => {
  return (
    <div className="portfolio-item">
      <div className="portfolio-item__title">{props.title}</div>
      <div className="portfolio-item__desc">{props.description}</div>
      <div className="portfolio-item__icon">
        <FontAwesomeIcon icon={props.icon} />
      </div>
      <div className="portfolio-item__links">
        <a target="_blank" rel="noopener noreferrer" href={props.link}>
          {props.linkTitle}
        </a>
      </div>
    </div>
  );
};

export default PortfolioItem;
