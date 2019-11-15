import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
//import { Button } from 'reactstrap';

const FOLDER_DELETE = gql`
mutation deleteFolder($id: String!){
  deleteFolder(id: $id){
    statusText
  }
}
`
class FolderDelete extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: this.props.data.id,
      name: this.props.data.name,
   }
  }

  render() {
    const { id, name } = this.state
    return (
      <div>
        <form>
        <div> ¿Desea realmente eliminar la carpeta <strong>{name}</strong>? </div>
        <div className="flex flex-column mt3">    
        </div>
        <hr/>
        <Mutation mutation={FOLDER_DELETE} variables={{ id }}>
          {folMutation => <button className="btn btn-danger float-right" onClick={folMutation}><i className="fas fa-times"></i> Eliminar </button>}
        </Mutation>
        </form>
      </div>
    )
  }
}

export default FolderDelete