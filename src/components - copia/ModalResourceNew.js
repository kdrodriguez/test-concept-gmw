import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import DocumentNew from './DocumentNew'
import FolderNew from './FolderNew'
import GroupNew from './GroupNew'
import ProfileMe from './ProfileMe'

class ModalResourceNew extends React.Component {
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
        <Button className="mb-0" color="info" size="sm" onClick={this.toggle}> <small><i className="fas fa-plus-circle"></i> {this.props.buttonLabel} </small> </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}> <i className={this.props.iconSource}></i> {this.props.modalTitle}</ModalHeader>
          <ModalBody>
          {
            (this.props.modalTitle === 'Nuevo Documento' ? <DocumentNew/> : 
             this.props.modalTitle === 'Nueva Carpeta' ?  <FolderNew/> :
             this.props.modalTitle === 'Nuevo Grupo' ?  <GroupNew/> :
             <ProfileMe/>)
          } 
          </ModalBody>
          <ModalFooter>
            <Button color="info" onClick={this.toggle}>Aceptar</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancelar</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalResourceNew;