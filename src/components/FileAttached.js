import React, { Component } from 'react'
import { Query } from 'react-apollo'
import ModalResource from './ModalResource'
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

var isPDF = file_name => {
  var isPDF = true; 
  let init =  ((file_name.length)-4);
  let end = ((file_name.length)-1)
  if((file_name).substr(init, end) !== ".pdf"){
      isPDF=false;
  }
  return isPDF;
}

class DocumentDetails extends Component {
  constructor(props){
    super(props);
    console.log('id = '+ this.props.Onefile.id);
    this.state = {
      id: '',
      document_id: ''
   }
  }

componentDidMount() {
  this.setState({id:  this.props.Onefile.id, document_id: this.props.Onefile.document_id});
}

  render() { 
    const { id, document_id } = this.state
    const viewerMendeley = "https://www.mendeley.com/viewer/?fileId="+id+"&documentId="+document_id

    return (
      <Query query={DOWNLOAD_FILE} variables={{ id: id }}>
        {({ loading, error, data }) => {
          if (loading) return <SpinnerData/>
          if (error) return `${error}`
          var isFilePDF = isPDF(this.props.Onefile.file_name); // Comprobar si el file es un PDF
    return (
      <div>
        <div><small className="mb-n1">
          {isFilePDF ? <i className="far fa-file-pdf btn-danger"> </i>  : <i class="fas fa-file btn-info"></i>}
          {" "+this.props.Onefile.file_name}</small></div>
         <div className="mb-0">
         <div className="container-fluid mb-n1">
          <div className="row">

            {isFilePDF ?  <div className="col-sm-1 p-0 mb-n1">
                        <a href={viewerMendeley} className="text-primary" target="_blank" rel="noopener noreferrer" data-toggle="tooltip" data-placement="top" title="Ver archivo"><i className="far fa-eye"></i></a>
                      </div> : 
                      ""}

            <div className="col-sm-1 p-0 mb-n1">
            <a href={data.file.urlFile} className="text-primary " data-toggle="tooltip" data-placement="top" title="Descargar archivo"><i className="fas fa-download"></i></a>
            </div>

            <div className="col-sm-1 p-0 mb-n1">
                <ModalResource buttonLabel=<i className="fas fa-trash-alt text-primary"></i> modalTitle="Eliminar Archivo" iconSource="fas fa-folder" typeResource="d-fil" data={this.props.Onefile} />
            </div>

             

        </div>
        </div>
          </div>
          <hr className="mb-1"/>
      </div>
      );
        }}
      </Query>
    )
  }
}

export default DocumentDetails
