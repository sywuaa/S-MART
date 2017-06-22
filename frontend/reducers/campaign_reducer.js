import { RECEIVE_CAMPAIGN } from '../actions/campaign_actions';
import { merge } from 'lodash';

const defaultState = (
  {}
);

const campaignReducer = (state = defaultState(), action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CAMPAIGN:
      const campaign = action.campagin;
      return { campaign };
    default:
      return state;
  }
};

export default campaignReducer;
