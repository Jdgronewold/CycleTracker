import React from 'react';
import MapDetail from './map_detail';
import MapDetailElevation from './map_detail_elevation';
import { withRouter } from 'react-router';


class HikeDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {mapButton: "Default"};

    this.handleDelete = this.handleDelete.bind(this);
    this.updateFromChild = this.updateFromChild.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  componentDidMount() {
    // this.props.fetchHike(this.props.params.id);
  }


  componentDidUpdate(prevProps) {
    if(this.props.params.id !== prevProps.params.id) {
      this.props.fetchHike(this.props.params.id);
    }
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteHike(this.props.hikeDetail.id)
      .then(() => this.props.router.replace("/routes"));
  }

  handleToggle(property) {
    return (e) => {
      e.preventDefault();
      this.setState({ mapButton: property });
    };
  }

  updateFromChild(key, value) {
    this.setState({[key]: value});
  }

  renderMap() {
    const decoded_polylines = this.props.hikeDetail.polylines.map(line => {
      return google.maps.geometry.encoding.decodePath(line);
    });

    if(this.state.mapButton === "Default") {
      return (
        <MapDetail
          updateFromChild={this.updateFromChild}
          mapForm={false}
          mapPoints={JSON.parse(this.props.hikeDetail.mapPoints)}
          polylines={decoded_polylines}
          polylineColors={this.props.hikeDetail.polylineColors}
        />
      );
    } else {
      return(
        <MapDetailElevation
          updateFromChild={this.updateFromChild}
          mapForm={false}
          mapPoints={JSON.parse(this.props.hikeDetail.mapPoints)}
          polylines={decoded_polylines}
          polylineColors={this.props.hikeDetail.polylineColors}
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

    if(typeof this.props.hikeDetail.mapPoints === "undefined") {
      return(
        <div></div>
      );
    } else {
      return(
        <div>
          <div className="detail-title">
            <h2> {this.props.hikeDetail.title } </h2>
          </div>
          <div className="detail-div">
            <div className="detail-content">
              { mapButtons }
              <div className="detail-data">
                <ul>
                  <li key="desc"> <b>Description:</b> {this.props.hikeDetail.description}</li>
                  <li key="distance"> <b>Distance:</b> {this.props.hikeDetail.distance} miles</li>
                  <li key="elevation"> <b>Elevation:</b> {this.props.hikeDetail.elevation} feet</li>
                </ul>

              </div>
            </div>
            <div className="detail-map">
              { this.renderMap() }
            </div>
            <div className="detail-delete">
              Warning! Deleting this hike will also delete associated workouts
              <button onClick={this.handleDelete}> Delete Route </button>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default withRouter(HikeDetail);
