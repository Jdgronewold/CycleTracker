import React from 'react';
import { Link, withRouter } from 'react-router';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", email: "", zipcode: 94105 };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateState = this.updateState.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  redirect() {
    debugger;
    this.props.router.push("/home");
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    debugger;
    this.props.signup(user)
      .then(() => {
        debugger;
        this.redirect();
      });
  }

  updateState(property) {
    return (e) => { this.setState({[property]: e.currentTarget.value});};
  }

  render() {

    return (
      <div className="form-container">
        <span className="form-switch">
          Please sign up or {' '}
          <Link to='/welcome/login'>Log In</Link>
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
          <br/>
          <label>Email
            <br/>
            <input
              type="text"
              onChange={this.updateState("email")}
              value={this.state.email}
              />
          </label>
          <br/>
            <label>Zipcode
              <br/>
              <input
                type="number"
                onChange={this.updateState("zipcode")}
                value={this.state.zipcode}
                />
            </label>
            <br/>
          <button>Sign Up!</button>
        </form>
        <br/>
      </div>
    );
  }
}

export default withRouter(SignupForm);
