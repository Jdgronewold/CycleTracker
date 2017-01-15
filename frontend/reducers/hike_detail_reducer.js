import { RECEIVE_HIKE, REMOVE_HIKE } from '../actions/hike_actions';
import merge from 'lodash/merge';

const HikeDetailReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_HIKE:
      return action.hike;
    default:
      return state;
  }
};

export default HikeDetailReducer;
