import React from 'react';
import { Link, hashHistory } from 'react-router';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(property) {
    return () => hashHistory.push(`welcome/${property}`);
  }


  render() {
    if (this.props.currentUser === null) {
      return(
        <div className="nav-bar-container">
          <div className="nav-bar-left">
            <Link to="home">Map My Hike</Link>
          </div>
          <div className="nav-bar-right">
            <button onClick={this.handleClick("signup")}>Sign Up</button>
            <button onClick={this.handleClick("login")}>Log In</button>
          </div>
        </div>
      );
    } else {
      return (
        <div>Stuff Goes here</div>
      );
    }
  }
}

export default NavBar;
