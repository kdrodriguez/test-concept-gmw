import React, { Component } from 'react'
import { Query } from 'react-apollo'
import { DOCS_QUERY_ALL } from '../graphql-tags/graphql-tagsQuery';
import ErrorMsg from './ErrorMsg';
import { Badge } from 'reactstrap';
import SpinnerData from './Spinner';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ModalResource from './ModalResource'
import DocumentDetails from './DocumentDetails';
import Scroll from 'react-scroll';
var Element = Scroll.Element;




/*const DOCS_QUERY_ALL = gql`
  query getDocs($folder_id: String = "", $group_id: String = "" ){
  documents(limit:"500", view:"bib", folder_id: $folder_id, group_id: $group_id ){
  id
  title
  type
  year
  abstract
  created
  pages
  websites
  identifiers{
      doi
  }
  authors{
    first_name
    last_name
  }
  file_attached
  }
  }
`;*/

/*var DOCS_QUERY = gql`
  query getDocFolder($folder_id: String!) {
  documentsFolder(folder_id: $folder_id, view: "client"){
  id
  title
  type
  year
  created
  authors{
    first_name
    last_name
  }
  file_attached
  }
  }
`;*/

var authorsList = author =>{
  var res=' '+author.last_name;
if(author.hasOwnProperty('first_name')){
    if(author.first_name){
        res +=" "+ (author.first_name).substr(0,1)+"., " ;
    }else{
      delete author.first_name;
      res+="., "
    }
}else{
    res+="., "
}
  return res;
}

/*var authorsList = author =>{
  var res=' ';

    if(author.first_name === null && author.last_name === null ){
 
    }else{
      if(author.first_name === null && author.last_name !== null){
          res += author.last_name+"., " ;
      }else{
        if(author.first_name !== null && author.last_name === null){
             res += author.first_name+"., " ;
        }else{
           res += author.last_name + " "+ (author.first_name).substr(0,1)+"., "
        }
      }
    }
  return res;
}*/


class Documents extends Component {
  constructor(props){
    super(props);
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    this.state = {
      folder_id: props.match.params.id,
      group_id: props.match.params.idG,
   }
  }

  forceUpdateHandler(){
    console.log("PASO POR EL FORCE UPDTAE DOCS")
    this.forceUpdate();
  };

  componentWillReceiveProps(nextProps) {
      this.setState({ folder_id: nextProps.match.params.id, group_id: nextProps.match.params.idG });
  }

  //componentDidMount() {
  //  this.setState({folder_id:  this.props.match.params.id});
  //}

  render() {
    var {folder_id, group_id} = this.state

    if(folder_id === 'all-docs' || folder_id === 'void'){
      folder_id="";
    }

    if(group_id===undefined){
      group_id="";
    }

  // <Query query={DOCS_QUERY} pollInterval={2000}> // la consulta se actualiza cada 2 seg
 
    return (
    <Query query={DOCS_QUERY_ALL} variables={{ folder_id: folder_id, group_id: group_id}}>
      {({ loading, error, data, refetch }) => {
        if (loading) return <SpinnerData/>
        if (error) return <ErrorMsg errorMsg={`${error}`}/>

          var docs = data.documents;

        console.log("FILE ATACHED ",docs.file_attached)

        docs.map(document =>{
              if(document.authors === null)
                document.authors = [];
              return document;
        })       
        return (

          <div className="container-fluid">
            <div className="row">
            <Router>
              <div className="col-sm-8 p-0 mb-0">
                <div className="container">
                 <div className="row">
                  <div className="col-sm-10 card  bg-light text-white mt-0 mb-0">
                    <ModalResource buttonLabel="Nuevo Documento" modalTitle="Nuevo Documento" iconSource="fas fa-file-alt" typeResource="n-doc"/>
                  </div>
                  <div className="col-sm-2 card bg-light text-white mt-0 mb-0">
                    <button className="btn btn-outline-light text-muted" onClick={()=> refetch()}> <i class="fas fa-sync-alt"></i></button>
                  </div>
                    
                  </div>
                  </div>       
                <Element name="test8" className="element" id="containerElement2" style={{
                  position: 'relative', height: '501px', overflow: 'scroll',
                  marginBottom: '0px', marginLeft: '0px', marginRight: '0px'
                }}>
                  
                  <div className="list-group">
                    {docs.map(document => (
                      <Link key={document.id} to={{ pathname: this.props.match.url+"/details/"+document.id, state: { id: document.id } }} className="list-group-item list-group-item-action">
                        <div className="mt-n1 d-flex w-100 justify-content-between">
                          <h6 className="mb-0 font-weight-light small font-weight-bold">
                            {(document.file_attached === true ? <i className="far fa-file btn-info"> </i> :
                              "")}
                            {" " + document.title}
                          </h6>
                          <div><small>{(document.created).substr(0, 10)+" "}</small>
                          
                          
                          
                          
                            <small className="dropdown">
                              <i className="fas fa-chevron-circle-down" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
                              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <div className="dropdown-item">
                                  <ModalResource buttonLabel="Editar documento" modalTitle="Editar Documento" iconSource="fas fa-file-alt" typeResource="u-doc" data={document} />
                                </div>
                                 <div className="dropdown-item">
                                    <ModalResource buttonLabel="Eliminar documento" modalTitle="Eliminar Documento" iconSource="fas fa-folder" typeResource="d-doc" data={document} />
                                 </div>
                              </div>
                            </small>



                           </div>
                        </div>
                        <p className="mb-n1 mt-n2 small"> <Badge pill color="primary">{document.type}</Badge>
                          <small className="text-primary">
                            {document.authors.map(author => (
                              authorsList(author)
                            ))}
                          </small>
                          {document.year === null ? "" : " (" + document.year + ")"}
                        </p>
                      </Link>
                    ))}
                  </div>

                </Element>
              </div>

              <div className="col-sm-4 p-0 mb-0">
                <div className="col-sm-12 card border-secondary bg-light">
                  Detalles del documento
                </div>
                <Element name="test9" className="element" id="containerElement3" style={{
                  position: 'relative', height: '501px', overflow: 'scroll',
                  marginBottom: '0px', marginLeft: '0px', marginRight: '0px'
                }}>

                <Route exact path={this.props.match.url+"/details/:id"} component={DocumentDetails} />
                  </Element>
              </div>
              </Router>
            </div>
          </div>        
      );
      }}
    </Query>
    )
  }
}

 /*  <div>
         <div className="list-group">
          {docs.map(document => (
          <a key={document.id} href="/" className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <h6 className="mb-1 font-weight-light small font-weight-bold">{document.title}</h6>
              <small>{(document.created).substr(0,10)}</small>
            </div>
              <p className="mb-0 small"> <Badge pill color="primary">{document.type}</Badge> ({document.year})</p>
              <p className="mb-0"><small className="text-primary"> {document.type}</small> <small className="mb-0">({document.year})</small></p>
              <p className="mb-0 text-primary small"> {document.type} ({document.year}) </p>  

              {document.authors.map(author => (
                  <p className="mb-0 small"> <Badge pill color="primary">pizza.name</Badge> ({author.first_name})</p>  
                ))}                     
              
          </a>
          ))}
        </div>
        </div>*/


 /*<select name="dog" onChange={Documents}>
          {data.documents.map(document => (
            <option key={document.id} value={document.title}>
              {document.title}
            </option>
          ))}
        </select> */


