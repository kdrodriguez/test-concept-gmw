import React from 'react';
import ModalProfileMe from './ModalProfileMe'

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
         <Navbar color="dark" className="text-white" light expand="md">
          <div className="mr-2">
             <i className="fab fa-mendeley fa-2x"></i>
          </div> 
          <NavbarBrand href="/" className="text-white"> GRAPHQL - MENDELEY</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
               <NavItem>
                <NavLink href="/components/" className="text-white">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/" className="text-white">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="http://localhost:4000" target="blank" className="text-white">API-GrahpQL</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret className="text-white">
                  <Badge color="info" pill> KR </Badge>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <ModalProfileMe buttonLabel="Ver información del perfil" modalTitle="Información de usuario"/>
                  </DropdownItem>
                  <DropdownItem>
                     <i className="fas fa-sign-out-alt"></i> Otra opcion
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <i className="fas fa-sign-out-alt"></i> Cerrar sesión
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