import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/error_actions';
import { merge } from 'lodash';

const defaultState = () => ( [] );

const errorReducer = (state = defaultState(), action) => {
  Object.freeze(state);
  let errors;
  switch(action.type){

    case RECEIVE_ERRORS:
      errors = action.errors;
      return errors;

    case CLEAR_ERRORS:
      errors = [];
      return errors;

    default:
      return state;
  }
};

export default errorReducer;
