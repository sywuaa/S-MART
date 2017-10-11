import { RECEIVE_CAMPAIGN, RECEIVE_ALL_CAMPAIGNS, UPDATE_CAMPAIGN } from '../actions/campaign_actions';
import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/error_actions';
import selectAllCampaigns from './selectors';
import { merge } from 'lodash';

const defaultState = () => ({
  entities: {},
  currentCampaign: null,
});

const campaignReducer = (state = defaultState(), action) => {
  Object.freeze(state);
  let campaign;
  switch(action.type){

    case RECEIVE_CAMPAIGN:
      campaign = action.payload.campaign;
      let newState = merge( {}, state);
      newState.entities[campaign.id] = campaign;
      newState.currentCampaign = campaign.id;
      return newState;

    case RECEIVE_ALL_CAMPAIGNS:
      return merge( {}, state, { entities: action.payload });

    case UPDATE_CAMPAIGN:
      campaign = action.campaign;
      return { campaign };

    default:
      return state;
  }
};

export default campaignReducer;
