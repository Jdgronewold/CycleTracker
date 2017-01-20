import React from 'react';
import { Link } from 'react-router';

const HomeNav = () => (
  <div className="home-nav-cont">
    <div className="home-nav">
      <div className="home-nav-div">
        <Link to="home/dashboard"> Dashboard </Link>
      </div>
      <div className="home-nav-div">
        <Link to="home/feed"> Activity Feed </Link>
      </div>
    </div>
  </div>
);

export default HomeNav;
