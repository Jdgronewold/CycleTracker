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
        <div className="splash">
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
