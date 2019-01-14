import './LandingPage.scss';
import React from 'react';
import Nav from '../../components/Nav/Nav';
import SocialIcons from '../../components/SocialIcons/SocialIcons';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Nav />
      <main>
        <div className="intro-wrapper">
          <div className="intro-name">Hello, I'm Chris Miller</div>
          <div className="tagline">
            Junior Dev | Shih Tzu l0v3r | Leaf Village Shinobi
          </div>
          <SocialIcons />
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
