import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import { FOLDER_DELETE } from '../graphql-tags/graphql-tagsMutation';
import SpinnerData from './Spinner';
import ErrorMsg from './ErrorMsg';
import SucessMsg from './SucessMsg';

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
          {(folMutation, {error, data, loading}) => {
            if(loading) return <SpinnerData/>
            if (error) return <ErrorMsg errorMsg={`${error}`}/>
            return (
              <div>
              <button className="btn btn-danger float-right" onClick={folMutation}><i className="fas fa-times"></i> Eliminar </button>
              {data === undefined ? "" : <SucessMsg sucessMsg={`${data.deleteFolder.statusText}`}/>}
              </div>
         )}}
        </Mutation>
      </div>
    )
  }
}

export default FolderDelete