import React from 'react';
import { Link, hashHistory } from 'react-router';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleClick(property) {
    return () => hashHistory.push(`welcome/${property}`);
  }

  handleLogout() {
    this.props.logout().then( () => hashHistory.push("welcome"));
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
        <div className="nav-bar-container">
          <div className="nav-bar-left">
            <Link to="home">Map My Hike</Link>
          </div>
          <div className="nav-bar-right">
            <button onClick={this.handleLogout}>Log Out</button>
          </div>
        </div>
      );
    }
  }
}

export default NavBar;
