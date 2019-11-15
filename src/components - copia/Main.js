import React from 'react';
//import PageProgress from 'react-page-progress';
// Poner encima de un div principal <PageProgress color={'skyblue'} height={5} />
import Documents from './Documents'
import ModalResourceNew from './ModalResourceNew'
import NavBar from './NavBar'
import Library from './Library'
import Scroll from 'react-scroll';
import FileAttached from './FileAttached'
import DocumentDetails from './DocumentDetails'
var Element = Scroll.Element;

class Main extends React.Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (

        <div className="container-fluid">



          <div className="row">
            <div className="col-sm-12 p-0 mb-0">
              <NavBar />
            </div>
          </div>






          <div className="row">
            <div className="col-sm-2 p-0 mb-0">
              <div className="col-sm-12 card border-secondary bg-light">
                LIBRERIA
              </div>
              <Element name="test7" className="element" id="containerElement" style={{
                position: 'relative',
                height: '501px',
                overflow: 'scroll',
                marginBottom: '0px',
                marginLeft: '0px',
                marginRight: '0px'
              }}>

                <Library />
              </Element>
            </div>
            <div className="col-sm-7 p-0 mb-0">
              <div className="col-sm-12 card border-secondary bg-light text-white mt-0 mb-0">
                <ModalResourceNew buttonLabel="Nuevo Documento" modalTitle="Nuevo Documento" iconSource="fas fa-file-alt" />
              </div>
              <Element name="test8" className="element" id="containerElement2" style={{
                position: 'relative',
                height: '501px',
                overflow: 'scroll',
                marginBottom: '0px',
                marginLeft: '0px',
                marginRight: '0px'
              }}>
                <Documents />
              </Element>
            </div>
            <div className="col-sm-3 p-0 mb-0">

              <div className="col-sm-12 card border-secondary bg-light">
                Detalles del documento
              </div>

              <Element name="test9" className="element" id="containerElement3" style={{
                position: 'relative',
                height: '501px',
                overflow: 'scroll',
                marginBottom: '0px',
                marginLeft: '0px',
                marginRight: '0px'
              }}>
                <DocumentDetails />
              </Element>
            </div>
          </div>





          <div className="row">
            <div className="col-sm-12 p-2 mb-2 bg-dark text-white text-center">
              Copyright &copy; UTN-CISIC GraphQL's Project 2019
            </div>
          </div>




        </div>
    );
  }
}

export default Main;