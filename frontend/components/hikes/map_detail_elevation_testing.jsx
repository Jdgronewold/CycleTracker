import React from 'react';
import { hashHistory } from 'react-router';

class MapDetailElevation extends React.Component {
  constructor(props) {
    super(props);
    this.updateDirections = this.updateDirections.bind(this);
    this.addListeners = this.addListeners.bind(this);
    this.createNewMap = this.createNewMap.bind(this);
    this.createPolylines = this.createPolylines.bind(this);
    this.computeElevations = this.computeElevations.bind(this);
    this.computeTotalDistance = this.computeTotalDistance.bind(this);
    this.drawLines = this.drawLines.bind(this);
  }

  updateDirections(mapPoints) {
    if(mapPoints.length === 0) {
      this.createNewMap();
      // put another conditional here that will test for clearedPoint
      // in that conditional write something that takes the polylines
      // and redraws them - line 36 through 46 (extract that out to a function)
      // also need to clear the existing polylines
    // } else if (this.props.clearedPoints) {
    //   console.log(this.map);
    //

  } else if (this.props.clearedPoint) {

    this.markers[this.markers.length - 1].setMap(null);
    this.props.updateFromChild("clearedPoint", false);
  } else if (mapPoints.length > 1 ){
      const origin = mapPoints[mapPoints.length - 2].location;
      const end = mapPoints[mapPoints.length - 1].location;
      // const waypoints = [];

      const request = {
        origin: origin,
        destination: end,
        // waypoints: waypoints,
        travelMode: 'DRIVING',
        unitSystem: google.maps.UnitSystem.IMPERIAL
      };
      this.directionsService.route( request, (result, status) => {
        if (status === 'OK') {
          // this first if statement could probably be done outside
          // of the callback
          if(!this.props.mapForm) {
            this.props.polylines.forEach( (line, idx) => {
              const color = this.props.polylineColors[idx];
              let poly = new google.maps.Polyline({
                path: line,
                strokeColor: color,
                strokeWeight: 5,
                strokeOpacity: 0.8,
              });
               (this);
              poly.setMap(this.map);
            });
          } else {
            // Compute distance from result

            this.props.updateFromChild("routePath", result.routes[0].overview_polyline);
            this.computeTotalDistance(result);

            // Do elevation things then call the
            // polyline drawer
            if(this.markers.length > 1 && this.props.mapForm) {
              // const ignorePoints = this.props.overviewPoints[this.props.overviewPoints.length - 1];
              // const newPoints = result.routes[0].overview_path.slice(ignorePoints -1);
              const newPoints = result.routes[0].overview_path;
              const elevOptions = {
                'path': newPoints,
                'samples': 30
              };

              this.elevator.getElevationAlongPath(elevOptions, (elevations, elevStatus) => {
                if(elevStatus === 'OK') {
                  const pathLength = google.maps.geometry.spherical.computeLength(newPoints) * 3.28;
                  const elev_color = this.computeElevations(elevations, pathLength);
                  this.createPolylines(newPoints, elev_color);
                } else {
                   console.log("Elevation could not be calculated");
                }
              });
            }

            // update overviewPoints - happens always
            const newOverviewPoints = Object.assign([], this.props.overviewPoints);
            newOverviewPoints.push(result.routes[0].overview_path.length);
            this.props.updateFromChild("overviewPoints", newOverviewPoints);
        }
        } else {
           ("Received " + status + "from Google");
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

    this.map.addListener('bounds_changed', () => {
      this.searchBox.setBounds(this.map.getBounds());
    });

    this.map.addListener('click', (event) => {
      let marker = new google.maps.Marker({
        position: event.latLng
      });
      marker.setMap(this.map);
      this.markers.push(marker);
    });

    this.directionsListener = this.directionsRender.addListener('directions_changed', () => {
      this.computeTotalDistance(this.directionsRender.getDirections());
    });

    this.searchBoxListener = this.searchBox.addListener('places_changed', () => {
      const places = this.searchBox.getPlaces();

      if (places.length === 0) {
        return;
      }

      let bounds = new google.maps.LatLngBounds();
      places.forEach( place => {
        if (!place.geometry) {
               ("Returned place contains no geometry");
              return;
        }

        if (place.geometry.viewport) {
              // Only geocodes have viewport.
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
      });
      this.map.fitBounds(bounds);
      this.map.setZoom(13);
    });

  }

  createPolylines(path, color) {
    let poly = new google.maps.Polyline({
      path: path,
      strokeColor: color,
      strokeWeight: 5,
      strokeOpacity: 0.8,
    });
    const newPolylines = Object.assign([], this.props.polylines);
    newPolylines.push(poly);
    this.props.updateFromChild("polylines", newPolylines);
    const newPolylineColors = Object.assign([], this.props.polylineColors);
    newPolylineColors.push(color);
    this.props.updateFromChild("polylineColors", newPolylineColors);
    poly.setMap(this.map);

  }

  drawLines() {
    this.props.polylines.forEach( (line, idx) => {
      const color = this.props.polylineColors[idx];
      let poly = new google.maps.Polyline({
        path: line,
        strokeColor: color,
        strokeWeight: 5,
        strokeOpacity: 0.8,
      });
      poly.setMap(this.map);
    });
  }

  computeElevations(elevations, pathLength) {
    let total = 0;
    for(let i = 1; i < elevations.length; i++) {
      let gain = (elevations[i].elevation - elevations[i-1].elevation) * 3.28;
      if(gain > 0) {
        total += gain;
      }
    }
    const totalElevation = parseFloat((this.props.elevation + total).toFixed(2));
    const averageGrade = total/pathLength;
    this.props.updateFromChild("elevation", totalElevation);
    let color;
     (averageGrade);
    switch(true) {
      case (averageGrade < 0.03):
        color = "#00FF00";
        break;
      case (averageGrade > 0.03 && averageGrade < 0.06):
        color = "#FFFF00";
        break;
      case (averageGrade > 0.06 && averageGrade < 0.1 ):
        color = "#FFA500";
        break;
      case (averageGrade > 0.1):
        color = "#FFA500";
        break;
      default:
        color = "#99B3CC";
    }
    return color;
  }

  computeTotalDistance(result) {
    let total = 0;
    let myroute = result.routes[0];
    for (let i = 0; i < myroute.legs.length; i++) {
      total += myroute.legs[i].distance.value;
    }
    total = (total / 1000)/1.609 + parseFloat(this.props.distance);
    this.props.updateFromChild("distance", total.toFixed(2));
  }

  createNewMap() {
    const origin = this.props.origin || this.props.mapPoints[0].location;
    const mapOptions = {
      center: origin,
      zoom: 16
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.markers = [];

    this.elevator = new google.maps.ElevationService;
    this.directionsService = new google.maps.DirectionsService();
    this.directionsRender = new google.maps.DirectionsRenderer({draggable: this.props.mapForm});
    this.directionsRender.setMap(this.map);
    if(this.props.mapForm) {
      this.directionsRender.setOptions({ preserveViewport: true });
    }

    if(this.props.mapForm) {
      // if(!this.props.clearedMap) {
        const searchInput = document.getElementById("place-search");
        this.searchBox = new google.maps.places.SearchBox(searchInput);
        // this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(searchInput);
      // }
    }

    if(this.props.mapForm) {
      this.addListeners();
    }

    if(!this.props.mapForm) {
      this.updateDirections(this.props.mapPoints);
    }

  }

  componentDidMount() {
    this.createNewMap();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(this.props.mapForm) {
      return (this.props.getPoints() !== this.props.mapPoints);
    } else {
      return true;
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(!this.props.mapForm) {
      if(prevProps.mapPoints[0].location.lat !== this.props.mapPoints[0].location.lat) {
        this.updateDirections(this.props.mapPoints);
      }
    } else {
      this.updateDirections(this.props.mapPoints);
    }
  }


  render() {
    return (
      <div id="map-container" ref={ map => this.mapNode = map }></div>
    );
  }
}



export default MapDetailElevation;
