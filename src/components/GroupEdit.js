import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const GROUP_UPDATE = gql`
mutation updateGroup($id: String!, $name: String!, 
  									 $access_level: String!, $description: String){
  updateGroup(id: $id, group:{
    name:$name
    access_level:$access_level
    description: $description
  }){
    statusText
  }
}
`
class GroupEdit extends Component {

  constructor(props){
    super(props);
    this.state = {
      id: this.props.data.id,
      name: this.props.data.name,
      access_level: this.props.data.access_level,
      description: this.props.data.description,
      link: this.props.data.link,
   }
  }

  render() {
    const { id, name, access_level, description, link} = this.state

    return (
      <div>
        <form>
        <div className="flex flex-column mt2">
          <p className="">Grupo de tipo: {access_level}</p>
          <input
            className="mb2"
            value={name}
            onChange={e => this.setState({ name: e.target.value})}
            type="text"
            placeholder="Nombre del grupo"
            required
            maxLength="100"
          />
          <textarea 
            className="mb2"
            rows="4"
            value={description}
            onChange={e => this.setState({ description: e.target.value })}
            type="text"
            placeholder="Descripción del grupo"
            maxLength="512"
          />
          <p  className="text-muted"><small> Para realizar una edición a detalle, diríjase a este <a href={link} className="text-decoration-none" target="_blank" rel="noopener noreferrer">enlace</a></small></p>
        </div>     
        <hr/>
        <Mutation mutation={GROUP_UPDATE} variables={{ id, name, access_level, description }}>
          {groupMutation => <button className="btn btn-info" onClick={groupMutation} disabled={!name}><i className="fas fa-save"></i> Guardar edición</button>}
        </Mutation>
        </form>
      </div>
    )
  }
}

export default GroupEdit