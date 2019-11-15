import React, { Component } from 'react'
        import { Query } from 'react-apollo'
        import gql from 'graphql-tag'
        import FileAttached from './FileAttached'
        import SpinnerData from './Spinner';

const DOC_DET_QUERY = gql`
query getDoc($id: String!){
  document(id:$id, view:"all"){
  id
  title
  type
  abstract
  publisher
  year
  day
  month
  volume
  pages
  source
  institution
  city
  created
  authors{
    first_name
    last_name
  }
  identifiers{
    arxiv
    doi
    isbn
    issn
    pmid
    scopus
    pui
    pii
    sgr
  }
  files{
    id
    document_id 
    file_name
    size
  }
  websites
  tags
  keywords
  }
}
`;

var authorsList = author => {
    var res = ' ';
    if (author.first_name === null && author.last_name === null) {

    } else {
        if (author.first_name === null && author.last_name !== null) {
            res += author.last_name + "., ";
        } else {
            if (author.first_name !== null && author.last_name === null) {
                res += author.first_name + "., ";
            } else {
                res += author.last_name + " " + (author.first_name).substr(0, 1) + "., "
            }
        }
    }
    return res;
}

class DocumentDetails extends Component {
    state = {
        //id: 'e60856de-e55b-31de-bc2e-cd4219c65ffa',
        //id: '3cc79722-90f6-39cc-abcb-04bbaeac5053',
        id: '50503b7c-593d-32d2-9967-46699ce54e16', // dos archivos
    }

