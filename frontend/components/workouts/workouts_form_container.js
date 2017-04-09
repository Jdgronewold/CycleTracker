import { connect } from 'react-redux';
import WorkoutForm from './workout_form';
import { createWorkout } from '../../actions/workout_actions';
import { fetchHikes } from '../../actions/hike_actions';

const mapStateToProps = ({hikes, session}) => ({
  hikes,
  session
});

const mapDispatchToProps = dispatch => ({
  createWorkout: (workout) => dispatch(createWorkout(workout)),
  fetchHikes: () => dispatch(fetchHikes())
});

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutForm);
