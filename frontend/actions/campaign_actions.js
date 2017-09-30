export const RECEIVE_CAMPAIGN = 'RECEIVE_CAMPAIGN';
export const RECEIVE_ALL_CAMPAIGNS = 'RECEIVE_ALL_CAMPAIGNS';
export const UPDATE_CAMPAIGN = 'UPDATE_CAMPAIGN';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

import * as APIUtil from '../util/campaign_api_util';
// import { receiveErrors, clearErrors } from './error_actions';

export const createCampaign = (formData) => dispatch => {
  debugger
  return(
    APIUtil.createCampaign(formData)
      .then( campaign => dispatch(receiveCampaign(campaign)),
             errors => dispatch(receiveErrors(errors.responseJSON)))
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
      .then( campaigns => dispatch(receiveAllCampaigns(campaigns)))
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

export const receiveErrors = errors => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};
