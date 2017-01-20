import merge from 'lodash/merge';
import { RECEIVE_ACTIVITIES } from '../actions/hike_actions';
import { RECEIVE_ACTIVITY } from '../actions/comment_actions';


const ActivityReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ACTIVITIES:
      return action.activities;
    case RECEIVE_ACTIVITY:
      const newState = merge({}, state);
      const key = Object.keys(action.activity)[0];
      delete newState[key].comments;
      newState[key].comments = action.activity[key].comments;
      console.log(newState);
      return newState;
    default:
      return state;
  }
};

export default ActivityReducer;
