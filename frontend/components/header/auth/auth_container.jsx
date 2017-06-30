import React from 'react';
import { connect } from 'react-redux';
import { logout, login } from '../../../actions/session_actions';
import Auth from './auth';

const mapStateToProps = (state,ownProps) => {
  return ({
    ownProps: ownProps,
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    logout: () => dispatch(logout()),
    login: (user) => dispatch(login(user))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
