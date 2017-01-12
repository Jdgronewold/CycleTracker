import merge from 'lodash/merge';
import { RECEIVE_HIKES, RECEIVE_HIKE, REMOVE_HIKE } from '../actions/hike_actions';

const _nullState = {
  title: "",
  pathName: ""
};

const HikesReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_HIKES:
      return merge(newState, action.hikes);
    case RECEIVE_HIKE:
      newState[action.hike.id] = action.hike;
      return newState;
    case REMOVE_HIKE:
      delete newState[action.hike.id];
      return newState;
    default:
      return state;
  }
};

export default HikesReducer;