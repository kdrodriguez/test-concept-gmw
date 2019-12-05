import React, { Component } from 'react'
import { Query } from 'react-apollo'
import { GROUPS_QUERY } from '../graphql-tags/graphql-tagsQuery';
import SpinnerData from './Spinner';
import { Link } from "react-router-dom";
import ModalResource from './ModalResource'
import ErrorMsg from './ErrorMsg';


class Groups extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    // <Query query={DOCS_QUERY} pollInterval={2000}> // la consulta se actualiza cada 2 seg
    return (
      <Query query={GROUPS_QUERY}>
        {({ loading, error, data, refetch }) => {
          if (loading) return <SpinnerData />
          if (error) return <ErrorMsg errorMsg={`${error}`} />

          return (
            <div className="pane-content">
              <label>
                <div className="d-inline-block"><ModalResource buttonLabel="Nuevo grupo " modalTitle="Nuevo Grupo" iconSource="fas fa-users" typeResource="n-gro" /></div>
                <button className="btn btn-outline-light text-muted d-inline-block" onClick={() => refetch()}> <i className="fas fa-sync-alt"></i></button>
              </label>
              <label>
                <div className="list-group">
                  {data.groups.map(group => (
                    <div key={group.id}>
                      <div className="d-inline">
                        <Link to={"/docs/void/" + group.id} key={group.id} className="list-group-item list-group-item-action">
                          <div className="d-flex w-100 justify-content-between">
                            <small className="mt-n2 mb-n2 ml-n3 mr-n3">
                              {group.access_level === 'private' ? <i className="fas fa-lock"></i> : <i className="fas fa-globe-americas"></i>}
                              {" " + group.name}</small>
                          </div>
                        </Link>
                      </div>
                      <div className="d-inline bg-danger">
                        <ul>
                        {group.folders.map(folder => (
                          <li> <Link to={"/docs/" + folder.id + "/" + group.id} key={folder.id}>{folder.name}</Link></li>
                        ))}
                          <li>
                          <small className="dropdown mr-n3 mt-n3">
                          <i className="fas fa-chevron-circle-down" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
                          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <div className="dropdown-item">
                              <ModalResource buttonLabel="Editar grupo" modalTitle="Editar Grupo" iconSource="fas fa-users" typeResource="u-gro" data={group} />
                            </div>
                            <div className="dropdown-item">
                              <ModalResource buttonLabel="Eliminar grupo" modalTitle="Eliminar Grupo" iconSource="fas fa-folder" typeResource="d-gro" data={group} />
                            </div>
                            <a className="dropdown-item" href={group.link} target="_blank" rel="noopener noreferrer"> Detalles del grupo </a>
                          </div>
                        </small>
                          </li>
                        </ul>
                      </div>

                    </div>

                  ))}

                </div>
              </label>
            </div>
          );
        }}
      </Query>
    )
  }
}

export default Groups