import React from 'react';
import { connect } from 'react-redux';
import Campaign from './campaign';
import { fetchCampaign } from '../../../actions/campaign_actions';

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  return({
    id: id,
    currentCampaign: state.campaign.currentCampaign,
    campaign: state.campaign.entities[id]
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    fetchCampaign: (id) => dispatch(fetchCampaign(id))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Campaign);
