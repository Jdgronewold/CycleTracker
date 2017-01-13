import merge from 'lodash/merge';
import { RECEIVE_HIKES, ADD_HIKE } from '../actions/hike_actions';

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
    case ADD_HIKE:
      newState[action.hike.id] = action.hike;
      return newState;
    default:
      return state;
  }
};

export default HikesReducer;
