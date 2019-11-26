import React, { Component } from 'react'
import { Mutation, Query } from 'react-apollo'
import gql from 'graphql-tag';
import { DOC_CREATE } from '../graphql-tags/graphql-tagsMutation';
//import { DOCS_QUERY_ALL } from '../graphql-tags/graphql-tagsQuery';
//import Documents from './Documents'
import SpinnerData from './Spinner';
import ErrorMsg from './ErrorMsg';
import SucessMsg from './SucessMsg';


const LAST_DOC = gql` query{
  documents(limit:"1", order:"desc"){
    id
  }
}`;

const ADD_DOC_TO_FOLDER = gql`
mutation adddocfol($idF: String!, $idD: String!){
  addDocToFolder(idF:$idF, idD:$idD){
    statusText
  }
}
`

function authorsProcessing(StringTemp){
  var authorsFormated=[];
  var first_name;
  var last_name;
  var authAux;
  const arrayAuthors = StringTemp.split("\n");
  for (var i=0; i < arrayAuthors.length; i++) {
    if(arrayAuthors[i]!==""){
    authAux = arrayAuthors[i].split(",");
    if(authAux.length===1){
      last_name= authAux[0];
      authorsFormated.push({last_name: last_name});
    }else{
      if(authAux.length >2){
        last_name="";
        for (var j=0; j< authAux.length-1; j++) {
          last_name+= authAux[j]+" ";
        }
        first_name = authAux[authAux.length-1]
        authorsFormated.push({first_name: first_name, last_name: last_name});
      }else{
        last_name= authAux[0];
        first_name = authAux[1];
        authorsFormated.push({first_name: first_name, last_name: last_name});
      }
    }
  }
}
  return authorsFormated;
}

function websitesProcessing(websitesFormated){
  return websitesFormated;
}


class DocumentNew extends Component {
  state = {
     title: '',
     type: 'book',
     authors: [],
     authorsOnChange: '',
     abstract: '',
     year: 2019,
     pages: '',
     doi: '',
     websites: [],
     websitesOnChange:''
  }

  render() {
    const { title, type, authors, authorsOnChange, abstract, year, pages, doi, websites, websitesOnChange } = this.state
    //var authors=[{first_name: "Kev", last_name:"Rodriguez"}];
    const infoAUthors= "Apellidos, nombres\nApellidos, nombres\n...";
    const infoWebSites= "https://www.mipagina.com\nhttps://www.mipagina2.com\n...";
    return (
      <div>
       
        <div className="flex flex-column mt3">
          <select className="mb2" onChange={e => this.setState({ type: e.target.value })}>
                <option key="1" value="book">Book</option>
                <option key="2" value="journal">Journal article</option>
                <option key="3" value="generic">Generic</option>
                <option key="4" value="book_section">Book section</option>
                <option key="5" value="conference_proceedings">Conference proceedings</option>
                <option key="6" value="working_paper">Working paper</option>
                <option key="7" value="report">Report</option>
                <option key="8" value="web_page">Web page</option>
                <option key="9" value="thesis">Thesis</option>
                <option key="10" value="magazine_article">Magazine article</option>
                <option key="11" value="statute">Statute</option>
                <option key="12" value="patent">Patent</option>
                <option key="13" value="newspaper_article">Newspaper article</option>
                <option key="14" value="computer_program">Computer program</option>
                <option key="15" value="hearing">Hearing</option>
                <option key="16" value="television_broadcast">Television broadcast</option>
                <option key="17" value="encyclopedia_article">Encyclopedia article</option>
                <option key="18" value="case">Case</option>
                <option key="19" value="film">Film</option>
                <option key="20" value="bill">Bill</option>
          </select>

          <input
            className="mb2"
            value={title}
            onChange={e => this.setState({ title: e.target.value })}
            type="text"
            placeholder="Título"
            required
            maxLength="255"
          />

          <textarea 
            className="mb2"
            data-toggle="tooltip" 
            data-placement="top" 
            title={infoAUthors}
            rows="4"
            value={authorsOnChange}
            onChange={e => {
              this.setState({ authors: authorsProcessing(e.target.value) })
              return this.setState({ authorsOnChange: e.target.value })
            }
            }
            type="text"
            placeholder={infoAUthors}
            maxLength="10000"
          />

          <textarea 
            className="mb2"
            rows="3"
            value={abstract}
            onChange={e => this.setState({ abstract: e.target.value })}
            type="text"
            placeholder="Resumen"
            maxLength="10000"
          />

          <input
            className="mb2"
            value={year}
            onChange={e => this.setState({ year: parseInt(e.target.value) })}
            type="number"
            placeholder="Año"
          />

          <input
            className="mb2"
            value={pages}
            onChange={e => this.setState({ pages: e.target.value })}
            type="text"
            placeholder="Páginas"
            maxLength="50"
          />

          <input
            className="mb2"
            value={doi}
            onChange={e => this.setState({ doi: e.target.value })}
            type="text"
            placeholder="DOI"
            maxLength="500"
          />

          <textarea 
            className="mb2"
            rows="4"
            value={websitesOnChange}
            onChange={e => {
              this.setState({ websites: websitesProcessing(e.target.value) })
              return this.setState({ websitesOnChange: e.target.value })
            }}
            type="text"
            placeholder={infoWebSites}
            maxLength="10000"
          />
          
        </div>
        <hr/>
        <Mutation 
          mutation={DOC_CREATE} 
          variables={{ title, type, authors, abstract, year, pages, doi, websites }}
          //update={(cache, { data: { docMutation } }) => {
          //  const { documents } = cache.readQuery({ query: DOCS_QUERY_ALL });
          //  console.log("DOCUMENTOS: ",documents);
          //  cache.writeQuery({
          //    query: DOCS_QUERY_ALL,
          //    data: { documents: documents.concat([docMutation]) },
          //  });
          //}}
        >
          {(docMutation, {data, error, loading}) => {
            if(loading) return <SpinnerData/>
            if (error) return <ErrorMsg errorMsg={`${error}`}/>
            return(
              <div>
              {data === undefined ? "" : <SucessMsg sucessMsg={`${data.createDocument.statusText}`}/>}
              <button className="btn btn-info float-right" onClick={docMutation} disabled={!title}><i className="fas fa-save"></i> Guardar</button>
              </div>
            )
          }}
        </Mutation>
       
      </div>
    )
  }
}

