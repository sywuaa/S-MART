import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import LogInContainer from './login_container';
import SignUpContainer from './signup_container';

const customStyles = {
  content : {
    top                   : '20%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class ModalContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openSignupModal = this.openSignupModal.bind(this);
    this.openLoginModal = this.openLoginModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
  }

  openSignupModal() {
    this.state.formType = 'signup';
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    this.subtitle.style.color = '#f00';
  }

  openLoginModal() {
    this.state.formType = 'login';
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div>
        <div>
          <button onClick={this.openLoginModal}>Log In</button>
          <button onClick={this.openSignupModal}>Sign Up</button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            onAfterOpen={this.afterOpenModal}
            style={customStyles}
            contentLabel="auth-form-container"
          >

          <div className="auth-form">
            {this.state.formType === 'signup' ? <SignUpContainer /> : <LogInContainer />}
          </div>
          </Modal>
        </div>

      </div>
    );
  }
}

export default ModalContainer;
