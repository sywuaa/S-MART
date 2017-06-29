import React from 'react';
import Header from './header/header';
import SaveCampaign from './body/campaign/campaign_form_container';
import CampaignContainer from './body/campaign/campaign_container';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import Campaign from './body/campaign/campaign';
import IndexContainer from './body/index_container';

const App = () => (
  <div >
    <Header />
    <Switch>
      <Route exact path='/' component={IndexContainer} />
      <Route exact path='/campaigns/:id' component={CampaignContainer} />
    </Switch>

  </div>
);

export default App;

//
// <Route exact path='/campaign/new' component={SaveCampaign} />
