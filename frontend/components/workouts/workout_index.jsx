import React from 'react';
import StaticMap from '../hikes/static_map';
import { withRouter, Link } from 'react-router';
import WorkoutIndexItem from './workout_index_item';


class WorkoutIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleCreate = this.handleCreate.bind(this);

    this.state = { time: 0, miles: 0, elevation: 0};
    this.calculateValues = this.calculateValues.bind(this);
  }

  componentDidMount() {
      this.calculateValues();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  componentDidUpdate(prevProps) {
    if(prevProps.location.pathname !== this.props.location.pathname) {
      this.calculateValues();
    }
  }

  handleCreate() {
    this.props.router.push("home/dashboard/create");
  }

  calculateValues() {
    let elevation = 0;
    let distance = 0;
    this.workouts.forEach(workout => {
      elevation += workout.elevation;
      distance += workout.distance;
    });
    this.setState({ miles: distance.toFixed(2), elevation: elevation.toFixed(2) });
  }

  render() {
    this.workouts = Object.keys(this.props.workouts).map( id => this.props.workouts[id]);
    const indexItems = this.workouts.map( (workout, idx) => {
      return (
          <WorkoutIndexItem key={idx} activity={workout} />
      );
    });

    if(this.props.children === null) {
      return(
        <div className="dashboard">
          <div className="stats">
            <div className="elevation-stat">
              <span> <b>Total Elevation gain:</b></span>
              <span> {this.state.elevation}</span>
            </div>
            <div className="distance-stat">
              <span> <b>Total Mileage:</b></span>
              <span> {this.state.miles}</span>
            </div>
            <div className="workout-create">
              <button onClick={this.handleCreate}> Create New</button>
            </div>
          </div>
          <div className="workout-items">
            { indexItems }
          </div>
        </div>
      );
    } else {
      return (
        <div className="index-detail">
          { this.props.children }
        </div>
      );
    }
  }
}

export default withRouter(WorkoutIndex);
