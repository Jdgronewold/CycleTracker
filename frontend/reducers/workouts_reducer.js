import merge from 'lodash/merge';
import { RECEIVE_WORKOUTS, ADD_WORKOUT, REMOVE_WORKOUT } from '../actions/workout_actions';

const _nullState = {
  title: "",
  pathName: ""
};

const WorkoutsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_WORKOUTS:
      return action.workouts;
    case ADD_WORKOUT:
      newState[action.workout.id] = action.workout;
      return newState;
    case REMOVE_WORKOUT:
      delete newState[action.workout.id];
      return newState;
    default:
      return state;
  }
};

export default WorkoutsReducer;
