import * as SessionAPI from '../utils/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

// Sync

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});


// ASYNC

export const signup = (user) => dispatch => {
  debugger
  return SessionAPI.signup(user)
    .then(currentUser => dispatch(receiveCurrentUser(currentUser)))
    .fail(error => dispatch(receiveErrors(error.responseJSON)));
};

export const login = (user) => dispatch => {
  return SessionAPI.login(user)
    .then(currentUser => dispatch(receiveCurrentUser(currentUser)))
    .fail(error => dispatch(receiveErrors(error.responseJSON)));
};

export const logout = () => dispatch => {
  return SessionAPI.logout().then(user => dispatch(receiveCurrentUser(null)));
};
