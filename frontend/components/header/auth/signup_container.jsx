import React from 'react';
import { connect } from 'react-redux';
import { signup, clearErrors } from '../../../actions/session_actions';
import SignUp from './signup';

const mapStateToProps = (state) => {
  return({
    errors: state.errors
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    signup: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
