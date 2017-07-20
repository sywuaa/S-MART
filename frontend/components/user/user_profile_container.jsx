import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions.js';
import UserProfile from './user_profile';
import { selectAllCampaigns } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  return({
    id: id,
    currentUser: state.users.currentUser,
    user: state.users.entities[id]
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    fetchUser: (id) => dispatch(fetchUser(id))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
