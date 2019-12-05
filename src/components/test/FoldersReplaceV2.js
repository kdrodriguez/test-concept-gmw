import React, { Component } from 'react'

import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ModalResource from '../ModalResource'


class FoldersRV2 extends Component {

  render() {
    return (
                 <div id="jstree" className="ml-n4">
                  <ul>
                    <li data-jstree='{ "icon":"fas fa-circle" }'> <small> Todos los documentos  </small>
                    <div className="d-inline">
                    <small className="dropdown mr-n3">
                      <i className="fas fa-chevron-circle-down" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <div className="dropdown-item">
                          <ModalResource buttonLabel="Editar carpeta" modalTitle="Editar Carpeta" iconSource="fas fa-folder" typeResource="u-fol" />
                        </div>
                        <div className="dropdown-item">
                          <ModalResource buttonLabel="Eliminar carpeta" modalTitle="Eliminar Carpeta" iconSource="fas fa-folder" typeResource="d-fol"/>
                        </div>
                        <div className="dropdown-item" href="#">Agregar sub-carpeta</div>
                      </div>
                    </small>
                  </div>
                    </li>
                    <li data-jstree='{ "icon":"fas fa-circle" }'> Todos los documentos </li>
                  </ul>
                </div>
      

    )
  }
}

export default FoldersRV2


/*<div className="w-50">
           <Router>

            <div className="list-group">
            <div>
              <Link to="/docs/" key="1" className="list-group-item list-group-item-action d-inline-block">
                <div className="d-flex w-100 justify-content-between">
                  <small className="mt-n2 mb-n2 ml-n3 mr-n3"> <i className="fas fa-circle"></i> Todos los documentos </small>
                </div>
              </Link>
              <div className="pull-right action-buttons d-inline-block">
                                <a href="http://www.jquery2dotnet.com"><i className="fas fa-circle"></a>
                                <a href="http://www.jquery2dotnet.com" class="trash"><i className="fas fa-circle"></a>
                                <a href="http://www.jquery2dotnet.com" class="flag"><i className="fas fa-circle"></a>
                            </div>
              </div>
              <div>
              <Link to="/docs/" key="1" className="list-group-item list-group-item-action">
                <div className="d-flex w-100 justify-content-between">
                  <small className="mt-n2 mb-n2 ml-n3 mr-n3"> <i className="fas fa-circle"></i> DOC2 </small>
                </div>
              </Link>
              </div>
              <div>
              <Link to="/docs/" key="1" className="list-group-item list-group-item-action">
                <div className="d-flex w-100 justify-content-between">
                  <small className="mt-n2 mb-n2 ml-n3 mr-n3"> <i className="fas fa-circle"></i> DOC3 </small>
                </div>
              </Link>
              </div>
         
            </div>
            </Router>
      </div>*/


     /* <ul class="list-group">
                        <li class="list-group-item">
                                <label className="d-inline-block">
                                    List group item heading
                                </label>
                            <div className="pull-right action-buttons d-inline-block">
                                <a href="http://www.jquery2dotnet.com"><i className="fas fa-sync-alt"></i></a>
                                <a href="http://www.jquery2dotnet.com" class="trash"><i className="fas fa-sync-alt"></i></a>
                                <a href="http://www.jquery2dotnet.com" class="flag"><i className="fas fa-sync-alt"></i></a>
                            </div>
                        </li>
                        <li class="list-group-item">
                                <label for="checkbox2">
                                    List group item heading 1
                                </label>
                            <div class="pull-right action-buttons">
                                <a href="http://www.jquery2dotnet.com"><span class="glyphicon glyphicon-pencil"></span></a>
                                <a href="http://www.jquery2dotnet.com" class="trash"><span class="glyphicon glyphicon-trash"></span></a>
                                <a href="http://www.jquery2dotnet.com" class="flag"><span class="glyphicon glyphicon-flag"></span></a>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="checkbox">
                                <input type="checkbox" id="checkbox3" />
                                <label for="checkbox3">
                                    List group item heading 2
                                </label>
                            </div>
                            <div class="pull-right action-buttons">
                                <a href="http://www.jquery2dotnet.com"><span class="glyphicon glyphicon-pencil"></span></a>
                                <a href="http://www.jquery2dotnet.com" class="trash"><span class="glyphicon glyphicon-trash"></span></a>
                                <a href="http://www.jquery2dotnet.com" class="flag"><span class="glyphicon glyphicon-flag"></span></a>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="checkbox">
                                <input type="checkbox" id="checkbox4" />
                                <label for="checkbox4">
                                    List group item heading 3
                                </label>
                            </div>
                            <div class="pull-right action-buttons">
                                <a href="http://www.jquery2dotnet.com"><span class="glyphicon glyphicon-pencil"></span></a>
                                <a href="http://www.jquery2dotnet.com" class="trash"><span class="glyphicon glyphicon-trash"></span></a>
                                <a href="http://www.jquery2dotnet.com" class="flag"><span class="glyphicon glyphicon-flag"></span></a>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="checkbox">
                                <input type="checkbox" id="checkbox5" />
                                <label for="checkbox5">
                                    List group item heading 4
                                </label>
                            </div>
                           <div class="pull-right action-buttons">
                                <a href="http://www.jquery2dotnet.com"><span class="glyphicon glyphicon-pencil"></span></a>
                                <a href="http://www.jquery2dotnet.com" class="trash"><span class="glyphicon glyphicon-trash"></span></a>
                                <a href="http://www.jquery2dotnet.com" class="flag"><span class="glyphicon glyphicon-flag"></span></a>
                            </div>
                        </li>
                    </ul>*/