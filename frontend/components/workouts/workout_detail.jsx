import React from 'react';
import MapDetail from '../hikes/map_detail';
import MapDetailElevation from '../hikes/map_detail_elevation';
import { withRouter } from 'react-router';


class WorkoutDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {mapButton: "Default"};
    this.handleDelete = this.handleDelete.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  componentDidMount() {
    // this.props.fetchWorkout(this.props.params.id);
  }

  componentDidUpdate(prevProps) {
    if(this.props.params.id !== prevProps.params.id) {
      this.props.fetchWorkout(this.props.params.id);
    }
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteWorkout(this.props.workoutDetail.id)
      .then(() => this.props.router.replace("/dashboard"));
  }

  handleToggle(property) {
    return (e) => {
      e.preventDefault();
      this.setState({ mapButton: property });
    };
  }

  renderMap() {
    const decoded_polylines = this.props.workoutDetail.polylines.map(line => {
      return google.maps.geometry.encoding.decodePath(line);
    });

    if(this.state.mapButton === "Default") {
      return (
        <MapDetail
          updateFromChild={this.updateFromChild}
          mapForm={false}
          mapPoints={JSON.parse(this.props.workoutDetail.mapPoints)}
          polylines={decoded_polylines}
          polylineColors={this.props.workoutDetail.polylineColors}
          />
      );
    } else {
      return(
        <MapDetailElevation
          updateFromChild={this.updateFromChild}
          mapForm={false}
          mapPoints={JSON.parse(this.props.workoutDetail.mapPoints)}
          polylines={decoded_polylines}
          polylineColors={this.props.workoutDetail.polylineColors}
          />
      );
    }
  }

  render() {
    let mapWarning;
    if(this.state.mapButton === "Elevation") {
      mapWarning = <span className="error-text">Elevation is still in beta!</span>;
      } else {
        mapWarning = <span></span>;
        }

    const mapButtons = (
      <div className="map-buttons">
        <span> Map Type: </span>
        <button onClick={this.handleToggle("Default")} >Default</button>
        <button onClick={this.handleToggle("Elevation")} >Elevation</button>
        {mapWarning}
      </div>
    );

    let elevation;
    if(this.props.workoutDetail.elevation === null) {
      elevation = "Not Available for this Route";
    } else {
      elevation = `${this.props.workoutDetail.elevation} feet`;
    }
    if(typeof this.props.workoutDetail.mapPoints === "undefined") {
      return(
        <div></div>
      );
    } else {
      return(
        <div>
          <div className="detail-title">
            <h2> {this.props.workoutDetail.title } </h2>
          </div>
          <div className="detail-div">
            <div className="detail-content">
              { mapButtons }
              <div className="detail-data">
                <ul>
                  <li key="desc"> <b>Description:</b> {this.props.workoutDetail.description}</li>
                  <li key="distance"> <b>Distance:</b> {this.props.workoutDetail.distance} miles</li>
                  <li key="elevation"> <b>Elevation:</b> {elevation}</li>
                </ul>

              </div>
            </div>
            <div className="detail-map">
              { this.renderMap() }
            </div>
            <div className="detail-delete">
              <button onClick={this.handleDelete}> Delete Workout </button>
            </div>
          </div>
        </div>
      );
    }
  }
}

  export default withRouter(WorkoutDetail);
