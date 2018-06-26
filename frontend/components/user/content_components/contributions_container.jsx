import React from 'react';
import { connect } from 'react-redux';
import Contributions from './contributions';

const mapStateToProps = (state) => {
  return({
    user_id: state.session.currentUser
  });
};

export default connect(
  mapStateToProps,
  null
)(Contributions);
