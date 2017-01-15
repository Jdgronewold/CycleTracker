import React from 'react';
import StaticMap from '../hikes/static_map';
import { Link } from 'react-router';


class WorkoutIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchWorkouts();
    console.log(this.props.workouts);
  }

  render() {
    const workouts = Object.keys(this.props.workouts).map( id => this.props.workouts[id]);
    const indexItems = workouts.map( (workout, idx) => {
      return (
        <Link to={`workouts/${workout.id}`} key={idx}>
          <li className="index-items">
            <StaticMap hikePath={workout.routePath} />
            <div className="static-overlay">{workout.name}</div>
          </li>
        </Link>
      );
    });
    return(
      <div>
        <h2>My Workouts</h2>
        <div className="index-container">
          <div className="index-left">
            <div>
              <button onClick={this.handleCreate}> Create New </button>
            </div>
            <ul className="index-ul">
              { indexItems }
            </ul>
        </div>
          <div className="index-detail">
            { this.props.children }
          </div>
        </div>
      </div>
    );
  }
}

export default WorkoutIndex;
