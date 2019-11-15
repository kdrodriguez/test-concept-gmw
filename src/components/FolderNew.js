import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
//import { Button } from 'reactstrap';

const FOLDER_CREATE = gql`
mutation createFol($name: String!){
  createFolder(folder:{
    name:$name
  }){
    statusText
  }
}
`
class FolderNew extends Component {
  state = {
     name: ''
  }
 
  render() {
    const { name } = this.state
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
        <Mutation mutation={FOLDER_CREATE} variables={{ name }}>
          {folMutation => <button className="btn btn-info float-right" onClick={folMutation} disabled={!name}><i className="fas fa-save"></i> Guardar</button>}
        </Mutation>
        </form>
      </div>
    )
  }
}

// {folMutation => <Button color="info" onClick={folMutation}><i className="fas fa-save"></i> Guardar</Button>}

export default FolderNew