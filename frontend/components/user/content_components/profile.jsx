import React from 'react';

class Profile extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    const {user} = this.props.props;
    return (
      <div className='component-profile-container'>
        <div className='component-profile-pic-container'>
          <img className='profile-image' src={window.images.profile} />
        </div>

        <div className='component-profile-info-container'>
          <div>
            <strong>{user.campaigns.length}</strong> Campaigns
          </div>
          <div>
            <strong>{user.contributions}</strong> Contributions
          </div>

        </div>
      </div>
    );
  }



}

export default Profile;
