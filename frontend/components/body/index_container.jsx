import React from 'react';
import { connect } from 'react-redux';
import IndexPage from './index_page';
import { fetchAllCampaigns } from '../../actions/campaign_actions';
import { selectAllCampaigns } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  return({
    campaigns: selectAllCampaigns(state.campaigns.entities)
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    fetchAllCampaigns: () => dispatch(fetchAllCampaigns())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexPage);
