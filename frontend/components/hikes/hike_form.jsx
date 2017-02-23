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
    this.handleToggle = this.handleToggle.bind(this);
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
      mapButton: "Default",
      polylineColors: []
    });
  }

  handleSubmit() {
    if(this.state.mapPoints.length === 0) {
      return this.errorText();
    } else {

      const hike = this.state;
      const encoded_polylines = this.state.polylines.map( line => {
        return google.maps.geometry.encoding.encodePath(line.getPath());
      });
      hike.mapPoints = JSON.stringify(this.state.mapPoints);
      hike.polylines = encoded_polylines;
      this.props.createHike(hike)
      .then((result) => {
        debugger
        hashHistory.push(`/routes/${result.hike.id}`);
      });
    }
  }

  handleToggle(property) {
    return (e) => {
      e.preventDefault();
      this.clearPoints();
      this.setState({ mapButton: property });
    };
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
    alert("Coming soon! Please clear route");
    // const sliceLength = this.state.mapPoints.length - 1;
    // debugger // check polylines length vs mapPoints length
    // const newMapPoints = this.state.mapPoints.slice(0, sliceLength);
    // const newPolylines = this.state.polylines.slice(0, (sliceLength-1));
    // const newOverviewPoints = this.state.overviewPoints.slice(0, sliceLength);
    // this.setState({
    //   mapPoints: newMapPoints,
    //   polylines: newPolylines,
    //   overviewPoints: newOverviewPoints
    // });
  }

  clearPoints() {
    this.setState(this.resetForm());
    this.setState({ clearedMap: true});
    // this.setState({mapPoints: []});
  }

  renderMap() {
    const origin = {
      lat: +JSON.parse(this.props.userZipcode).lat,
      lng: +JSON.parse(this.props.userZipcode).lng
    };
    if(this.state.mapButton === "Default") {
      return (
        <MapForm
          origin={origin}
          updateFromChild={this.updateFromChild}
          mapForm={true}
          mapPoints={this.state.mapPoints}
          getPoints={this.getPoints}
          clearedMap={this.state.clearedMap}
          overviewPoints={this.state.overviewPoints}
          polylines={this.state.polylines}
          distance={this.state.distance}
          elevation={this.state.elevation}
          polylineColors={this.state.polylineColors}
        />
      );
    } else {
      return(
        <MapFormElevation
          origin={origin}
          updateFromChild={this.updateFromChild}
          mapForm={true}
          mapPoints={this.state.mapPoints}
          getPoints={this.getPoints}
          clearedMap={this.state.clearedMap}
          overviewPoints={this.state.overviewPoints}
          polylines={this.state.polylines}
          distance={this.state.distance}
          elevation={this.state.elevation}
          polylineColors={this.state.polylineColors}
        />
      );
    }
  }

  render() {
    const mapButtons = (
      <div className="map-buttons">
        <span> Map Type: </span>
        <button onClick={this.handleToggle("Default")} >Default</button>
        <button onClick={this.handleToggle("Elevation")} >Elevation</button>
      </div>
    );

    return (
      <div>
        <div className="detail-title">
          <h2> Create a Route </h2>
        </div>

        <div className="detail-div">
          <div className="detail-search">
            <input id="place-search" type="text" placeholder="Search Location" />
          </div>
          <div className="detail-map">
            { this.renderMap() }
          </div>
          <div className="detail-content">

            { mapButtons }

            <div className="dynamic-data">
              <span> <b>Distance:</b> { this.state.distance } </span>
              <span> <b>Elevation:</b> { this.state.elevation } </span>
            </div>

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

              <div className="form-input-div">
                <label htmlFor="description">Description: </label>
                <textarea
                  id="description"
                  value={this.state.description}
                  onChange={this.update("description")}>
                </textarea>
              </div>

            <div className="form-button-div">
              <button onClick={this.removeLast}>Remove Last Point</button>
              <button onClick={this.clearPoints}>Clear Route</button>
              <input
                type="submit"
                onClick={this.handleSubmit}
                value={"Create!"}
                />
            </div>
            <div className="error-text">
              <span>{this.state.errorText}</span>
            </div>
          </form>
        </div>
      </div>
    </div>
    );
  }
}

export default HikeForm;
