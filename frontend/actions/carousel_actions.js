export const RECEIVE_CAROUSELS = 'RECEIVE_CAROUSELS';

import * as APIUtil from '../util/carousel_api_util';

export const fetchCarousels = () => dispatch => {
  return(
    APIUtil.fetchCarousels()
      .then( carousels => dispatch(receiveCarousels(carousels)))
  );
};

export const receiveCarousels = (carousels) => {
  return {
    type: RECEIVE_CAROUSELS,
    carousels
  };
};
