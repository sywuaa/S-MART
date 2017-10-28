import React from 'react';
import {connect } from 'react-redux';
import { fectchCarousels } from '../../actions/carousel_actions';
import Caro from './caro';
import {selectCarousels } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  return({
    carousels: selectCarousels(state.carousels)
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    fetchCarousels: () => dispatch(detchCarousels())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Caro);
