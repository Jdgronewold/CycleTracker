import React from 'react';

class MapDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  updateDirections(mapPoints) {
    const origin = mapPoints[0].location;
    const end = mapPoints[mapPoints.length - 1].location;
    const waypoints = mapPoints.slice(1, -1);
    // debugger

    const request = {
      origin: origin,
      destination: end,
      waypoints: waypoints,
      travelMode: 'WALKING'
    };

    this.directionsService.route( request, (result, status) => {
      if (status === 'OK') {

        this.directionsRender.setDirections(result);
      }
    });

  }

  componentDidMount() {
    // For now load SF, wait to get some new seed data
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 }, // this is SF
      zoom: 13
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.directionsService = new google.maps.DirectionsService();
    this.directionsRender = new google.maps.DirectionsRenderer();
    this.directionsRender.setMap(this.map);

    this.updateDirections(this.props.mapPoints);
  }

  componentDidUpdate() {
    // console.log(this.props.mapPoints)
    this.updateDirections(this.props.mapPoints);
  }


  render() {
    return (
      <div id="map-container" ref={ map => this.mapNode = map }></div>
    );
  }
}



export default MapDetail;
