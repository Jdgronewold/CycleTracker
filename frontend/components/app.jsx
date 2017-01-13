import React from 'react';
import { withRouter } from 'react-router';
import NavContainer from './topsmileNav/nav_container';


const App = ({children}) => (
  <div>
    <NavContainer />
      { children }
    </div>
);

export default App;
