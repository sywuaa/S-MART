export const RECEIVE_CAMPAIGN = 'RECEIVE_CAMPAIGN';
export const RECEIVE_ALL_CAMPAIGNS = 'RECEIVE_ALL_CAMPAIGNS';
export const UPDATE_CAMPAIGN = 'UPDATE_CAMPAIGN';

import * as APIUtil from '../util/campaign_api_util';

export const createCampaign = (campaign) => dispatch => {
  return(
    APIUtil.createCampaign(campaign)
      .then( campaign => dispatch(receiveCampaign(campaign)))
  );
};

export const fecthCampaign = (id) => dispatch => {
  return(
    APIUtil.fetchCampaign(id)
      .then( campaign => dispatch(receiveCampaign(campaign)))
  );
};

export const fetchAllCampaigns = () => dispatch => {
  return(
    APIUtil.fecthAllCampaigns()
      .then( campaigns => dispatch(receiveAllCampaigns(campaigns)))
  );
};

export const updateCampaign = (campaign) => {
  return(
    APIUtil.updateCampaign(campaign)
      .then( campaign => dispatch(receiveCampaign(campaign)))
  );
};

export const receiveCampaign = (campaign) => {
  return {
    type: RECEIVE_CAMPAIGN,
    campaign
  };
};

export const receiveAllCampaigns = (campaigns) => {
  return {
    type: RECEIVE_ALL_CAMPAIGNS,
    campaigns
  };
};
