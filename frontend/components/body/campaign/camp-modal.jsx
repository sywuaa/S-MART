import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {

};

class ModalContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      formType: ''
    };

    this.openMessageModal = this.openMessageModal.bind(this);
    this.openConfirmationModal = this.openConfirmationModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.toggleFormType = this.toggleFormType.bind(this);
  }

  openMessagepModal() {
    this.state.formType = 'message';
    this.setState({modalIsOpen: true});
  }


  openLoginModal() {
    this.state.formType = 'confirmation';
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  toggleFormType(){
    let type;
    this.state.formType === 'message' ? type = 'message' : type = 'confirmation';
    this.setState({formType: type });
  }

  render() {
    const Message = (
      <div>
        Please sign in !
      </div>
    );

    const Confirmation = (
      <div>
        Confirm purchase!!
      </div>
    );

    return (
      <div>
        <div>
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
          >

          <div>
            {this.props.formType === 'message' ? Message : Confirmation }
          </div>
          </Modal>
        </div>
      </div>
    );
  }
}

export default ModalContainer;
