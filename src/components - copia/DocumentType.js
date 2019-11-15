import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const DOCS_TYPES_QUERY = gql`
 {
  document_types{
    name
    description
  }
}
`;

class DocumentType extends Component {
  render() {
    return(
      <Query query={DOCS_TYPES_QUERY}>
        {({loading, error, data}) => {
         if (loading) return "Cargando..."
          if (error) return `Error! ${error}`

            const {document_types} = data;
            return (
            <select name="document_type" onChange={DocumentType}>
                {document_types.map(document_type => (
                <option key={document_type.id} value={document_type.name}>
                {document_type.name} {document_type.description} 
                </option>
                ))}
            </select>
              );
            }
         }
      </Query>
        
    )
  }
}

export default DocumentType