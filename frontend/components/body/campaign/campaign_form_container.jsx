import React from 'react';
import { connect } from 'react-redux';
import { createCampaign } from '../../../actions/campaign_actions';
import SaveCampaign from './campaign_form';

const mapStateToProps = (state) => {
  return({
    // userId: state.session.currentUser.id,
    campaign: state.campaign
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    createCampaign: (campaign) => dispatch(createCampaign(campaign))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SaveCampaign);
