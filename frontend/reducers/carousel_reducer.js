import { RECEIVE_CAROUSELS } from '../actions/carousel_actions';
import { merge } from 'lodash';

const defaultState = () => ( {} );

const carouselReducer = ( state = defaultState(), action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CAROUSELS:
      let carousels = action.carousels;
      return merge( {}, state, carousels);

    default:
      return state;
  }
};

export default carouselReducer;
