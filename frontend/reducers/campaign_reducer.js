import { RECEIVE_CAMPAIGN, RECEIVE_ALL_CAMPAIGNS, UPDATE_CAMPAIGN } from '../actions/campaign_actions';
import selectAllCampaigns from './selectors';
import { merge } from 'lodash';

const defaultState = () => (
  {}
);

const campaignReducer = (state = defaultState(), action) => {
  Object.freeze(state);
  let campaign;
  switch(action.type){
    case RECEIVE_CAMPAIGN:
      campaign = action.campaign;
      return { campaign };
    case RECEIVE_ALL_CAMPAIGNS:
      const campaigns = selectAllCampaigns(action.campaigns);
      return campaigns;
    case UPDATE_CAMPAIGN:
      campaign = action.campaign;
      return { campaign };
    default:
      return state;
  }
};

export default campaignReducer;
