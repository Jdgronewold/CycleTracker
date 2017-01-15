import { RECEIVE_WORKOUT, REMOVE_WORKOUT } from '../actions/workout_actions';
import merge from 'lodash/merge';

const WorkoutDetailReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_WORKOUT:
      debugger
      return action.workout;
    default:
      return state;
  }
};

export default WorkoutDetailReducer;
