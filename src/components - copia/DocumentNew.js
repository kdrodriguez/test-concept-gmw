import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const DOC_MUTATION = gql`
  mutation createDoc($title: String!, $type:String!, $abstract:String, $year: Int, $pages: String
                     $doi: String){
  createDocument(document:{
    title:$title
    type:$type
    abstract:$abstract
    year: $year
    pages: $pages
    identifiers:{
      doi: $doi
    }
  }){
    statusText
  }
}
`

/*const DOC_MUTATION = gql`
mutation createDoc($doc: DocumentInput!){
  createDocument(document: $doc
  ){
    statusText
  }
}
` */

class DocumentNew extends Component {
  state = {
     title: '',
     type: 'book',
     abstract: '',
     year: 2019,
     pages: '',
     doi: ''
  }

  render() {
    const { title, type, abstract, year, pages, doi } = this.state
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
          />
          <textarea 
            className="mb2"
            rows="4"
            value={abstract}
            onChange={e => this.setState({ abstract: e.target.value })}
            type="text"
            placeholder="Resumen"
          />

          <input
            className="mb2"
            value={year}
            onChange={e => this.setState({ year: parseInt(e.target.value) })}
            type="number"
            max="2019"
            placeholder="Año"
          />

          <input
            className="mb2"
            value={pages}
            onChange={e => this.setState({ pages: e.target.value })}
            type="text"
            placeholder="Páginas"
          />

          <input
            className="mb2"
            value={doi}
            onChange={e => this.setState({ doi: e.target.value })}
            type="text"
            placeholder="DOI"
          />
          
        </div>
        <hr/>
        <Mutation mutation={DOC_MUTATION} variables={{ title, type, abstract, year, pages, doi }}>
          {docMutation => <button onClick={docMutation}><i className="fas fa-save"></i> Guardar</button>}
        </Mutation>
      </div>
    )
  }
}

export default DocumentNew