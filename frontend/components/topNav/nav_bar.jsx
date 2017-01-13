import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  handleClick(property) {
    return () => hashHistory.push(`welcome/${property}`);
  }

  handleLogout() {
    this.props.logout().then( () => hashHistory.push("welcome"));
  }

  handleDemo() {
    const user = {username: "guest", password: "password" };
    this.props.login(user).then( () => this.props.router.push("/home"));
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
            <button onClick={this.handleDemo}>Demo</button>
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

export default withRouter(NavBar);
