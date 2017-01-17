import merge from 'lodash/merge';
import { RECEIVE_FRIENDS, ADD_FRIEND, REMOVE_FRIEND } from '../actions/friend_actions';


const FriendsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_FRIENDS:
      // return merge(newState, action.friends);
      return action.friends;
    case ADD_FRIEND:
      const test = merge(newState, action.friend);
      return test;
    case REMOVE_FRIEND:
      delete newState[action.friend.id];
      return newState;
    default:
      return state;
  }
};

export default FriendsReducer;
