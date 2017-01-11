import React from 'react';
import { Link, withRouter } from 'react-router';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", email: "", zipcode: 94105 };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateState = this.updateState.bind(this);
    this.redirect = this.redirect.bind(this);
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

  render() {

    return (
      <div className="form-container">
        <span className="form-switch">
          Please log in or {' '}
          <Link to='/welcome/signup'>Join Now</Link>
        </span>
        <form className="form-box" onSubmit={this.handleSubmit}>
          <label>Username
            <br/>
            <input
              type="text"
              onChange={this.updateState("username")}
              value={this.state.username}
              />
          </label>
          <br/>
          <label>Password
            <br/>
            <input
              type="password"
              onChange={this.updateState("password")}
              value={this.state.password}
            />
          </label>
          <button>Log In!</button>
        </form>
        <br/>
      </div>
    );
  }
}

export default withRouter(LoginForm);
