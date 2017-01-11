import React from 'react';
import { withRouter } from 'react-router';


const App = ({children}) => (
  <div>
    <h1>Entire App Here!</h1>
      { children }
    </div>
);

export default App;
