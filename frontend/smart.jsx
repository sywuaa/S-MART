import React from 'react';
import ReactDOM from 'react-dom';
import { createCampaign, fecthCampaign, fecthAllCampaigns, updateCampaign } from './actions/campaign_actions';
import configureStore from './store/store';
import Root from './components/root';
import Modal from 'react-modal';

document.addEventListener('DOMContentLoaded', () => {
  let store;

  if(window.currentUser){
    const preloadedState = {session: { currentUser: window.currentUser }};
    store = configureStore(preloadedState);
    delete window.currentUser;
  }else {
    store = configureStore();
  }

  Modal.setAppElement('#main');
  const main = document.getElementById('main');
  ReactDOM.render(<Root store={store}/>, main);
});
