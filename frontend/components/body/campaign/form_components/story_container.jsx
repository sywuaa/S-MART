import React from 'react';
import { connect } from 'react-redux';
import Story from './story';

const mapStateToProps = (state) => {
  return({
    story: state.campaign
  });
};

const mapDispatchToProps = (dispatch) => {
  return({

  });
};

export default connect(
  null,
  null
)(story);
