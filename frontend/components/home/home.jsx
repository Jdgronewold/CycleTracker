import React from 'react';
import HomeNav from './home_nav';

const Home = ({children}) => (
  <div>
    <HomeNav />
    { children }
  </div>
);

export default Home;
