import React from 'react';
import { NavLink } from 'react-router-dom';
import NYTLogo from '../images/times_logo.png';

const Nav = () => {
  return (
    <div className="navWrapper">
      <span className="headerText">New York Times</span>
      <div className="centered">
        <NavLink to="/readinglist" exact>Reading List</NavLink>
        <img src={NYTLogo} alt="New York Times" />
      </div>
      <span className="normalText">Search Articles</span>
    </div>
  );
};

export default Nav;
