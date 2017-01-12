import React from 'react';
import { Link, withRouter } from 'react-router';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", email: "", zipcode: 94105 };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateState = this.updateState.bind(this);
    this.redirect = this.redirect.bind(this);
    this.guestDemo = this.guestDemo.bind(this);
  }

  redirect() {
    this.props.router.push("/home");
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
      .then(() => this.redirect());
  }

  updateState(property) {
    return (e) => { this.setState({[property]: e.currentTarget.value});};
  }

  guestDemo(e) {
    e.preventDefault();
    const user = {username: "guest", password:"password"};
    this.setState(user);
    window.setTimeout(() => {
      this.props.processForm(user)
        .then(() => this.redirect());
    }, 1000);
  }

  logErrors() {
    let errMsg = "";
    if(this.props.errors.includes("Invalid")) {
      errMsg = errMsg + this.props.errors[0];
    }
    return errMsg;
  }

  render() {
    const logErrors = this.props.errors.map( (error, i) => (
      <li key={i}>{error}</li>
    ));
    return (
      <div className="form-container">
        <span className="form-switch">
          Please log in or {' '}
          <Link to='/welcome/signup'>Join Now</Link>
        </span>
        <form className="form-box" onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.updateState("username")}
            value={this.state.username}
            required
            placeholder="username"
          />
          <input
            type="password"
            onChange={this.updateState("password")}
            value={this.state.password}
            required
            placeholder="password"
          />
        <ul className="error-text">
          { this.logErrors() }
        </ul>
          <button>Log In!</button>
        </form>
        <br/>
        <button className="guest" onClick={this.guestDemo}>Guest Login</button>
      </div>
    );
  }
}

export default withRouter(LoginForm);
