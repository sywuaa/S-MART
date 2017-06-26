import React from 'react';
import Header from './header/header';
import SaveCampaign from './body/campaign/campaign_form_container';
import Campaign from './body/campaign/campaign';

const App = () => (
  <div className="header">
    <Header />
    <SaveCampaign />
  </div>
);

export default App;

// <Campaign />
