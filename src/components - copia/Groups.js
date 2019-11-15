import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import SpinnerData from './Spinner';

const GROUPS_QUERY = gql`
 {
  groups{
    id
    name
  }
}
`;

class Groups extends Component {

  render() {
  // <Query query={DOCS_QUERY} pollInterval={2000}> // la consulta se actualiza cada 2 seg
    return (
      <Query query={GROUPS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <SpinnerData/>
          if (error) return `Error! ${error}`
    
          //const docsToRender = data.documents
         return (
        
        <div>
        <div className="list-group">
          {data.groups.map(group => (
          <a key={group.id} href="/" className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
            <small>{group.name}</small>
            </div>
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

export default Groups