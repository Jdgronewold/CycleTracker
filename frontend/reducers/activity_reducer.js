import merge from 'lodash/merge';
import { RECEIVE_ACTIVITIES } from '../actions/hike_actions';


const ActivityReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ACTIVITIES:
      return action.activities;
    case RECEIVE_ACTIVITY:
      
    default:
      return state;
  }
};

export default ActivityReducer;
