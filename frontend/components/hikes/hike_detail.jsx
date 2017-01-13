import React from 'react';
import MapDetail from './map_detail';


class HikeDetail extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.fetchHike(this.props.params.id);
  }

  componentDidUpdate(prevProps) {
    if(this.props.params.id !== prevProps.params.id) {
      this.props.fetchHike(this.props.params.id);
    }
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteHike(this.props.hikeDetail.id);
  }

  render() {
    if(typeof this.props.hikeDetail.mapPoints === "undefined") {
      return(
        <div></div>
      );
    } else {
      return(
        <div>
          <h2> {this.props.hikeDetail.title } </h2>
          <button onClick={this.handleDelete}> Delete Hike </button>
          <div>
            <MapDetail
              mapPoints={JSON.parse(this.props.hikeDetail.mapPoints)}
              mapForm={false}
            />
          </div>
        </div>
      );
    }
  }
}

export default HikeDetail;