export default DocumentNew

  
    /* FORMA PROPUESTA    
      <Mutation 
          mutation={DOC_CREATE} 
          variables={{ title, type, authors, abstract, year, pages, doi, websites }}
          //update={(cache, { data: { docMutation } }) => {
          //  const { documents } = cache.readQuery({ query: DOCS_QUERY_ALL });
          //  console.log("DOCUMENTOS: ",documents);
          //  cache.writeQuery({
          //    query: DOCS_QUERY_ALL,
          //    data: { documents: documents.concat([docMutation]) },
          //  });
          //}}
        >
          {(docMutation, {data, error, loading}) => {
            if(loading) return <SpinnerData/>
            if (error) return `${error}`
            console.log(data);
            return(
              <div>
              <Query query={LAST_DOC}>
               {({ loading, error, data, refetch }) => {
                  var idDocument="";
                  var idFold="886aed13-3c8e-4cfe-ae55-367f0b2e7c61";
                  if(data.documents){
                  var docs = data.documents;
                  //const doc_id = data.documents[0].id;
                  console.log("NUEVO DOC: ", data.documents);
                  idDocument= docs.map((document, index)=>{if(index===0){return document.id}});
                  console.log("ID NUEVO DOC: ", idDocument[0]);
                  refetch();
                  } 
                  return(
                    <div>
                    <Mutation mutation={ADD_DOC_TO_FOLDER} variables={{idFold,idDocument}}>
                    {({data, error}) =>{
                      if(error) {console.log("Error add doc: ",`${error}`)} 
                        if(data){
                            console.log("ID NUEVO DOC: ", data);
                          }else{
                            console.log("NO SE HIZO EL ADD");
                          }

                        return(
                          <div></div>
                          );
                    }}
                    </Mutation>
                    </div>
                  );
               }}

              </Query>
              <div>
              <button className="btn btn-info float-right" onClick={docMutation} disabled={!title}><i className="fas fa-save"></i> Guardar</button>
              {data === undefined ? "" :
                data.statusText
              }
              </div>
              </div>
            )
          }}
        </Mutation>*/