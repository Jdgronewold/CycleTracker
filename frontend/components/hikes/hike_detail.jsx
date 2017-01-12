import React from 'react';
import MapDetail from './map_detail';


class HikeDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchHike(this.props.params.id);
  }

  render() {
    return(
      <div>
        <h2> {this.props.hikeDetail.title } </h2>
        <div>
          <MapDetail mapPoints={JSON.parse(this.props.hikeDetail.mapPoints)} />
        </div>
      </div>
    );
  }
}

export default HikeDetail;
