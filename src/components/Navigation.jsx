import React from 'react';
import { Navbar, Container, Nav, Breadcrumb } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import '../styles/navigation.css';

const Navigation = () => {
  return (
    <Navbar bg='primary' variant='dark' expand='sm'>
      <Container>
        <Navbar.Brand
          variant='secondary'
          className='text-uppercase text-secondary fw-bold'
        >
          Jerome's Gallery
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <LinkContainer exact to='/'>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer exact to='/drawings'>
              <Nav.Link>Gallery</Nav.Link>
            </LinkContainer>
            <LinkContainer exact to='/form'>
              <Nav.Link>Form</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
