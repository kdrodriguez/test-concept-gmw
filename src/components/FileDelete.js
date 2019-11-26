import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import { FILE_DELETE } from '../graphql-tags/graphql-tagsMutation';
import SpinnerData from './Spinner';
import ErrorMsg from './ErrorMsg';
import SucessMsg from './SucessMsg';


class FileDelete extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: this.props.data.id,
      file_name: this.props.data.file_name,
   }
  }

  render() {
    const { id, file_name } = this.state
    return (
      <div>
        <div> ¿Desea realmente eliminar el archivo <strong>{file_name}</strong> ? </div>
        <div className="flex flex-column mt3">
                
        </div>
        <hr/>
        <Mutation mutation={FILE_DELETE} variables={{ id }}>
          {(fileMutation, {error, data, loading }) => {
            if(loading) return <SpinnerData/>
            if (error) return <ErrorMsg errorMsg={`${error}`}/>
            return(
            <div>
            <button className="btn btn-danger float-right" onClick={fileMutation}><i className="fas fa-times"></i> Eliminar </button>
            {data === undefined ? "" : <SucessMsg sucessMsg={`${data.deleteFile.statusText}`}/>}
            </div>
         )}}
        </Mutation>
      </div>
    )
  }
}

export default FileDelete