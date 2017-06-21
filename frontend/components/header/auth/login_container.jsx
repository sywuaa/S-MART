import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../../actions/session_actions';
import LogIn from './login';

const mapStateToProps = (state) => {
  return({
    errors: state.session.errors
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    login: (user) => dispatch(login(user))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogIn);
