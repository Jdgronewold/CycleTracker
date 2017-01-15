import { connect } from 'react-redux';
import WorkoutDetail from './workout_detail';
import { fetchWorkout, deleteWorkout } from '../../actions/workout_actions';

const mapStateToProps = ({ workoutDetail }) => ({
  workoutDetail
});

const mapDispatchToProps = dispatch => ({
  fetchWorkout: id => dispatch(fetchWorkout(id)),
  deleteWorkout: id => dispatch(deleteWorkout(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutDetail);
