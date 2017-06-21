import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/session_actions';
import { merge } from 'lodash';

const defaultState = (
  { currentUser: null, errors: [] }
);

const sessionReducer = ( state = defaultState, action ) => {
  Object.freeze(state);
  switch( action.type ) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.user;
      return { currentUser, errors: [] };
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return { currentUser: null, errors };
    case CLEAR_ERRORS:
      let newState = merge({}, state);
      newState.errors = [];
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;
