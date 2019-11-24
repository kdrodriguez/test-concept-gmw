import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import { GROUP_CREATE } from '../graphql-tags/graphql-tagsMutation';


class GroupNew extends Component {
  state = {
     name: '',
     access_level: 'public',
     description: ''
  }

  render() {
    const { name, access_level, description } = this.state
    return (
      <div>
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={name}
            onChange={e => this.setState({ name: e.target.value })}
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
          <select className="mb2" onChange={e => this.setState({ access_level: e.target.value })}>
              <option key="1" value="public">Público</option>
              <option key="2" value="private">Privado</option>
              <option key="3" value="invite_only">Solo invitación</option>
          </select>          
        </div>
        <hr/>
        <div> <p><strong>Descripción de los tipos de grupos</strong></p> </div>
        <dl className="row">
          <dt className="col-sm-3"> <i className="fas fa-globe-americas"></i> Público</dt>
            <dd className="col-sm-9"> Cualquier usuario puede unirse al grupo.</dd>

          <dt className="col-sm-3"><i className="fas fa-lock"></i> Privado</dt>
            <dd className="col-sm-9"> Los usuarios podrán unirse al grupo solo con una invitación.</dd>

          <dt className="col-sm-3"><i className="fas fa-unlock-alt"></i> Solo invitación</dt>
            <dd className="col-sm-9">Público, los usuarios no pueden unirse, pero pueden seguir y pueden solicitar unirse.</dd>
        </dl>
        <hr/>
        <Mutation mutation={GROUP_CREATE} variables={{ name, access_level, description }}>
          {groupMutation => <button className="btn btn-info float-right" onClick={groupMutation} disabled={!name}><i className="fas fa-save"></i> Guardar</button>}
        </Mutation>
      </div>
    )
  }
}

export default GroupNew