import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import { FOLDER_DELETE } from '../graphql-tags/graphql-tagsMutation';


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
        <div> ¿Desea realmente eliminar la carpeta <strong>{name}</strong>? </div>
        <div className="flex flex-column mt3">    
        </div>
        <hr/>
        <Mutation mutation={FOLDER_DELETE} variables={{ id }}>
          {folMutation => <button className="btn btn-danger float-right" onClick={folMutation}><i className="fas fa-times"></i> Eliminar </button>}
        </Mutation>
      </div>
    )
  }
}

export default FolderDelete