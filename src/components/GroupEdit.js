import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import { GROUP_UPDATE } from '../graphql-tags/graphql-tagsMutation';
import SpinnerData from './Spinner';
import ErrorMsg from './ErrorMsg';
import SucessMsg from './SucessMsg';

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
          {(groupMutation, {error, data, loading}) => {
            if(loading) return <SpinnerData/>
            if (error) return <ErrorMsg errorMsg={`${error}`}/>
            return (
              <div>
              {data === undefined ? "" : <SucessMsg sucessMsg={`${data.updateGroup.statusText}`}/>}
              <button className="btn btn-info float-right" onClick={groupMutation} disabled={!name}><i className="fas fa-save"></i> Guardar edición</button>
              </div>
        )}}
        </Mutation>
      </div>
    )
  }
}

export default GroupEdit