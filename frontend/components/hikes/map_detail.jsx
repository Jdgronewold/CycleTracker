import React from 'react';

class MapDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  updateDirections(mapPoints) {
    const origin = mapPoints[0].location;
    const end = mapPoints[mapPoints.length - 1];
    const waypoints = mapPoints.slice(1, -1);

    const request = {
      origin: origin,
      destination: end,
      waypoints: waypoints,
      travelMode: 'WALKING'
    };

    this.directionsService.route( request, (result, status) => {
      if (status === 'OK') {
        this.directionsRender.setMap(this.map);
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
    this.directionsRender = new google.maps.DirectionsRender();

    this.updateDirections(this.props.mapPoints);
  }

  componentDidUpdate() {
    this.updateDirections();
  }


  render() {
    return (
      <div id="map-container" ref={ map => this.mapNode = map }></div>
    );
  }
}



export default MapDetail;
