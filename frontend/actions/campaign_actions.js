export const RECEIVE_CAMPAIGN = 'RECEIVE_CAMPAIGN';
import * as APIUtil from '../util/campaign_api_util';

export const createCampaign = (campaign) => dispatch => {
  return(
    APIUtil.createCampaign(campaign)
      .then( campaign => dispatch(receiveCampaign(campaign)))
  );
};

export const receiveCampaign = (campaign) => {
  return {
    type: RECEIVE_CAMPAIGN,
    campaign
  };
};
