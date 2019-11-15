import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
//import { Button } from 'reactstrap';

const DOCUMENT_DELETE = gql`
mutation deleteDocument($id: String!){
  deleteDocument(id: $id){
    statusText
  }
}
`
class DocumentDelete extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: this.props.data.id,
      title: this.props.data.title,
   }
  }

  render() {
    const { id, title } = this.state
    return (
      <div>
        <form>
        <div> ¿Desea realmente eliminar el documento <strong> {title}</strong>? </div>
        <div className="flex flex-column mt3">
                
        </div>
        <hr/>
        <Mutation mutation={DOCUMENT_DELETE} variables={{ id }}>
          {docMutation => <button className="btn btn-danger float-right" onClick={docMutation}><i className="fas fa-times"></i> Eliminar </button>}
        </Mutation>
        </form>
      </div>
    )
  }
}

export default DocumentDelete