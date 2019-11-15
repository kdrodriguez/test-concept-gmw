import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ProfileMe from './ProfileMe'

class ModalProfileMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <div size="sm" onClick={this.toggle}><i className="fas fa-user"></i> {this.props.buttonLabel}</div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}><i className="fas fa-user"></i> {this.props.modalTitle}</ModalHeader>
          <ModalBody> {}
              <ProfileMe />
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Salir</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalProfileMe;