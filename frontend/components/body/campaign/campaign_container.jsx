import React from 'react';
import { connect } from 'react-redux';
import Campaign from './campaign';
import { fetchCampaign } from '../../../actions/campaign_actions';
import { createContribution } from '../../../actions/contribution_actions';

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  return({
    id: id,
    currentCampaign: state.campaigns.currentCampaign,
    campaign: state.campaigns.entities[id],
    session: state.session.currentUser
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    fetchCampaign: (id) => dispatch(fetchCampaign(id)),
    createContribution: (contribution) => dispatch(createContribution(contribution))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Campaign);
