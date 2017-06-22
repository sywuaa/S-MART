import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import LogInContainer from './login_container';
import SignUpContainer from './signup_container';

const customStyles = {
  
};

class ModalContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      formType: ''
    };

    this.openSignupModal = this.openSignupModal.bind(this);
    this.openLoginModal = this.openLoginModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.toggleFormType = this.toggleFormType.bind(this);
  }

  openSignupModal() {
    this.state.formType = 'signup';
    this.setState({modalIsOpen: true});
  }


  openLoginModal() {
    this.state.formType = 'login';
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  toggleFormType(){
    let type;
    this.state.formType === 'login' ? type = 'signup' : type = 'login';
    this.setState({formType: type });
  }

  render() {
    const SignUpForm = (
      <div>
        <span>
          <button onClick={this.toggleFormType}>Log In</button>
        </span>
        <br></br>
        <br></br>
        <SignUpContainer />
      </div>
    );

    const LogInForm = (
      <div>
        <span>
          <button onClick={this.toggleFormType}>Sign Up</button>
          <br></br>
          <br></br>
        </span>
        <LogInContainer />
      </div>
    );

    return (
      <div>
        <div>
          <button onClick={this.openLoginModal}>Log In</button>
          <button onClick={this.openSignupModal}>Sign Up</button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            className='modal-style'
            contentLabel="auth-form-container"
          >

          <div className="auth-form">
            {this.state.formType === 'signup' ? SignUpForm : LogInForm }
          </div>
          </Modal>
        </div>

      </div>
    );
  }
}

export default ModalContainer;
