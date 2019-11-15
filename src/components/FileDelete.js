import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
//import { Button } from 'reactstrap';

const FILE_DELETE = gql`
mutation deleteFile($id: String!){
  deleteFile(id: $id){
    statusText
  }
}
`
class FileDelete extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: this.props.data.id,
      file_name: this.props.data.file_name,
   }
  }

  render() {
    const { id, file_name } = this.state
    return (
      <div>
        <form>
        <div> ¿Desea realmente eliminar el archivo <strong>{file_name}</strong>? </div>
        <div className="flex flex-column mt3">
                
        </div>
        <hr/>
        <Mutation mutation={FILE_DELETE} variables={{ id }}>
          {fileMutation => <button className="btn btn-danger float-right" onClick={fileMutation}><i className="fas fa-times"></i> Eliminar </button>}
        </Mutation>
        </form>
      </div>
    )
  }
}

export default FileDelete