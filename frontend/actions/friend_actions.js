import * as FriendAPIUtils from '../utils/friend_api_utils';

export const RECEIVE_FRIENDS = "RECEIVE_FRIENDS";
export const RECEIVE_CERTAIN_FRIENDS = "RECEIVE_CERTAIN_FRIENDS";
export const RECEIVE_FRIEND = "RECEIVE_FRIEND";
export const REMOVE_FRIEND = "REMOVE_FRIEND";
export const ADD_FRIEND = "ADD_FRIEND";

// SYNC

export const receiveFriends = (friends) => ({
  type: RECEIVE_FRIENDS,
  friends
});

export const receiveFriend = (friend) => ({
  type: RECEIVE_FRIEND,
  friend
});

export const removeFriend = (friend) => ({
  type: REMOVE_FRIEND,
  friend
});

export const addFriend = (friend) => ({
  type: ADD_FRIEND,
  friend
});

export const receiveCertainFriends = (friends) => ({
  type: RECEIVE_CERTAIN_FRIENDS,
  friends
});


// ASYNC

export const fetchFriends = () => dispatch => {
  return FriendAPIUtils.fetchFriends()
    .then(friends => dispatch(receiveFriends(friends)));
};

export const fetchFriend = (id) => dispatch => {
  return FriendAPIUtils.fetchFriend(id)
    .then(friend => dispatch(receiveFriend(friend)));
};

export const createFriend = (friend) => dispatch => {
  return FriendAPIUtils.createFriend(friend)
    .then(friend => dispatch(addFriend(friend)));
};

export const deleteFriend = (id) => dispatch => {
  return FriendAPIUtils.deleteFriend(id)
    .then(friend => dispatch(removeFriend(friend)));
};

export const fetchCertainFriends = (query) => dispatch => {
  return FriendAPIUtils.fetchCertainFriends(query)
    .then(friends => dispatch(receiveCertainFriends(friends)));
};
