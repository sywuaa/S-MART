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
            <a target='_blank' href="https://www.github.com/sywuaa" ><span>Github</span></a>
            <a target='_blank' href="https://www.linkedin.com/in/shaoyong-wu-38a8a4103"><span>LinkedIn</span></a>
            <a target='_blank' href="https://www.sywu.us/" ><span>Portfolio</span></a>
        </div>


        <div className="right-nav">
          <div className="newCampaign">
            <button onClick={this.newCampaign} >Start A Campaign</button>
          </div>
          <AuthContainer ownProps={this.props} />
        </div>
      </div>
    );
  }
}

export default Header;
