export const RECEIVE_CAMPAIGN = 'RECEIVE_CAMPAIGN';
export const RECEIVE_ALL_CAMPAIGNS = 'RECEIVE_ALL_CAMPAIGNS';
export const UPDATE_CAMPAIGN = 'UPDATE_CAMPAIGN';

import * as APIUtil from '../util/campaign_api_util';
import { receiveErrors, clearErrors } from './error_actions';

export const createCampaign = (formData) => dispatch => {
  return(
    APIUtil.createCampaign(formData)
      .then( campaign => dispatch(receiveCampaign(campaign)))
  );
};

export const fetchCampaign = (id) => dispatch => {
  return(
    APIUtil.fetchCampaign(id)
      .then( campaign => dispatch(receiveCampaign(campaign)))
  );
};

export const fetchAllCampaigns = () => dispatch => {
  return(
    APIUtil.fetchAllCampaigns()
      .then( campaigns => dispatch(receiveAllCampaigns(campaigns)),
             errors => dispatch(receiveErrors(errors.responseJSON)))
  );
};

export const updateCampaign = (campaign) => {
  return(
    APIUtil.updateCampaign(campaign)
      .then( campaign => dispatch(receiveCampaign(campaign)))
  );
};

export const receiveCampaign = (payload) => {
  return {
    type: RECEIVE_CAMPAIGN,
    payload
  };
};

export const receiveAllCampaigns = (payload) => {
  return {
    type: RECEIVE_ALL_CAMPAIGNS,
    payload
  };
};
