import React from 'react';
import ProfileContent from './content';

class UserProfile extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchUser(this.props.id);
  }

  componentWillReceiveProps(newProps){
    if(!this.props.user || parseInt(newProps.match.params.id) !== this.props.user.id){
      this.props.fetchUser(newProps.match.params.id);
    }
  }


  render(){
    const { user } = this.props;
    if( user ){
      return(
        <div className="profile-page" >
          <div className="profile-nav" >

            <span>Profile</span>


          </div>
          <div className='profile-detail-container'>
            <h1 className='profile-name'>{user.first_name}</h1>
            <div className="profile-content" >
                <ProfileContent props={this.props}/>
            </div>
          </div>
        </div>

      );
    }else {
      return null;
    }

  }


}

export default UserProfile;
// <span>Edit</span>
