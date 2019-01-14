import './AboutPage.scss';
import '../../styles/logo.svg';
import React from 'react';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="content-grid">
        <h1>About</h1>
        <div className="about-wrapper">
          <div className="about-content">
            <p>
              I am heavily into <span className="highlight">JavaScript</span>{' '}
              and constantly learning all I can.
            </p>
            <p>
              I am excited to start my career as an{' '}
              <span className="highlight">Associate Engineer at PetSmart!</span>
            </p>
            <p>
              I built this site with <span className="highlight">React</span>{' '}
              with a lot of inspiration from{' '}
              <a className="highlight" href="https://github.com/flexdinesh">
                Dinesh Pandiyan's
              </a>{' '}
              <a
                className="highlight"
                href="https://github.com/flexdinesh/dev-landing-page"
              >
                portfolio
              </a>
              .
            </p>
            <p>React-Redux, Node.js, and C# are my thing these days.</p>
            <p className="text-emoji">{`<3`}</p>
          </div>
          `
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
