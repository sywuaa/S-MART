import React from 'react';
import LogInContainer from './login_container';
import SignUpContainer from './signup_container';
import ModalContainer from './modal';

class Auth extends React.Component {
  constructor(props){
    super(props);
    this.demoLogin = this.demoLogin.bind(this);

  }

  demoLogin(){
    const user = {username: 'miu', password: 'miumiumiu'};
    this.props.login({user});
  }

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
