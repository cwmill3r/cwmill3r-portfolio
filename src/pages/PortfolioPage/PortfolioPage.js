import './PortfolioPage.scss';
import React from 'react';
import PortfolioItem from '../../components/PortfolioItem/PortfolioItem';
import portfolioItems from './portfolio-items';

const renderItems = () => {
  return portfolioItems.map((item, i) => {
    return (
      <PortfolioItem
        className="portfolio__items__links"
        key={i}
        title={item.title}
        description={item.description}
        icon={item.icon}
        linkTitle={item.linkTitle}
        link={item.link}
      />
    );
  });
};

class PortfolioPage extends React.Component {
  componentDidMount() {
    renderItems();
  }

  render() {
    return (
      <div className="portfolio-page">
        <div className="content-grid">
          <h1>Portfolio</h1>
          <div className="portfolio-wrapper">{renderItems()}</div>
        </div>
      </div>
    );
  }
}

export default PortfolioPage;
