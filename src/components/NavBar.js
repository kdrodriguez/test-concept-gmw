import React from 'react';
import ModalResource from './ModalResource'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge} from 'reactstrap';

class NavBar extends React.Component {
  
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
  return (
    <div>
         <Navbar className="text-white bg-black" light expand="md">
          <div className="mr-2">
             <i className="fab fa-mendeley fa-2x"></i>
          </div> 
          <NavbarBrand href="https://test-concept-gmw.herokuapp.com/" className="text-white"> GRAPHQL - MENDELEY</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="https://test-concept-gmw.herokuapp.com/" className="text-white"><i className="fas fa-sync-alt"></i> Sync</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://graphql-mendeley.herokuapp.com/playground" target="_blank" className="text-white"><i className="far fa-circle"></i> GrahpQL-Playground</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/kdrodriguez/test-concept-gmw" target="_blank" className="text-white"><i className="fab fa-github"></i> GitHub Repositorio</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret className="text-white">
                  <Badge color="info" pill> User </Badge>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <ModalResource buttonLabel="Ver información del perfil" modalTitle="Información de usuario" iconSource="fas fa-user" typeResource="s-prof"/> 
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <i className="fas fa-sign-out-alt"></i> <a className="text-dark" href="https://graphql-mendeley.herokuapp.com/confirmAuth#delete_token=true" target="_blank" rel="noopener noreferrer"> Eliminar token de sesión </a>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
  );
 }
}

export default NavBar;