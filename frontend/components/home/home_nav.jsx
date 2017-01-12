import React from 'react';
import { Link } from 'react-router';

const HomeNav = () => (
  <div className="home-nav">
    <Link to="home/dashboard"> Dashboard </Link>
    <Link to="home/feed"> Activity Feed </Link>
    <Link to="hikes/create"> Create Route </Link>
    <Link to="workouts/create"> Log Trip/Workout </Link>
  </div>
);

export default HomeNav;
