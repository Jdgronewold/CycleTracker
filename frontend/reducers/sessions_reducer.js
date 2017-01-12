import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';

const _nullState = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = _nullState, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const test = merge({}, _nullState, {currentUser: action.currentUser});
      return test;
    case RECEIVE_ERRORS:
    const errors = {errors: action.errors};
      return merge({}, _nullState, errors);
    default:
      return state;
  }
};

export default SessionReducer;
