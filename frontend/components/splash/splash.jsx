import React from 'react';
import { Link, withRouter } from 'react-router';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    const children = this.props.children;
    if(this.props.currentUser === null) {
      return (
        <div>
          <Link to={'welcome/signup'}>Sign Up</Link>
          <br></br>
          <Link to={'welcome/login'}>Log In</Link>
          { children }
        </div>
      );
    } else {
      return (
        <div>
          { children }
        </div>
      );
    }

  }
}

export default withRouter(Splash);
