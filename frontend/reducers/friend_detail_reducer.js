import merge from 'lodash/merge';
import { RECEIVE_FRIEND, REMOVE_FRIEND } from '../actions/friend_actions';


const FriendDetailReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_FRIEND:
      return action.friend;
    default:
      return state;
  }
};

export default FriendDetailReducer;
