import * as APIUtil from '../util/contribution_api_util';
import { receiveCampaign } from './campaign_actions';

export const createContribution = (contribution) => dispatch => {
  return(
    APIUtil.createContribution(contribution)
      .then( campaign => dispatch(receiveCampaign(campaign)))
  );
};
