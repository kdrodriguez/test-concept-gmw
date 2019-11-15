import React from 'react';
//import PageProgress from 'react-page-progress';
// Poner encima de un div principal <PageProgress color={'skyblue'} height={5} />
import Documents from './Documents'
import NavBar from './NavBar'
import Library from './Library'
import Scroll from 'react-scroll';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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

      <div className="container-fluid h-100 mh-100">
        <div className="row">
          <div className="col-sm-12 p-0 mb-0">
            <NavBar />
          </div>
        </div>
        <Router>
          <div className="row">
            <div className="col-sm-2 p-0 mb-0">
              <div className="col-sm-12 card border-secondary bg-light">
                LIBRERIA
              </div>
              <Element name="test7" className="element" id="containerElement" style={{
                position: 'relative', height: '503px', overflow: 'scroll',
                marginBottom: '0px', marginLeft: '0px', marginRight: '0px'
              }}>
                <Library />
              </Element>
            </div>
            <div className="col-sm-10 p-0 mb-0">
            <Switch> 
                <Route exact path="/" component={Welcome} />
                <Route exact path="/docs/:id" component={Documents} /> 
                <Route exact path="/docs/:id/:idG" component={Documents} />
                <Route exact path="/docs/:id/details/:id" component={Documents} /> 
                <Route exact path="/docs/:id/:idG/details/:id" component={Documents} />  
                <Route component={RouteNotFound} />
            </Switch>
            </div>
          </div>
        </Router>
       <div className="row">
          <div className="col-sm-12 p-2 bg-black text-white text-center">
            Copyright &copy; UTN-CISIC GraphQL's Project 2019
            </div>
        </div>
      </div>

    );
  }
}

function RouteNotFound({ location }) {
  return (
    <div>
      <h3 className="mt-3 ml-3">
        No se encontró la ruta <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

function Welcome({ location }) {
  return (
      <div className="jumbotron mt-5 mb-5 mr-5 ml-5">
        <h1 className="display-4">Bienvenido!</h1>
        <p className="lead">Este software es una prueba de concepto del API GraphQL de Mendeley. Explore sus documentos en
        la lista de carpetas o grupos en el menú LIBRERÍA.</p>
        <hr className="my-4" />
          <p>Este software es un prototipo implementado para verificar la funcionalidad del API GraphQL de Mendeley, 
            basado en el API REST del mismo (Puede tener funciones front-end incompletas al tratarse solo de una prueba de concepto; la idea principal de este prototipo
            es demostrar que se puede usar el API GraphQL de Mendeley). Puede visitar la aplicación web Oficial clickeando en el siguiente botón.</p>
          <a className="btn btn-info btn-lg" href="https://www.mendeley.com/" role="button" target="_blank" rel="noopener noreferrer">Ir a la APP Mendeley Oficial</a>
      </div>
  );
}

export default Main;

// <Route exact path="/details" component={DocumentDetails} />


// COLUMNAS DE LISTA DE DOCS Y DETALLES
//-----------------------------------------    
/*<div className="col-sm-7 p-0 mb-0">
<div className="col-sm-12 card border-secondary bg-light text-white mt-0 mb-0">
  <ModalResourceNew buttonLabel="Nuevo Documento" modalTitle="Nuevo Documento" iconSource="fas fa-file-alt" />
</div>
<Element name="test8" className="element" id="containerElement2" style={{
  position: 'relative', height: '501px', overflow: 'scroll',
  marginBottom: '0px', marginLeft: '0px', marginRight: '0px'
}}>
   <Route exact path="/docs/:id" component={Documents} />
</Element>
</div>

<div className="col-sm-3 p-0 mb-0">
<div className="col-sm-12 card border-secondary bg-light">
  Detalles del documento
</div>
<Element name="test9" className="element" id="containerElement3" style={{
  position: 'relative', height: '501px', overflow: 'scroll',
  marginBottom: '0px', marginLeft: '0px', marginRight: '0px'
}}>

hola
</Element>
</div> */
