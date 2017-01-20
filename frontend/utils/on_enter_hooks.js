import * as HikeActions from '../actions/hike_actions';
import * as WorkoutActions from '../actions/workout_actions';
import * as FriendActions from '../actions/friend_actions';
import { Router, Route, IndexRoute, hashHistory, withRouter, IndexRedirect } from 'react-router';



export const _redirectIfLoggedIn = store => (nextState, replace) => {
  const currentUser = store.getState().session.currentUser;
  if(currentUser) {
    replace('home');
  }
};

export const _redirectIfNotLoggedIn = store => (nextState, replace) => {
  const currentUser = store.getState().session.currentUser;
  if(currentUser === null) {
    replace('welcome');
  }
};

export const _hikeIndex = (store, dispatch) => (nextState, replace, next) => {
  const currentUser = store.getState().session.currentUser;
  if(currentUser === null) {
    replace('welcome');
    next();
  } else {
    dispatch(HikeActions.fetchHikes()).then( () => next());
  }
};

export const _workoutIndex = (store, dispatch) => (nextState, replace, next) => {
  const currentUser = store.getState().session.currentUser;
  if(currentUser === null) {
    replace('welcome');
    next();
  } else {
    dispatch(WorkoutActions.fetchWorkouts()).then( () => next());
  }
};

export const _friendIndex = (store, dispatch) => (nextState, replace, next) => {
  const currentUser = store.getState().session.currentUser;
  if(currentUser === null) {
    replace('welcome');
    next();
  } else {
    dispatch(FriendActions.fetchFriends()).then( () => next());
  }
};

export const _hikeDetail = dispatch => (nextState, replace, next) => {
    dispatch(HikeActions.fetchHike(nextState.params.id)).then( () => next());
};

export const _activityFeed = dispatch => (nextState, replace, next) => {
    dispatch(HikeActions.fetchActivities()).then( () => next());
};

export const _workoutDetail = dispatch => (nextState, replace, next) => {
    dispatch(WorkoutActions.fetchWorkout(nextState.params.id)).then( () => next());
};


export const _friendDetail = dispatch => (nextState, replace, next) => {
    dispatch(FriendActions.fetchFriend(nextState.params.id)).then( () => next());
};
