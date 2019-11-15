import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
//import { Button } from 'reactstrap';

const FOLDER_UPDATE = gql`
mutation updateFolder($id: String!, $name: String!){
  updateFolder(id: $id, folder:{
    name:$name
  }){
    statusText
  }
}
`
class FolderEdit extends Component {
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
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={name}
            onChange={e => this.setState({ name: e.target.value })}
            type="text"
            placeholder="Nombre de la carpeta"
            required
            maxLength="255"
          />          
        </div>
        <hr/>
        <Mutation mutation={FOLDER_UPDATE} variables={{ id, name }}>
          {folMutation => <button className="btn btn-info" onClick={folMutation} disabled={!name}><i className="fas fa-save"></i> Guardar edición</button>}
        </Mutation>
        </form>
      </div>
    )
  }
}

// {folMutation => <Button color="info" onClick={folMutation}><i className="fas fa-save"></i> Guardar</Button>}

export default FolderEdit