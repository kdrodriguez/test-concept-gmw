import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const FOL_MUTATION = gql`
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
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={name}
            onChange={e => this.setState({ name: e.target.value })}
            type="text"
            placeholder="Nombre de la carpeta"
          />          
        </div>
        <hr/>
        <Mutation mutation={FOL_MUTATION} variables={{ name }}>
          {folMutation => <button onClick={folMutation}><i className="fas fa-save"></i> Guardar</button>}
        </Mutation>
      </div>
    )
  }
}

export default FolderNew