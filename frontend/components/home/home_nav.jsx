import React from 'react';
import { Link } from 'react-router';

const HomeNav = () => (
  <div className="home-nav-cont">
    <div className="home-nav">
      <div className="home-nav-dashboard">
        <Link
          to="home/dashboard"
          activeClassName="selected-dash"> Dashboard </Link>
      </div>
      <div className="home-nav-feed">
        <Link
          to="home/feed"
          activeClassName="selected-feed"> Activity Feed </Link>
      </div>
    </div>
  </div>
);

export default HomeNav;
