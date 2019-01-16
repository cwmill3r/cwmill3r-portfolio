import './Nav.scss';
import React from 'react';
import { animateScroll as scroll, scroller } from 'react-scroll';

const scrollTo = elementName => {
  scroller.scrollTo(elementName, {
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
        <div
          onClick={() => scrollTo('aboutPage')}
          className="menu__item active"
        >
          About
        </div>
        <div onClick={() => scrollTo('portfolioPage')} className="menu__item">
          Portfolio
        </div>
      </div>
    </nav>
  );
};

export default Nav;
