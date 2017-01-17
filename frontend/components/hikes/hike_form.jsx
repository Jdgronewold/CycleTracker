import React from 'react';
import MapForm from './map_detail';
import { hashHistory } from 'react-router';
import merge from 'lodash/merge';


class HikeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.resetForm();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.renderMap = this.renderMap.bind(this);
    this.updateFromChild = this.updateFromChild.bind(this);
    this.getPoints = this.getPoints.bind(this);
    this.removeLast = this.removeLast.bind(this);
    this.clearPoints = this.clearPoints.bind(this);
  }

  resetForm() {
    return ({
      title: "",
      description: "",
      distance: 0.0,
      mapPoints: [],
      routePath: "",
      errorText: ""
    });
  }

  handleSubmit() {
    if(this.state.mapPoints.length === 0) {
      return this.errorText();
    } else {

    const hike = this.state;
    hike.mapPoints = JSON.stringify(this.state.mapPoints);
    this.props.createHike(hike)
    .then((result) => {
      hashHistory.push(`/hikes/${result.hike.id}`);
    });
    }
  }

  errorText() {
    this.setState(merge({}, this.state, {errorText: "Must include waypoints!"}));
  }

  update(property) {
    return (e) => this.setState({ [property]: e.currentTarget.value });
  }

  updateFromChild(key, value) {
    this.setState({[key]: value});
  }

  getPoints() {
    return (this.state.mapPoints);
  }

  removeLast() {
    const sliceLength = this.state.mapPoints.length - 1;
    const newMapPoints = this.state.mapPoints.slice(0, sliceLength);
    this.setState({mapPoints: newMapPoints});
  }

  clearPoints() {
    this.setState(this.resetForm());
    this.setState({mapPoints: []});
  }

  renderMap() {
    return(
      <MapForm
        updateFromChild={this.updateFromChild}
        mapForm={true}
        mapPoints={this.state.mapPoints}
        getPoints={this.getPoints}
        id={this.props.hikeDetail.id}
      />
    );
  }

  render() {
    return (
      <div className="hike-form-container">
        <div className="form-content">
          <form className="hike-form">
            <div className="form-input-div">
              <label htmlFor="title">Title: </label>
              <input
                id="title"
                type="text"
                value={this.state.title}
                onChange={this.update("title")}
                />
            </div>
            <br />
            <div className="form-input-div">
              <label htmlFor="description">Description: </label>
              <textarea
                id="description"
                value={this.state.description}
                onChange={this.update("description")}>
              </textarea>
            </div>
            <div> Distance: { this.state.distance }</div>
            <div className="form-button-div">
              <button onClick={this.removeLast}>Remove Last Point</button>
              <button onClick={this.clearPoints}>Clear Route</button>
              <input
                type="submit"
                onClick={this.handleSubmit}
                value={"Create!"}
                />
            </div>
            <span className="error-text">{this.state.errorText}</span>
          </form>
        </div>
        <div className="form-content">
          { this.renderMap() }
        </div>
      </div>
    );
  }
}

export default HikeForm;
