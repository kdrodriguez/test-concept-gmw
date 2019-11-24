import gql from 'graphql-tag';

//---------------------------------------------------
//-------------------- QUERY ------------------------
// ***** GET DOCUMENTS
export const DOCS_QUERY_ALL = gql`
  query getDocs($folder_id: String = "", $group_id: String = "" ){
    documents(limit:"500", view:"all", folder_id: $folder_id, group_id: $group_id ){
      id
      title
      type
      year
      abstract
      created
      pages
      websites
      identifiers{
          doi
      }
      authors{
        first_name
        last_name
      }
      file_attached
      }
      }
`;

// ***** SIMPLE LIST FOLDERS QUERY
export const FOLDERS_QUERY = gql`
  {
    folders(limit:"500"){
      id
      parent_id
      name
      documents{
        title
      }
    }
  }
`;

// ***** SIMPLE LIST GROUPS QUERY
export const GROUPS_QUERY = gql`
 {
  groups{
    id
    name
    access_level
    description
    folders{
      id
      name
    }
    link
  }
}
`;

// ***** DETAILS DOCUMENT QUERY
export const DOC_DET_QUERY = gql`
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

// ***** GET FILE (DOWNLOAD FILE)
export const DOWNLOAD_FILE = gql`
query downloadFile($id: String!){
  file(id:$id){
    statusText    
    urlFile
  }
}
`;

// ***** GET PROFILE ME
export const PROFILE_ME_QUERY = gql`
{
  profileMe{
    created
    academic_status
    email
    link
    display_name
  }
}
`;

//---------------------------------------------------
//------------------ MUTATIONS ----------------------
