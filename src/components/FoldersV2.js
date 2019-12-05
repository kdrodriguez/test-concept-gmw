import React, { Component } from 'react'
import { Query } from 'react-apollo'
import { FOLDERS_QUERY } from '../graphql-tags/graphql-tagsQuery';
import SpinnerData from './Spinner';
//import Tree from './tree';
//import CarpetasDemo from './CarpetasDemo'
//import Widget from './Widget'
import { Link } from "react-router-dom";
import ModalResource from './ModalResource'
import ErrorMsg from './ErrorMsg';


class FoldersV2 extends Component {
  render() {
    return (
      <Query query={FOLDERS_QUERY}>
        {({ loading, error, data, refetch }) => {
          if (loading) return <SpinnerData />
          if (error) return <ErrorMsg errorMsg={`${error}`} />

          const folders = data.folders
          var fold = unflatten(folders);
          console.log('Folders', fold)

          return (
         



                <div id="jstree" className="ml-n4">
                  <ul>
                    <li data-jstree='{ "icon":"fas fa-circle" }'>  <small>Todos los documentos </small>
                      <div className="d-inline">
                        <small className="dropdown mr-n3">
                          <i className="fas fa-chevron-circle-down" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
                          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <div className="dropdown-item">
                              <ModalResource buttonLabel="Editar carpeta" modalTitle="Editar Carpeta" iconSource="fas fa-folder" typeResource="u-fol" />
                            </div>
                            <div className="dropdown-item">
                              <ModalResource buttonLabel="Eliminar carpeta" modalTitle="Eliminar Carpeta" iconSource="fas fa-folder" typeResource="d-fol" />
                            </div>
                            <div className="dropdown-item" href="#">Agregar sub-carpeta</div>
                          </div>
                        </small>
                      </div>
                    </li>
                    {data.folders.map(folder => (
                      <li data-jstree='{ "icon":"fas fa-circle" }'> <small>{folder.name} </small>
                        <div className="d-inline">
                          <small className="dropdown mr-n3">
                            <i className="fas fa-chevron-circle-down" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                              <div className="dropdown-item">
                                <ModalResource buttonLabel="Editar carpeta" modalTitle="Editar Carpeta" iconSource="fas fa-folder" typeResource="u-fol" data={folder}/>
                              </div>
                              <div className="dropdown-item">
                                <ModalResource buttonLabel="Eliminar carpeta" modalTitle="Eliminar Carpeta" iconSource="fas fa-folder" typeResource="d-fol" data={folder}/>
                              </div>
                              <div className="dropdown-item" href="#">Agregar sub-carpeta</div>
                            </div>
                          </small>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>



        
          );
        }}
      </Query>
    )
  }
}

export default FoldersV2

// Función para crear álrbol jerárquico de las carpetas
function unflatten(arr) {
  var tree = [],
    mappedArr = {},
    arrElem,
    mappedElem;
  // First map the nodes of the array to an object -> create a hash table.
  for (var i = 0, len = arr.length; i < len; i++) {
    arrElem = arr[i];
    mappedArr[arrElem.id] = arrElem;
    mappedArr[arrElem.id]['children'] = [];
  }

  for (var id in mappedArr) {
    if (mappedArr.hasOwnProperty(id)) {
      mappedElem = mappedArr[id];
      // If the element is not at the root level, add it to its parent array of children.
      if (mappedElem.parent_id) {
        mappedArr[mappedElem['parent_id']]['children'].push(mappedElem);
      }
      // If the element is at the root level, add it to first level elements array.
      else {
        tree.push(mappedElem);
      }
    }
  }
  return tree;
}

/* COMPONENTE ANTIGUO DE CARPETAS
 return (
        <div>
        <div className="list-group">
          <a key="1" href="/" className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <small>ALL DOCUMENTS</small>
            </div>
          </a>
          {data.folders.map(folder => (
          <a key={folder.id} href="/" className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
            <small>{folder.name} {folder.documents.title} {folder.name}</small>
            </div>
          </a>
          ))}
        </div>
        </div>
      );
*/