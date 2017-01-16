import React from 'react';
import MapDetail from '../hikes/map_detail';
import { withRouter } from 'react-router';


class WorkoutDetail extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.fetchWorkout(this.props.params.id);
  }

  componentDidUpdate(prevProps) {
    if(this.props.params.id !== prevProps.params.id) {
      this.props.fetchWorkout(this.props.params.id);
    }
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteWorkout(this.props.workoutDetail.id)
      .then(() => this.props.router.replace("/workouts"));
  }

  render() {
    if(typeof this.props.workoutDetail.mapPoints === "undefined") {
      return(
        <div></div>
      );
    } else {
      return(
        <div>
          <h2> {this.props.workoutDetail.title } </h2>
          <div className="detail-div">
            <div className="detail-right">
              <button onClick={this.handleDelete}> Delete Workout </button>
              <br />
              Distance: {this.props.workoutDetail.distance}
              Time: {this.props.workoutDetail.time}
            </div>
            <MapDetail
              mapPoints={JSON.parse(this.props.workoutDetail.mapPoints)}
              mapForm={false}
            />
          </div>
        </div>
      );
    }
  }
}

export default withRouter(WorkoutDetail);
