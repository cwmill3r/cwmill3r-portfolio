import './Nav.scss';
import React from 'react';
import * as Scroll from 'react-scroll';
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from 'react-scroll';

const scrollToPortfolioPage = () => {
  scroller.scrollTo('portfolioPage', {
    duration: 1500,
    delay: 100,
    smooth: true
  });
};

const scrollToAboutPage = () => {
  scroller.scrollTo('aboutPage', {
    duration: 1500,
    delay: 100,
    smooth: true
  });
};

const Nav = () => {
  return (
    <nav>
      <div onClick={() => scroll.scrollToTop()} className="logo bounce-xy">
        :)
      </div>
      <div className="menu">
        <div onClick={() => scrollToAboutPage()} className="menu__item active">
          About
        </div>
        <div onClick={() => scrollToPortfolioPage()} className="menu__item">
          Portfolio
        </div>
      </div>
    </nav>
  );
};

export default Nav;
