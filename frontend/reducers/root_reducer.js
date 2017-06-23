import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import campaignReducer from './campaign_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  campaign: campaignReducer
});

export default rootReducer;
