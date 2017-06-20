import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';

const rootReducer = combineRedcuers({
  session: sessionReducer
});

export default rootReducer;
