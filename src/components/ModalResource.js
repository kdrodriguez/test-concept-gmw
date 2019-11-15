import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import DocumentNew from './DocumentNew'
import FolderNew from './FolderNew'
import GroupNew from './GroupNew'
import DocumentEdit from './DocumentEdit'
import FolderEdit from './FolderEdit'
import GroupEdit from './GroupEdit'
import ProfileMe from './ProfileMe'
import FolderDelete from './FolderDelete'
import FileDelete from './FileDelete'
import GroupDelete from './GroupDelete'
import DocumentDelete from './DocumentDelete'

class ModalResource extends React.Component {
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


        {this.props.typeResource === 's-prof' ? 
        <div size="sm" onClick={this.toggle}><i className="fas fa-user"></i> {this.props.buttonLabel}</div> :
        (this.props.typeResource).substr(0,1) === 'n' ?
        <button className="btn btn-outline-light text-muted" onClick={this.toggle}><small><i className="fas fa-plus-circle"></i> {this.props.buttonLabel}</small></button>:
        <div onClick={this.toggle}> {this.props.buttonLabel} </div>
        }

        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}> <i className={this.props.iconSource}></i> {this.props.modalTitle}</ModalHeader>
          <ModalBody>
          {
            (this.props.typeResource === 'n-doc' ? <DocumentNew/>  : 
             this.props.typeResource === 'n-fol' ?  <FolderNew/> :
             this.props.typeResource === 'n-gro' ?  <GroupNew/> :
             this.props.typeResource === 'u-doc' ?  <DocumentEdit data={this.props.data}/> : 
             this.props.typeResource === 'u-fol' ?  <FolderEdit  data={this.props.data}/> :
             this.props.typeResource === 'u-gro' ?  <GroupEdit data={this.props.data}/> :
             this.props.typeResource === 'd-fol' ?  <FolderDelete data={this.props.data}/> :
             this.props.typeResource === 'd-gro' ?  <GroupDelete data={this.props.data}/> :
             this.props.typeResource === 'd-doc' ?  <DocumentDelete data={this.props.data}/> :
             this.props.typeResource === 'd-fil' ?  <FileDelete data={this.props.data}/> :
             <ProfileMe/>)
          } 
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Cancelar</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

// <div className="list-group-item list-group-item-action" size="sm" onClick={this.toggle}><small className="mt-3 mb-n3 btn-danger"><i className="fas fa-plus-circle"></i> {this.props.buttonLabel}</small></div>
//<Button className="mb-0" color="info" size="sm" onClick={this.toggle}> <small><i className="fas fa-plus-circle"></i> {this.props.buttonLabel} </small> </Button>

           //  

export default ModalResource;