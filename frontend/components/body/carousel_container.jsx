import React from 'react';
import { connect } from 'react-redux';
import { fetchCarousels } from '../../actions/carousel_actions';
import Carousels from './carousel';
import { selectCarousels } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  return({
    carousels: selectCarousels(state.carousels)
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    fetchCarousels: () => dispatch(fetchCarousels())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Carousels);
