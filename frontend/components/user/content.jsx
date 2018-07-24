import React from 'react';
import Profile from './content_components/profile';
import Campaigns from './content_components/campaigns';
import Contributions from './content_components/contributions_container';

const components = {
  profile: Profile,
  campaigns: Campaigns,
  contributions: Contributions
};

class ProfileContent extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      component: 'profile'
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(input) {
    return() => {
      this.setState({component: input});
    };
  }

  render(){
    const Com = components[this.state.component];

    return(
      <div>
        <div className="content-nav" >
          <span onClick={this.handleClick('profile')} > Profile </span>
          <span onClick={this.handleClick('campaigns')} > Campaigns </span>
          <span onClick={this.handleClick('contributions')} > Contributions </span>
        </div>

        <div className='component-container'>
          <Com {...this.props}/>
        </div>

      </div>
    )
  }




}

export default ProfileContent;