    render() {
        const {id, document_id} = this.state
        return(
                <Query query={DOC_DET_QUERY} variables={{id }}>
                    {({
                                        loading, error, data }) => {
                                                if (loading)
                                            return <SpinnerData/>
                                        if (error)
                                            return `${error}`

                                        const doc = data.document;
                                       // if (doc.authors === null)
                                       //     doc.authors = [];

                                    return (
                                                    <div className="container-fluid">
                                                        <div className="card-body ml-n3 mr-n3">
                                                            <h5 className="card-title">{doc.title}</h5>
                                                            <p className="card-subtitle text-primary mb-n1"> {doc.type}</p>
                                                            
                                                            {(doc.authors === null && doc.publisher && doc.city === null && doc.institution === null && doc.source === null && 
                                                              doc.day === null && doc.month === null && doc.year === null && doc.volume === null && doc.pages === null) ? "" : 
                                                            <div className="">
                                                                <hr className="mb-1"/>
                                                                {doc.authors === null ? "" : <p className="font-weight-lighter mb-n1 small">{doc.authors.map(author => (authorsList(author)))}</p>}
                                                                {doc.publisher === null ? "" : <p className="font-weight-lighter mb-n1 small"> <strong>Editor: </strong> {doc.publisher}</p>}
                                                                {doc.city === null ? "" : <p className="font-weight-lighter mb-n1 small"><strong>Ciudad: </strong> {doc.city}</p>}
                                                                {doc.institution === null ? "" : <p className="font-weight-lighter mb-n1 small"><strong>Institución: </strong> {doc.institution}</p>}
                                                                {doc.source === null ? "" : <p className="font-weight-lighter mb-n1 small"><strong>Fuente: </strong> {doc.source}</p>}
                                                                {doc.day === null ? "" :  <p className="font-weight-lighter mb-n1 small"><strong>Día: </strong> {doc.day}</p>}
                                                                {doc.month === null ? "" :  <p className="font-weight-lighter mb-n1 small"><strong>Mes: </strong> {doc.month}</p>}
                                                                {doc.year === null ? "" :  <p className="font-weight-lighter mb-n1 small"><strong>Año: </strong> {doc.year}</p>}
                                                                {doc.volume === null ? "" :  <p className="font-weight-lighter mb-n1 small"><strong>Volumen: </strong> {doc.volume}</p>}
                                                                {doc.pages === null ? "" :  <p className="font-weight-lighter mb-n1 small"><strong>Páginas: </strong> {doc.pages}</p>}
                                                            </div>
                                                            }
                                                            
                                                            {doc.abstract === null ? "" : 
                                                            <div className="">
                                                            <hr className="mb-1"/>                     
                                                            <p className="text-muted font-weight-bold mb-n1"> RESUMEN </p>
                                                            <p className="font-weight-lighter mb-n1">{doc.abstract}</p>
                                                            </div>
                                                            }

                                                            {doc.tags === null ? "" :
                                                            <div className=""> 
                                                            <hr className="mb-1"/>
                                                            <p className="text-muted font-weight-bold mb-n1"> ETIQUETAS </p>
                                                            {doc.tags === null ? "" : doc.tags.map(tag => (<span className="badge badge-secondary">{tag} </span>))}
                                                            </div>
                                                            }

                                                            {doc.keywords === null ? "" :
                                                            <div className=""> 
                                                            <hr className="mb-1"/>
                                                            <p className="text-muted font-weight-bold mb-n1"> PALABRAS CLAVE </p>
                                                            {doc.keywords === null ? "" : doc.keywords.map(keyword => (<span className="badge badge-secondary">{keyword} </span>))}
                                                            </div>
                                                            }

                                                            {doc.identifiers === null ? "" :
                                                            <div className="">
                                                            <hr className="mb-1"/>
                                                                <p class="text-muted font-weight-bold mb-n1"> IDENTIFICADORES </p>
                                                                {doc.identifiers.doi === null ? "" : <p className="font-weight-lighter mb-n1">DOI: {doc.identifiers.doi}</p>}
                                                                {doc.identifiers.arxiv === null ? "" : <p className="font-weight-lighter mb-n1">ARXIV: {doc.identifiers.arxiv}</p>}
                                                                {doc.identifiers.isbn === null ? "" : <p className="font-weight-lighter mb-n1">ISBN: {doc.identifiers.isbn}</p>}
                                                                {doc.identifiers.issn === null ? "" : <p className="font-weight-lighter mb-n1">ISSN: {doc.identifiers.issn}</p>}
                                                                {doc.identifiers.pmid === null ? "" : <p className="font-weight-lighter mb-n1">PMID: {doc.identifiers.pmid}</p>}
                                                                {doc.identifiers.scopus === null ? "" : <p className="font-weight-lighter mb-n1">SCOPUS: {doc.identifiers.scopus}</p>}
                                                                {doc.identifiers.pui === null ? "" : <p className="font-weight-lighter mb-n1">PUI: {doc.identifiers.pui}</p>}
                                                                {doc.identifiers.pii === null ? "" : <p className="font-weight-lighter mb-n1">PII: {doc.identifiers.pii}</p>}
                                                                {doc.identifiers.sgr === null ? "" : <p className="font-weight-lighter mb-n1">SGR: {doc.identifiers.sgr}</p>}
                                                            </div>
                                                            }

                                                            {doc.websites === null ? "" :
                                                            <div className=""> 
                                                            <hr className="mb-1"/>
                                                            <p className="text-muted font-weight-bold mb-n1"> PÁGINAS WEB </p>
                                                            {doc.websites === null ? "" : doc.websites.map(url => (<p className="font-weight-lighter mb-n1"> ➜ <a href={url} target="blank">{url}</a></p>))}
                                                            </div>
                                                            }

                                                            <hr className="mb-1"/>
                                                            <p className="text-muted font-weight-bold mb-n1"> ARCHIVOS </p>
                                                            {doc.files === null ? <p className="font-weight-lighter mb-n1 small">No existen archivos adjuntos a este documento</p> :
                                                             doc.files.map(file =>(
                                                                <div className=""> 
                                                                <FileAttached Onefile={file}/>
                                                                </div>
                                                             ))
                                                             
                                                            }

                                                        </div>
                                                    </div>
                                            )
                    }}
                </Query>
                                )
                }
            }

            export default DocumentDetails