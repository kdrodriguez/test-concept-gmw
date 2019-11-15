import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Badge } from 'reactstrap';
import Documents from './Documents'


import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const FOLDERS_QUERY = gql`
  {
  folders(limit: "100"){
  id
  name
  documents{
    id
    title
    type
    year
    created
    authors{
      first_name
      last_name
    }
  }
  }
  }
`;

function ConsoleTest() {
  return(
     <Query query={FOLDERS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return "Cargando..."
          if (error) return `Error! ${error}`
          //const folders = data.folders
          console.log(data.folders)
          const folds = data.folders;
          console.log(folds)
          return(
      <Router> 
        <div className="list-group">
          <Link to="/about" key="1" className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <small>ALL DOCUMENTS</small>
            </div>
          </Link>
          {folds.map(folder => (
          <Link to={"/docs/"+folder.id} key={folder.id} className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
            <small>{folder.name} {folder.documents.title}</small>
            </div>
          </Link>
          ))}
        </div>

        <hr />

        <Route exact path="/docs/:id" component={Documents} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
        <Route path="/others" component={Others} />
        
     </Router>

            )

      }}
    </Query>
  )
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Others() {
  return (
    <div>
      <h2>Others</h2>
    </div>
  );
}

function Topics({ match }) {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

<hr />
      <Route path={`${match.path}/:topicId`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

function Topic({ match }) {
  return (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  );
}

//------------------------------------------




export default ConsoleTest;