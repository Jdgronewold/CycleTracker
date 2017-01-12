import React from 'react';

class StaticMap extends React.Component {
  constructor(props) {
    super(props);
    this.setSize = this.setSize.bind(this);
    this.hikeRoute = this.hikeRoute.bind(this);
  }


  setSize() {
    if(this.props.mapSize) {
      return this.props.mapSize;
    } else {
      return 175;
    }
  }

  hikeRoute() {
    return this.props.hikePath;
  }
  render() {
    return(
      <div>
        <img width={ this.setSize() } src={`https://maps.googleapis.com/maps/api/staticmap?size=175x175&path=enc:${this.hikeRoute()}&key=AIzaSyC8WD1gp_Vbo6zJh2p_xQbbt07lF81XLss`} alt="Hike Map" />
      </div>
    );
  }
}


export default StaticMap;
