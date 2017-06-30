import React from 'react';
import AuthContainer from './auth/auth_container';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.newCampaign = this.newCampaign.bind(this);
  }

  newCampaign(){
    this.props.history.push('/campaign/new');
  }

  render(){
    return(
      <div className="header-container">
        <div className="left-nav">
          <Link className="logo" to='/'>S-Mart</Link>
          <span>Explore</span>
          <span>How It Works</span>
          <span>About Us</span>
        </div>

        <div className="right-nav">
          <div className="newCampaign">
            <button onClick={this.newCampaign} >Start A Campaign</button>
          </div>
          <AuthContainer />
        </div>
      </div>
    );
  }
}

export default Header;
