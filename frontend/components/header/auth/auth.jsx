import React from 'react';
import LogInContainer from './login_container';
import SignUpContainer from './signup_container';
import ModalContainer from './modal';

class Auth extends React.Component {
  render(){
    if(this.props.currentUser){
      const currentUser = this.props.currentUser;
      return(
        <div>
          <span> Welcome! {this.props.currentUser.username}</span>
          <button onClick={this.props.logout}>
            Log Out
          </button>
        </div>
      );
    }else {
      return(
        <section className='modal-container'>
          <ModalContainer />
        </section>
      );
    }
  }
}

export default Auth;
