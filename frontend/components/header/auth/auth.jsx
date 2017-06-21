import React from 'react';
import { Link } from 'react-router-dom';
import LogInContainer from './login_container';
import SignUp from './signup';

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logInShow: false,
      signUpShow:false,
    };
    this.handleLogInClick = this.handleLogInClick.bind(this);
    this.handleSignUpClick = this.handleSignUpClick.bind(this);
  }

  handleLogInClick() {
    this.setState({
      logInShow: true,
      signUpShow: false
    });
  }

  handleSignUpClick(){
    this.setState({
      logInShow: false,
      signUpShow: true
    });
  }

  render(){
    if(this.props.currentUser){
      return(
        <div>
          <h2> Welcome! {this.props.currentUser.username}</h2>
          <button onClick={this.props.logout}>
            Log Out
          </button>
        </div>
      );
    }else {
      return(
        <section className='auth-button'>
          <div>
            <button onClick={this.handleLogInClick}> Log In</button>
            {this.state.logInShow ? <LogInContainer /> : null}

            <button onClick={this.handleSignUpClick}> Sign Up</button>
            {this.state.signUpShow ? <SignUp /> : null}
          </div>
        </section>
      );
    }
  }
}

export default Auth;
