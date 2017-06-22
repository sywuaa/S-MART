import React from 'react';
import Header from './header/header';
import SaveCampaign from './body/campaign/campaign_form_container';

const App = () => (
  <div className="header">
    <Header />
    <SaveCampaign />
  </div>
);

export default App;
