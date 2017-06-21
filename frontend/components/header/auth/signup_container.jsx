import React from 'react';
import { connect } from 'react-redux';
import {signup} from '../../../actions.session_actions';
import SignUp from './signup';

const mapStateToProps = (state) => {
  return({
    errors: state.session.errors
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    signup: (user) => dispatch(signup(user))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
