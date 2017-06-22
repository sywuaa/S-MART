import React from 'react';
import { connect } from 'react-redux';
import Title from './title';

const mapStateToProps = (state) => {
  return({
    title: state.campaign
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Title);