export default Documents




/*  <div className="container-fluid">
              <div className="row">




                <div className="col-sm-10 card border-secondary bg-light">
                  <div className="col-sm-12 card border-secondary bg-light text-white mt-0 mb-0">
                    <ModalResourceNew buttonLabel="Nuevo Documento" modalTitle="Nuevo Documento" iconSource="fas fa-file-alt" />
                  </div>
                  <Element name="test8" className="element" id="containerElement2" style={{
                    position: 'relative', height: '501px', overflow: 'scroll',
                    marginBottom: '0px', marginLeft: '0px', marginRight: '0px'
                  }}>
                    <Route exact path="/docs/:id" component={DocumentsAndDetails} />
                  </Element>
                </div>




                <div className="col-sm-2 p-0 mb-0">
                  <div className="col-sm-12 card border-secondary bg-light">
                    Detalles del documento
                  </div>
                  <Element name="test9" className="element" id="containerElement3" style={{
                    position: 'relative', height: '501px', overflow: 'scroll',
                    marginBottom: '0px', marginLeft: '0px', marginRight: '0px'
                  }}>
                    hola
                  </Element>
                </div>



              </div>
            </div> */












            /*  <Query query={DOCS_QUERY} variables={{ folder_id: folder_id }}>
        {({ loading, error, data }) => {
          if (loading) return <SpinnerData/>
          if (error) return `${error}`

          const docs = data.documentsFolder;
          docs.map(document =>{
                if(document.authors === null)
                  document.authors = [];
                return document;
          })       
          return (
            <Router>
              <div className="list-group">
                {docs.map(document => (
                <Link key={document.id} to={{pathname: "/details", state:{id: document.id}}} className="list-group-item list-group-item-action">
                  <div className="mt-n1 d-flex w-100 justify-content-between">
                  <h6 className="mb-0 font-weight-light small font-weight-bold">
                    {(document.file_attached === true ? <i className="far fa-file-pdf btn-danger"> </i> : 
                       "")}
                    {" "+document.title}  
                    </h6>
                    <div><small>{(document.created).substr(0,10)}</small> <small>hola</small></div>               
                  </div>
              <p className="mb-n1 mt-n2 small"> <Badge pill color="primary">{document.type}</Badge>
               <small className="text-primary"> 
                  {document.authors.map( author => (
                  authorsList(author)
                  ))}
               </small>
               {document.year === null ? "" : " ("+document.year+")"}
              </p>                            
          </Link>
          ))}
        </div>
         <Route exact path="/details" component={DocumentDetails} />
        </Router>
        );
        }}
      </Query> */