import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
//import { ListGroup, ListGroupItem, Badge, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import { Badge } from 'reactstrap';
//import SimpleDocument from './SimpleDocument';
import SpinnerData from './Spinner';

const DOCS_QUERY = gql`
  {
  documents(limit:"500", view:"all", order:"desc", sort:"created"){
  id
  title
  type
  year
  created
  authors{
    first_name
    last_name
  }
  folder_uuids
  file_attached
  }
  }
`;

var authorsList = author =>{
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
}

 

class Documents extends Component {

  render() {
  // <Query query={DOCS_QUERY} pollInterval={2000}> // la consulta se actualiza cada 2 seg
    return (
      <Query query={DOCS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <SpinnerData/>
          if (error) return `${error}`

          const docs = data.documents;
          docs.map(document =>{
                if(document.authors === null)
                  document.authors = [];
                return document;
          })

          //console.log(docs)

          return (
            <div>
              <div className="list-group">
                {docs.map(document => (
                <a key={document.id} href="/" className="list-group-item list-group-item-action">
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
          </a>

          ))}
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