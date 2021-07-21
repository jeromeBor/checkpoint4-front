import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import '../styles/navigation.css';

const Navigation = () => {
  return (
    <Navbar bg='primary' expand='lg'>
      <Container>
        <Navbar.Brand>La galerie de Jérome</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <LinkContainer exact to='/'>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer exact to='/gallery'>
              <Nav.Link>Gallery</Nav.Link>
            </LinkContainer>
            <LinkContainer exact to='/profile'>
              <Nav.Link>Profile</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
