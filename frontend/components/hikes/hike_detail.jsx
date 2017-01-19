import React from 'react';
import MapDetail from './map_detail';
import { withRouter } from 'react-router';


class HikeDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {mapButton: "regular"};

    this.handleDelete = this.handleDelete.bind(this);
    this.updateFromChild = this.updateFromChild.bind(this);
    this.handleRadio = this.handleRadio.bind(this);
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

  handleRadio(e) {
    e.preventDefault();
    const switchRadio = this.state.mapButton === "regular" ? "elevation" : "regular";
    console.log(switchRadio);
    this.setState({ mapButton: switchRadio });
  }

  updateFromChild(key, value) {
    this.setState({[key]: value});
  }

  render() {
    const radioButtons = (
      <div className="radio">
        <label htmlFor="regular"> Regular</label>
        <input
          id="regular"
          type="radio"
          value={this.state.mapButton}
          checked={this.state.mapButton === "regular"}
          onChange={this.handleRadio}
        />
        <label htmlFor="elevation"> Elevation Beta</label>
        <input
          id="elevation"
          type="radio"
          value={this.state.mapButton}
          checked={this.state.mapButton === "elevation"}
          onChange={this.handleRadio}
        />
      </div>
    );

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
              <div className="radio-buttons">
                { radioButtons }
              </div>
              <button onClick={this.handleDelete}> Delete Hike </button>
              <br />
              Distance: {this.props.hikeDetail.distance}
            </div>
            <MapDetail
              updateFromChild={this.updateFromChild}
              mapPoints={JSON.parse(this.props.hikeDetail.mapPoints)}
              mapForm={false}
              
            />
          </div>
        </div>
      );
    }
  }
}

export default withRouter(HikeDetail);
