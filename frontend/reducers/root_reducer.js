import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import campaignReducer from './campaign_reducer';
import carouselReducer from './carousel_reducer';
import userReducer from './user_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  campaigns: campaignReducer,
  carousels: carouselReducer,
  users: userReducer,
});

export default rootReducer;
