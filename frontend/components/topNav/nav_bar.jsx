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
            <Link to="home">Ride Tracker</Link>
          </div>
          <div className="nav-bar-right">
            <button onClick={this.handleClick("signup")}>Sign Up</button>
            <button onClick={this.handleClick("login")}>Log In</button>
            <button onClick={this.handleDemo}>Demo</button>
          </div>
        </div>
      );
    } else {
      const photoSrc = this.props.currentUser.picture || "http://res.cloudinary.com/dggj2pmde/image/upload/c_thumb,g_center,r_30,w_125/v1484542818/pexels-photo-134705_dlcitb.jpg";
      return (
        <div className="nav-bar-container">
          <div className="nav-bar-left">
            <Link className="links" to="home">Ride Tracker</Link>
            <div>
              <Link className="links-small" to="hikes">Routes</Link>
              <Link className="links-small" to="friends">Friends</Link>
            </div>
          </div>
          <div className="nav-bar-right">
            <img id="thmbnail" src={photoSrc} alt={"User Photo"}></img>
            <ul className="nav-drop">
              <li onClick={this.handleLogout}> Log Out</li>
            </ul>
          </div>
        </div>
      );
    }
  }
}

export default withRouter(NavBar);
