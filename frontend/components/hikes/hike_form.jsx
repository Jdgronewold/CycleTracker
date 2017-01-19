import React from 'react';
import MapForm from './map_detail';
import MapFormElevation from './map_detail_elevation';
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
    this.handleRadio = this.handleRadio.bind(this);
  }

  resetForm() {
    return ({
      title: "",
      description: "",
      distance: 0.0,
      mapPoints: [],
      routePath: "",
      errorText: "",
      elevation: 0.0,
      clearedMap: false,
      overviewPoints: [],
      polylines: [],
      mapButton: "regular"
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

  handleRadio(e) {
    e.preventDefault();
    const switchRadio = this.state.mapButton === "regular" ? "elevation" : "regular";
    this.clearPoints();
    console.log(switchRadio);
    this.setState({ mapButton: switchRadio });
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
    debugger // check polylines length vs mapPoints length
    const newMapPoints = this.state.mapPoints.slice(0, sliceLength);
    const newPolylines = this.state.polylines.slice(0, (sliceLength-1));
    const newOverviewPoints = this.state.overviewPoints.slice(0, sliceLength);
    this.setState({
      mapPoints: newMapPoints,
      polylines: newPolylines,
      overviewPoints: newOverviewPoints
    });
  }

  clearPoints() {
    this.setState(this.resetForm());
    this.setState({ clearedMap: true });
    // this.setState({mapPoints: []});
  }

  renderMap() {
    if(this.state.mapButton === "regular") {
      return (
        <MapForm
          origin={JSON.parse(this.props.userZipcode)}
          updateFromChild={this.updateFromChild}
          mapForm={true}
          mapPoints={this.state.mapPoints}
          getPoints={this.getPoints}
          clearedMap={this.state.clearedMap}
          overviewPoints={this.state.overviewPoints}
          polylines={this.state.polylines}
          distance={this.state.distance}
          elevation={this.state.elevation}
        />
      );
    } else {
      return(
        <MapFormElevation
          origin={JSON.parse(this.props.userZipcode)}
          updateFromChild={this.updateFromChild}
          mapForm={true}
          mapPoints={this.state.mapPoints}
          getPoints={this.getPoints}
          clearedMap={this.state.clearedMap}
          overviewPoints={this.state.overviewPoints}
          polylines={this.state.polylines}
          distance={this.state.distance}
          elevation={this.state.elevation}
        />
      );
    }
  }

  render() {
    const radioButtons = (
      <div className="radio">
        <label htmlFor="regular"> Regular</label>
        <input
          id="regular"
          type="radio"
          value={this.state.mapButton}
          checked={this.state.mapButton === "regular"}
          onChange={this.handleRadio}
        />
        <label htmlFor="elevation"> Elevation Beta</label>
        <input
          id="elevation"
          type="radio"
          value={this.state.mapButton}
          checked={this.state.mapButton === "elevation"}
          onChange={this.handleRadio}
        />
      </div>
    );
    
    return (
      <div className="hike-form-container">
        <div className="form-content">
          <div className="radio-buttons">
            { radioButtons }
          </div>
          <input id="place-search" type="text" placeholder="Search" />
          <form className="hike-form">
            <div className="form-input-div">
              <label htmlFor="title">Title: </label>
              <input
                id="title"
                type="text"
                value={this.state.title}
                onChange={this.update("title")}
                required
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
