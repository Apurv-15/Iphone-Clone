import React from 'react';
import { appleImg, bagImg, searchImg } from '../utils';
import { navLists } from '../constants';
import './NavBar.css';

const NavBar = () => {
  return (
    <header className="header">
      <nav className="nav">
        <img src={appleImg} alt="apple logo" width={14} height={19} className="logo" />

        <div className="nav-center">
          {navLists.map((nav, i) => (
            <div key={nav} className="nav-item">
              {nav}
            </div>
          ))}
        </div>
        <div className="nav-end">
          <img src={searchImg} alt="search" width={18} height={18} />
          <img src={bagImg} alt="bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
