import gql from 'graphql-tag';

//---------------------------------------------------
//-------------------- QUERY ------------------------
// ***** SIMPLE LIST DOCUMENTS QUERY
const DOCS_QUERY = gql`
  {
  documents(limit:"500"){
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
`;

// ***** SIMPLE LIST DOCUMENTS_TYPES QUERY
const DOCS_TYPES_QUERY = gql`
 {
  document_types{
    name
    description
  }
}
`;

// ***** SIMPLE LIST FOLDERS QUERY
const FOLDERS_QUERY = gql`
  {
  folders{
  	id
  	name
  }
  }
`;

// ***** SIMPLE LIST GROUPS QUERY
const GROUPS_QUERY = gql`
 {
  groups{
  	id
    name
  }
}
`;

//---------------------------------------------------
//------------------ MUTATIONS ----------------------

export default DOCS_QUERY;