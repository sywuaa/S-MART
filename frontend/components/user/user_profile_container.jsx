import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions.js';
import UserProfile from './user_profile';

const mapStateToProps = (state) => {
  return({
    user: state.session.currentUser
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    fetchUser: () => dispatch(fetchUser())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
