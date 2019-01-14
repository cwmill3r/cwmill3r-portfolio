import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import LandingPage from './pages/LandingPage/LandingPage';
import AboutPage from './pages/AboutPage/AboutPage';
import PortfolioPage from './pages/PortfolioPage/PortfolioPage';
library.add(fab);

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <LandingPage />
        <AboutPage />
        <PortfolioPage />
      </div>
    );
  }
}

export default App;
