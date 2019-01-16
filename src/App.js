import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import LandingPage from './pages/LandingPage/LandingPage';
import AboutPage from './pages/AboutPage/AboutPage';
import PortfolioPage from './pages/PortfolioPage/PortfolioPage';
import { Element } from 'react-scroll';

// add the fab prefix for Font Awesome Icons
library.add(fab);

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <LandingPage />
        <Element name="aboutPage" className="element">
          <AboutPage />
        </Element>
        <Element name="portfolioPage" className="element">
          <PortfolioPage />
        </Element>
      </div>
    );
  }
}

export default App;
