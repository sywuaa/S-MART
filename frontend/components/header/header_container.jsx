import React from 'react';
import { connect } from 'react-redux';
import Header from './header';

const mapStateToProps = (state,ownProps) => {
  return({
    ownProps: ownProps
  });
};


export default connect(
  mapStateToProps,
  null
)(Header);
