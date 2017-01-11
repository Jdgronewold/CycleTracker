import React from 'react';
import { Link, withRouter } from 'react-router';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", email: "", zipcode: 94105 };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateState = this.updateState.bind(this);
    this.redirect = this.redirect.bind(this);
    this._createErrors = this._createErrors.bind(this);
  }

  redirect() {
    this.props.router.push("/home");
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.signup(user)
      .then(() => {
        this.redirect();
      });
  }

  updateState(property) {
    return (e) => { this.setState({[property]: e.currentTarget.value});};
  }

  _createErrors(property) {
    let errorMsg = "";
    this.props.errors.forEach( error => {
      if(error.includes(property)) {
        errorMsg = errorMsg + error;
      }
    });
    return (
      <ul className="error-text">
        <li>{errorMsg}</li>
      </ul>
    );
  }

  render() {

    return (
      <div className="form-container">
        <span className="form-switch">
          Please sign up or {' '}
          <Link to='/welcome/login'>Log In</Link>
        </span>
        <br/>
        <form className="form-box" onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.updateState("username")}
            value={this.state.username}
            required
            placeholder="username"
          />
          {this._createErrors("Username")}
          <input
            type="password"
            onChange={this.updateState("password")}
            value={this.state.password}
            required
            placeholder="password"
          />
          {this._createErrors("Password")}
          <input
            type="email"
            onChange={this.updateState("email")}
            value={this.state.email}
            required
            placeholder="email"
          />
          {this._createErrors("Email")}
          <label>Zipcode: &nbsp;&nbsp;
            <input
              type="number"
              onChange={this.updateState("Zipcode")}
              value={this.state.zipcode}
              required
            />
          </label>
          {this._createErrors("email")}
          <button>Sign Up!</button>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);
