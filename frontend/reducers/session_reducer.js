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
    
    default:
      return state;
  }
};

export default sessionReducer;
