import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import SpinnerData from './Spinner';

const DOWNLOAD_FILE = gql`
query downloadFile($id: String!){
  file(id:$id){
    statusText    
    urlFile
  }
}
`;

class DocumentDetails extends Component {
  constructor(props){
    super(props);
    console.log('id = '+ this.props.Onefile.id);
    this.state = {
      id: '5b5ddb43-dd43-9a3d-646e-32ddfb4cea35',
      document_id: '2d839370-f9cc-31e1-b5c8-e93698eca6a0'
   }
  }

componentDidMount() {
  this.setState({id:  this.props.Onefile.id, document_id: this.props.Onefile.document_id});
}

  render() { 
    //this.setState( {id: this.props.Onefile.id, document_id: this.props.Onefile.document_id });
    const { id, document_id } = this.state
    const idS= this.props.Onefile.id;
    const document_idS= this.props.Onefile.document_id;

    const viewerMendeley = "https://www.mendeley.com/viewer/?fileId="+id+"&documentId="+document_id
    return (
      <Query query={DOWNLOAD_FILE} variables={{ id: id }}>
        {({ loading, error, data }) => {
          if (loading) return <SpinnerData/>
          if (error) return `${error}`
    return (

     
      <div>
        <h6 className="card-title mb-n1"> <i className="far fa-file-pdf btn-danger"> </i> {this.props.Onefile.file_name}</h6>
         <div className="mb-0">
                (<a href={viewerMendeley} className="text-primary " target="blank">Ver</a>) 
                (<a href={data.file.urlFile} className="text-primary ">Descargar</a>) 
                (<a href="#" className="text-primary ">Eliminar</a>)
          </div>
      </div>
    
      );
        }}
      </Query>
    )
  }
}

export default DocumentDetails
