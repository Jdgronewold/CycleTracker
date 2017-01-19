import React from 'react';
import MapDetail from './map_detail';
import { withRouter } from 'react-router';


class HikeDetail extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {mapRendered: false};

    this.handleDelete = this.handleDelete.bind(this);
    this.updateFromChild = this.updateFromChild.bind(this);
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
    this.props.deleteHike(this.props.hikeDetail.id)
      .then(() => this.props.router.replace("/hikes"));
  }

  updateFromChild(key, value) {
    this.setState({[key]: value});
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
          <div className="detail-div">
            <div className="detail-right">
              <button onClick={this.handleDelete}> Delete Hike </button>
              <br />
              Distance: {this.props.hikeDetail.distance}
            </div>
            <MapDetail
              updateFromChild={this.updateFromChild}
              mapPoints={JSON.parse(this.props.hikeDetail.mapPoints)}
              mapForm={false}
              id={this.props.hikeDetail.id}
              ownProps={this.props.ownProps}
            />
          </div>
        </div>
      );
    }
  }
}

export default withRouter(HikeDetail);
