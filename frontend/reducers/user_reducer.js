import { RECEIVE_USER } from '../actions/user_actions';
import { merge } from 'lodash';

const defaultState = () => ({
  currentUser: null,
  entities: {},
});

const userReducer = ( state = defaultState(), action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER:
      let user = action.user;
      let newState = merge ( {}, state);
      newState.entities[user.id] = user;
      newState.currentUser = user.id;
      return newState;

    default:
      return state;
  }
};


export default userReducer;
