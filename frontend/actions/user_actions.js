import * as APIUtil from '../util/user_api_util';
import { receiveCurrentUser } from './session_actions';


export const fecthUser = () => dispatch => {
  return(
    APIUtil.fetchUser()
      .then( user => dispatch(receiveCurrentUser(user)))
  );
};
