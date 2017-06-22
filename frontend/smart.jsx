import React from 'react';
import ReactDOM from 'react-dom';
import { login, logout, signup } from './util/session_api_util';
import { createCampaign } from './util/campaign_api_util';
import configureStore from './store/store';
import Root from './components/root';
import Modal from 'react-modal';

//
window.login = login;
// window.logout = logout;
// window.signup = signup;
// window.getState = store.getState;
window.createCampaign = createCampaign;



document.addEventListener('DOMContentLoaded', () => {
  let store;
  if(window.currentUser){
    const preloadedState = {session: { currentUser: window.currentUser }};
    store = configureStore(preloadedState);
    delete window.currentUser;
  }else {
    store = configureStore();
  }
  window.dispatch = store.dispatch;
  Modal.setAppElement('#main');
  const main = document.getElementById('main');
  ReactDOM.render(<Root store={store}/>, main);
});
