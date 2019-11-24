import React, { Component } from 'react'

import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


class Folders extends Component {

  render() {
    return (
  
    <div className="w-100">
           <Router>

            <div className="list-group">
            <div>
              <Link to="/docs/" key="1" className="list-group-item d-inline-block">
                <div className="d-flex w-100 justify-content-between">
                  <small className="mt-n2 mb-n2 ml-n3 mr-n3 text-dark"> <i className="fas fa-circle text-dark"></i> Todos los documentos </small>
                  hola
                </div>
              </Link>
              <div className="d-inline-block">
                  <a href="http://www.jquery2dotnet.com"><i className="fas fa-chevron-circle-down"></i></a>
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
      </div>
    )
  }
}

export default Folders


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