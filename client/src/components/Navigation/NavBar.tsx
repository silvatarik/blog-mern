import React from 'react';
import { Button, Container, Nav, Navbar, NavbarBrand, NavbarText } from 'reactstrap';
import { Link } from 'react-router-dom';
export interface INavigationProps {}

const NavBar: React.FunctionComponent<INavigationProps> = (props) => {
    return (
      <Navbar color="light" light sticky="top" expand="md">
      <Container>
          <NavbarBrand tag={Link} to='/'>📝</NavbarBrand>
          <Nav className="mr-auto" navbar></Nav>
      </Container>
  </Navbar>
    );
};

export default NavBar;
