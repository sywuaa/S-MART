import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';

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
    default:
      return state;
  }
};

export default sessionReducer;
