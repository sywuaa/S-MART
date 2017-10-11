import React from 'react';
import { connect } from 'react-redux';
import { createCampaign } from '../../../actions/campaign_actions';
import SaveCampaign from './campaign_form';
import { clearErrors } from '../../../actions/error_actions';

const mapStateToProps = (state) => {
  return({
    campaign: state.campaigns,
    errors: state.errors
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    createCampaign: (campaign) => dispatch(createCampaign(campaign)),
    clearErrors: () => dispatch(clearErrors()),
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SaveCampaign);
