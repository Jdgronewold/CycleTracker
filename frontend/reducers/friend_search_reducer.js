import merge from 'lodash/merge';
import { RECEIVE_CERTAIN_FRIENDS } from '../actions/friend_actions';


const FriendSearchReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_CERTAIN_FRIENDS:
      return action.friends;
    default:
      return state;
  }
};

export default FriendSearchReducer;
