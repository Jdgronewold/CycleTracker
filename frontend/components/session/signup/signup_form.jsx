import React from 'react';
import { Link, withRouter } from 'react-router';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      zipcode: 94105,
      picture: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateState = this.updateState.bind(this);
    this.redirect = this.redirect.bind(this);
    this._createErrors = this._createErrors.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
  }

  redirect() {
    this.props.router.push("/home");
  }

  handleSubmit(e) {

    e.preventDefault();
    const user = Object.assign({}, this.state);

    if(user.picture === "") {
      user.picture = "http://res.cloudinary.com/dggj2pmde/image/upload/c_thumb,g_center,r_30,w_125/v1484542818/pexels-photo-134705_dlcitb.jpg";
    }

    let latlng;
    const sendSignup = (userToAdd) => {
      this.props.signup(userToAdd)
        .then(() => {
          this.redirect();
        });
    };
    const zipcode = this.state.zipcode;
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode( {'address': zipcode}, (results, status) => {
        //  (results);
        if(status === 'OK') {
          const lat = results[0].geometry.location.lat();
          const lng = results[0].geometry.location.lng();
          user.zipcode = JSON.stringify({ lat: lat, lng: lng });
          sendSignup(user);
        } else {
           ("geocode did not work");
        }

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

  uploadImage(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(
      window.CLOUDINARY_OPTIONS,
      (error, images) => {
        if(error === null) {
          this.setState({ picture: images[0].thumbnail_url});
        }
      }
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
        <form className="form-box">
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
          <div className="zip-image">
            <label>Zipcode: &nbsp;&nbsp;
              <input
                type="number"
                onChange={this.updateState("zipcode")}
                value={this.state.zipcode}
                required
                />
            </label>
            <button onClick={this.uploadImage}> Upload Picture</button>
          </div>
          {this._createErrors("email")}
          <button onClick={this.handleSubmit}>Sign Up!</button>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);
