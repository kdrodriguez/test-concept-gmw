import React, { Component } from 'react'
//import Document from './Document'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import SpinnerData from './Spinner';
//import { ListGroup, ListGroupItem, Badge, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

import Tree from './tree'

const FOLDERS_QUERY = gql`
  {
  folders(limit:"100"){
  id
  parent_id
  name
  documents{
    title
  }
  }
  }
`;

class TestFolder extends Component {

  render() {
    return (
      <Query query={FOLDERS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <SpinnerData/>
          if (error) return `Error! ${error}`
  
          const folders = data.folders
          var fold = unflatten(folders);
          console.log(fold);
          //fold[0].isSelected = true;
        console.log('Folders', fold)
    
          return (
            <div> 
            <Tree data={fold}/>
            </div>
        );
        }}
      </Query>
    )
  }
}

export default TestFolder

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