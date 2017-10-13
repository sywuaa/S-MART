import React from 'react';
import { connect } from 'react-redux';
import { login, clearErrors } from '../../../actions/session_actions';
import LogIn from './login';

const mapStateToProps = (state) => {
  return({
    errors: state.errors
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    login: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogIn);
