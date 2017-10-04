import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/error_actions';
import { merge } from 'lodash';

const defaultState = () => ({
  errors: [],
});
const errorReducer = (state = defaultState(), action) => {
  debugger
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
