import { login, logout, signup } from './util/session_api_util';
import configureStore from './store/store';

window.login = login;
window.logout = logout;
window.signup = signup;
