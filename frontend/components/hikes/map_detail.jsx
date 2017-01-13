import React from 'react';

class MapDetail extends React.Component {
  constructor(props) {
    super(props);
    this.updateDirections = this.updateDirections.bind(this);
    this.addListeners = this.addListeners.bind(this);
    this.createNewMap = this.createNewMap.bind(this);
  }

  updateDirections(mapPoints) {
    if(mapPoints.length === 0) {
      this.createNewMap();

    } else {
      const origin = mapPoints[0].location;
      const end = mapPoints[mapPoints.length - 1].location;
      const waypoints = mapPoints.slice(1, mapPoints.length-1);

      const request = {
        origin: origin,
        destination: end,
        waypoints: waypoints,
        travelMode: 'DRIVING'
      };

      this.directionsService.route( request, (result, status) => {
        if (status === 'OK') {
          if(this.props.mapForm) {
            this.props.updateFromChild("routePath", result.routes[0].overview_polyline);
          }

          this.directionsRender.setDirections(result);
        }
      });
    }
  }

  addListeners() {
    this.markerListener = google.maps.event.addListener(this.map, 'click', event => {
      const wayPoint = { location: { lat: event.latLng.lat(), lng: event.latLng.lng()}, stopover: false };
      // this.props.mapPoints.push(wayPoint);
      const newMapPoints = Object.assign([], this.props.mapPoints);
      newMapPoints.push(wayPoint);
      this.props.updateFromChild("mapPoints", newMapPoints);
    });

    this.directionsListener = this.directionsRender.addListener('directions_changed', () => {
      this.computeTotalDistance(this.directionsRender.getDirections());
    });
  }

  computeTotalDistance(result) {
    let total = 0;
    let myroute = result.routes[0];
    for (let i = 0; i < myroute.legs.length; i++) {
      total += myroute.legs[i].distance.value;
    }
    total = total / 1000;
    this.props.updateFromChild("distance", total);
  }

  createNewMap() {
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 }, // this is SF
      zoom: 13
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.directionsService = new google.maps.DirectionsService();
    this.directionsRender = new google.maps.DirectionsRenderer({draggable: this.props.mapForm});
    this.directionsRender.setMap(this.map);
    if(this.props.mapForm) {
      this.directionsRender.setOptions({ preserveViewport: true });
    }

    if(this.props.mapForm) {
      this.addListeners();
    }

    if(!this.props.mapForm) {
      this.updateDirections(this.props.mapPoints);
    }
  }

  componentDidMount() {
    // For now load SF, wait to get some new seed data
    this.createNewMap();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(this.props.mapForm) {
      return (this.props.getPoints() !== this.props.mapPoints);
    } else {
      return true;
    }
  }

  componentDidUpdate() {
    this.updateDirections(this.props.mapPoints);
  }


  render() {
    return (
      <div id="map-container" ref={ map => this.mapNode = map }></div>
    );
  }
}



export default MapDetail;
