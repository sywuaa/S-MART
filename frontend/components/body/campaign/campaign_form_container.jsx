import React from 'react';
import { connect } from 'react-redux';
import SaveCampaign from './campaign_form';
//
// const mapStateToProps = (state) => {
//   return({
//     campaign: state.campaign
//   });
// };
//
// const mapDispatchToProps = (dispatch) => {
//   return({
//     saveCampaign: (campaign)
//   });
// };

export default connect(
  null,
  null
)(SaveCampaign);
