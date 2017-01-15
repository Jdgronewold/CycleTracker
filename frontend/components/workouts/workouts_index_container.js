import { connect } from 'react-redux';
import WorkoutIndex from './workout_index';
import { createWorkout, fetchWorkouts } from '../../actions/workout_actions';

const mapStateToProps = ({ workouts }) => ({
  workouts
});

const mapDispatchToProps = dispatch => ({
  createWorkout: (workout) => dispatch(createWorkout(workout)),
  fetchWorkouts: () => dispatch(fetchWorkouts())
});

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutIndex);
