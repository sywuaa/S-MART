export const RECEIVE_USER = 'RECEIVE_USER';
import * as APIUtil from '../util/user_api_util';


export const fetchUser = (id) => dispatch => {
  return(
    APIUtil.fetchUser(id)
      .then( user => dispatch(receiveUser(user)))
  );
};

export const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user
  };
};
