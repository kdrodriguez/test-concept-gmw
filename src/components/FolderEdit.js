import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import { FOLDER_UPDATE } from '../graphql-tags/graphql-tagsMutation';
import SpinnerData from './Spinner';
import ErrorMsg from './ErrorMsg';
import SucessMsg from './SucessMsg';


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
          {(folMutation, {error, data, loading}) => {
            if(loading) return <SpinnerData/>
            if (error) return <ErrorMsg errorMsg={`${error}`}/>
            return (
              <div>
              {data === undefined ? "" : <SucessMsg sucessMsg={`${data.updateFolder.statusText}`}/>}
              <button className="btn btn-info float-right" onClick={folMutation} disabled={!name}><i className="fas fa-save"></i> Guardar edición</button>
              </div>
          )}}
        </Mutation>
      </div>
    )
  }
}

// {folMutation => <Button color="info" onClick={folMutation}><i className="fas fa-save"></i> Guardar</Button>}

export default FolderEdit