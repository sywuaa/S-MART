import React from 'react';
import LogInContainer from './login_container';
import SignUpContainer from './signup_container';
import ModalContainer from './modal';

class Auth extends React.Component {
  constructor(props){
    super(props);
    this.demoLogin = this.demoLogin.bind(this);
    this.profile = this.profile.bind(this);
  }

  demoLogin(){
    const user = {username: 'guest', password: 'miumiumiu'};
    this.props.login({user});
  }

  profile(id){
    return () => {
      this.props.ownProps.history.push(`/user/profile/${id}`);
    };
  }

  render(){
    if(this.props.currentUser){
      const currentUser = this.props.currentUser;
      return(
        <div>
          <button onClick={this.profile(currentUser.id)} > Welcome!  {this.props.currentUser.username.toUpperCase()}</button>
          <button onClick={this.props.logout}>
            Log Out
          </button>
        </div>
      );
    }else {
      return(
        <div>

        <button onClick={this.demoLogin}>Demo</button>
        <section className='modal-container'>
          <ModalContainer />
        </section>
        </div>
      );
    }
  }
}

export default Auth;
