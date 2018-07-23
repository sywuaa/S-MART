import React from 'react';
import Header from './header/header';
import SaveCampaign from './body/campaign/campaign_form_container';
import CampaignContainer from './body/campaign/campaign_container';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Campaign from './body/campaign/campaign';
import IndexContainer from './body/index_container';
import HeaderContainer from './header/header_container';
import UserProfileContainer from './user/user_profile_container';
import Footer from './body/footer';
import About from './about';


const App = () => (
  <div >
    <Route path='/' component={Header} />
    <Switch>
      <Route exact path='/' component={IndexContainer} />
      <Route exact path='/campaigns/:id' component={CampaignContainer} />
    </Switch>

    <Route exact path='/user/profile/:id' component={UserProfileContainer} />
    <Route exact path='/campaign/new' component={SaveCampaign} />
    <Route exact path='/about' component={About} />
    <Footer />
  </div>
);

export default App;
