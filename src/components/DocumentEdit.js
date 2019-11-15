import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const DOC_UPDATE = gql`
    mutation updateDoc($id: String!, $title: String!, $type: String!, 
    								$authors: [PersonInput!],$abstract:String, $year: Int, 
    								$pages: String, $doi: String, $websites: [String!]){
  updateDocument(id: $id, document:{
    title:$title
    type:$type
    authors: $authors
    abstract:$abstract
    year: $year
    pages: $pages
    identifiers:{
      doi: $doi
    }
    websites:$websites
  }){
    statusText
  }
}
`
function websitesProcessingInverse(arrayWebsites){
  var websitesString="";
  for (var i=0; i < arrayWebsites.length; i++) {
    if(i=== arrayWebsites.length-1){
      websitesString+=arrayWebsites[i];
    }else{
      websitesString+=arrayWebsites[i]+"\n";
    }
  }
  return websitesString;
}

function authorsProcessingInverse(arrayAuthors){
  var authorsString="";
  for (var i=0; i < arrayAuthors.length; i++) {
    authorsString+=arrayAuthors[i].last_name;
    if(arrayAuthors[i].first_name){
      authorsString+=", "+arrayAuthors[i].first_name;
    }
    if(i !== arrayAuthors.length-1){
      authorsString+="\n"
    }
  }
  return authorsString;
}

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
  console.log('websites: ', websitesFormated);
  return websitesFormated;
}


class DocumentEdit extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: this.props.data.id,
      title: this.props.data.title,
      type: this.props.data.type,
      authors: this.props.data.authors=== null ? [] : authorsProcessing(authorsProcessingInverse(this.props.data.authors)),
      authorsOnChange: this.props.data.authors !== null ? authorsProcessingInverse(this.props.data.authors) : '',
      abstract: this.props.data.abstract=== null ? '' : this.props.data.abstract,
      year: this.props.data.year,
      pages: this.props.data.pages=== null ? '' : this.props.data.pages,
      doi: this.props.data.identifiers === null ? '' : this.props.data.identifiers.doi === null ? '' : this.props.data.identifiers.doi,
      websites: this.props.data.websites=== null ? '' : this.props.data.websites,
      websitesOnChange: this.props.data.websites !== null ? websitesProcessingInverse(this.props.data.websites): ''
   }
   //console.log('Authors con nulls',this.props.data.authors);
   console.log('year: ',this.state.year);
  }

  handleBlur () {
    console.log('desenfoque');
  }

  render() {
    const { id, title, type, authors, authorsOnChange, abstract, year, pages, doi, websites, websitesOnChange } = this.state
    //var authors=[{first_name: "Kev", last_name:"Rodriguez"}];
    const infoAUthors= "Apellidos, nombres\nApellidos, nombres\n...";
    const infoWebSites= "https://www.mipagina.com\nhttps://www.mipagina2.com\n...";
    return (
      <div>
        
        <div className="flex flex-column mt3">
          <select className="mb2" value={type} onChange={e => this.setState({ type: e.target.value })}>
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
            onBlur={this.handleBlur}
            type="text"
            placeholder={infoAUthors}
            maxLength="10000"
          />

          <textarea 
            className="mb2"
            rows="3"
            value={abstract}
            onChange={e => this.setState({ abstract: e.target.value })}
            onBlur={() => {
              console.log('desenfoque abstract');
            }}
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
        <Mutation mutation={DOC_UPDATE} variables={{ id, title, type, authors, abstract, year, pages, doi, websites }}>
          {(docMutation, {error, data }) => {
            console.log('error', error);
            console.log('data', data);
          return (<button className="btn btn-info float-right" 
          onClick={docMutation} 
          disabled={!title}><i className="fas fa-save"></i> Guardar Edición</button>)
          }}
        </Mutation>
      
      </div>
    )
  }

}

export default DocumentEdit