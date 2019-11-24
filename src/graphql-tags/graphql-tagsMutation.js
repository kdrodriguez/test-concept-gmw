import gql from 'graphql-tag';

//------------------------------------------------------
//-------------------- MUTATION ------------------------

// ********************** CREATE **********************
//*****************************************************

// ***** DOCUMENT NEW
export const DOC_CREATE = gql`
  mutation createDoc($title: String!, $type: String!, $authors: [PersonInput!],
                     $abstract:String, $year: Int, $pages: String
                     $doi: String, $websites: [String!]){
  createDocument(document:{
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

// ***** FOLDER NEW
export const FOLDER_CREATE = gql`
mutation createFol($name: String!){
  createFolder(folder:{
    name:$name
  }){
    statusText
  }
}
`

// ***** GROUP NEW
export const GROUP_CREATE= gql`
mutation createGroup($name: String!, $access_level: String!, $description: String){
  createGroup(group:{
    name:$name
    access_level:$access_level
    description: $description
  }){
    statusText
  }
}
`
// ********************** UPDATE **********************
//*****************************************************

// ***** DOCUMENT EDIT
export const DOC_UPDATE = gql`
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

// ***** FOLDER EDIT
export const FOLDER_UPDATE = gql`
mutation updateFolder($id: String!, $name: String!){
  updateFolder(id: $id, folder:{
    name:$name
  }){
    statusText
  }
}
`

// ***** GROUP EDIT
export const GROUP_UPDATE = gql`
mutation updateGroup($id: String!, $name: String!, 
                     $access_level: String!, $description: String){
  updateGroup(id: $id, group:{
    name:$name
    access_level:$access_level
    description: $description
  }){
    statusText
  }
}
`

// ********************** DELETE **********************
//*****************************************************

// ***** DOCUMENT DELETE
export const DOCUMENT_DELETE = gql`
mutation deleteDocument($id: String!){
  deleteDocument(id: $id){
    statusText
  }
}
`

// ***** FOLDER DELETE
export const FOLDER_DELETE = gql`
mutation deleteFolder($id: String!){
  deleteFolder(id: $id){
    statusText
  }
}
`

// ***** GROUP DELETE
export const GROUP_DELETE = gql`
mutation deleteGroup($id: String!){
  deleteGroup(id: $id){
    statusText
  }
}
`
// ***** FILE DELETE
export const FILE_DELETE = gql`
mutation deleteFile($id: String!){
  deleteFile(id: $id){
    statusText
  }
}
`




