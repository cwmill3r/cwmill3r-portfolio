import './Nav.scss';
import React from 'react';

const Nav = () => {
  return (
    <nav>
      <div className="magic-wand bounce-xy">:)</div>
      <div className="menu">
        <div className="menu__item active">About</div>
        <div className="menu__item">Portfolio</div>
      </div>
    </nav>
  );
};

export default Nav;
