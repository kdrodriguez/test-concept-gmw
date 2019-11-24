import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import { DOCUMENT_DELETE } from '../graphql-tags/graphql-tagsMutation';
import SpinnerData from './Spinner';
import Documents from './Documents';
import ErrorMsg from './ErrorMsg';

class DocumentDelete extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: this.props.data.id,
      title: this.props.data.title,
   }
  }

  render() {
    const { id, title } = this.state
     return (
    <Mutation mutation={DOCUMENT_DELETE} variables={{ id }}>
      {(docMutation, { data, error, loading }) => {
         if(loading) return <SpinnerData/>
         if (error) return <ErrorMsg errorMsg={`${error}`}/>
          
        return(
        <div>
          <form onSubmit={e => {e.preventDefault(); docMutation();}}>
            <div> ¿Desea realmente eliminar el documento <strong> {title}</strong>? </div>
             <div className="flex flex-column mt3">
                
             </div>
             <hr/>
            <button type="submit" onClick={()=>Documents.forceUpdateHandler} className="btn btn-danger float-right"><i className="fas fa-times"></i> Eliminar </button>
            {data === undefined ? " " : <p>{data.statusText}</p> }
          </form>
        </div>
      )}}
    </Mutation>
    )
  }
}

export default DocumentDelete


 /*return (
      <div>
        <div> ¿Desea realmente eliminar el documento <strong> {title}</strong>? </div>
        <div className="flex flex-column mt3">
                
        </div>
        <hr/>
        <Mutation mutation={DOCUMENT_DELETE} variables={{ id }}>
          {(docMutation, {data, error, loading}) => {
            if(loading) return <SpinnerData/>
            if (error) return `${error}`
            return(
              <button className="btn btn-danger float-right" onClick={docMutation}><i className="fas fa-times"></i> Eliminar </button>
            )}}
        </Mutation>
      </div>
    )*/