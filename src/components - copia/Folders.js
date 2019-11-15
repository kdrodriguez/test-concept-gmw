import React, { Component } from 'react'
//import Document from './Document'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import SpinnerData from './Spinner';
import Tree from './tree';
import CarpetasDemo from './CarpetasDemo'
import Widget from './Widget'
//import { ListGroup, ListGroupItem, Badge, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';


const FOLDERS_QUERY = gql`
  {
  folders(limit:"500"){
  id
  parent_id
  name
  documents{
    title
  }
  }
  }
`;

class Folders extends Component {

  render() {
    return (
      <Query query={FOLDERS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <SpinnerData/>
          if (error) return `Error! ${error}`
    
          const folders = data.folders
          var fold = unflatten(folders);
          console.log('Folders', fold)
    
          return (
            <div> 
            <Widget/>
            </div>
      );
        }}
      </Query>
    )
  }
}

export default Folders

// Función para crear álrbol jerárquico de las carpetas
function unflatten(arr) {
  var tree = [],
      mappedArr = {},
      arrElem,
      mappedElem;
  // First map the nodes of the array to an object -> create a hash table.
  for(var i = 0, len = arr.length; i < len; i++) {
    arrElem = arr[i];
    mappedArr[arrElem.id] = arrElem;
    mappedArr[arrElem.id]['children'] = [];
  }

  for (var id in mappedArr) {
    if (mappedArr.hasOwnProperty(id)) {
      mappedElem = mappedArr[id];
      // If the element is not at the root level, add it to its parent array of children.
      if (mappedElem.parent_id) {
        mappedArr[mappedElem['parent_id']]['children'].push(mappedElem);
      }
      // If the element is at the root level, add it to first level elements array.
      else {
        tree.push(mappedElem);
      }
    }
  }
  return tree;
}

/* COMPONENTE ANTIGUO DE CARPETAS
 return ( 
        <div>
        <div className="list-group">
          <a key="1" href="/" className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <small>ALL DOCUMENTS</small>
            </div>
          </a>
          {data.folders.map(folder => (
          <a key={folder.id} href="/" className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
            <small>{folder.name} {folder.documents.title} {folder.name}</small>
            </div>
          </a>
          ))}
        </div>
        </div>
      );
*/