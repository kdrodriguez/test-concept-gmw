import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import { FOLDER_CREATE } from '../graphql-tags/graphql-tagsMutation';
import SpinnerData from './Spinner';
import ErrorMsg from './ErrorMsg';
import SucessMsg from './SucessMsg';

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
            required
            maxLength="255"
          />          
        </div>
        <hr/>
        <Mutation mutation={FOLDER_CREATE} variables={{ name }}>
          {(folMutation,{error, data, loading}) => {
            if(loading) return <SpinnerData/>
            if (error) return <ErrorMsg errorMsg={`${error}`}/>
            return (
              <div>
              {data === undefined ? "" : <SucessMsg sucessMsg={`${data.createFolder.statusText}`}/>}
              <button className="btn btn-info float-right" onClick={folMutation} disabled={!name}><i className="fas fa-save"></i> Guardar</button>
              </div>
        )}}
        </Mutation>
      </div>
    )
  }
}

// {folMutation => <Button color="info" onClick={folMutation}><i className="fas fa-save"></i> Guardar</Button>}

export default FolderNew