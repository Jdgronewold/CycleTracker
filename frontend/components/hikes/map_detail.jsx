import React from 'react';
import { hashHistory } from 'react-router';

class MapDetail extends React.Component {
  constructor(props) {
    super(props);
    this.updateDirections = this.updateDirections.bind(this);
    this.addListeners = this.addListeners.bind(this);
    this.createNewMap = this.createNewMap.bind(this);
    this.createPolylines = this.createPolylines.bind(this);
    this.computeElevations = this.computeElevations.bind(this);
    this.computeTotalDistance = this.computeTotalDistance.bind(this);
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
        travelMode: 'DRIVING',
        unitSystem: google.maps.UnitSystem.IMPERIAL
      };
      this.directionsService.route( request, (result, status) => {
        if (status === 'OK') {
          if(!this.props.mapForm) {

            this.directionsRender.setDirections(result);
          } else {
            // Compute distance from result

            this.props.updateFromChild("routePath", result.routes[0].overview_polyline);
            this.computeTotalDistance(result);

            // Do elevation things then call the
            // polyline drawer

            if(this.props.mapPoints.length > 1 && this.props.mapForm) {
              const ignorePoints = this.props.overviewPoints[this.props.overviewPoints.length - 1];
              const newPoints = result.routes[0].overview_path.slice(ignorePoints -1);
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
                   ("Elevation could not be calculated");
                }
              });
            }

            // update overviewPoints - happens always
            const newOverviewPoints = Object.assign([], this.props.overviewPoints);
            newOverviewPoints.push(result.routes[0].overview_path.length);
            this.props.updateFromChild("overviewPoints", newOverviewPoints);

            // Actually render something
            this.directionsRender.setDirections(result);
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


    // might be depreciated
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
  }

  computeElevations(elevations, pathLength) {
    let total = 0;
    for(let i = 1; i < elevations.length; i++) {
      let gain = (elevations[i].elevation - elevations[i-1].elevation) * 3.28;
      if(gain > 0) {
        total += gain;
      }
    }
    const totalElevation = this.props.elevation + total;
    const averageGrade = total/pathLength;

    this.props.updateFromChild("elevation", totalElevation);
    let color;
     (averageGrade);
    switch(true) {
      case (averageGrade < 0.025):
        color = "#00FF00";
        break;
      case (averageGrade > 0.025 && averageGrade < 0.075):
        color = "#FFFF00";
        break;
      case (averageGrade > 0.075 && averageGrade < 0.125 ):
        color = "#FFA500";
        break;
      case (averageGrade > 0.15):
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
    total = (total / 1000)/1.609;
    this.props.updateFromChild("distance", total);
  }

  createNewMap() {
    const mapOptions = {
      center: this.props.origin, // this is SF
      zoom: 13
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
         ("new SearchBox");
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



export default MapDetail;
