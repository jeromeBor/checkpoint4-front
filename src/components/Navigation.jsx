import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Divide as Hamburger } from 'hamburger-react';

import '../styles/navigation.css';

const Navigation = () => {
  const [isOpen, setOpen] = useState(false);
  const closeMenu = () => {
    setOpen(false);
  };
  return (
    <Navbar bg='primary' variant='dark' expand='sm' collapseOnSelect>
      <Container>
        <Navbar.Brand
          variant='secondary'
          className='text-uppercase text-secondary fw-bold'
        >
          Jerome's Gallery
        </Navbar.Brand>
        <Navbar.Toggle className='p-0'>
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            size={32}
            color='#dacc3e '
          />
        </Navbar.Toggle>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <LinkContainer exact to='/' onClick={closeMenu}>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/drawings' onClick={closeMenu}>
              <Nav.Link active={false}>Gallery</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/form' onClick={closeMenu}>
              <Nav.Link active={false}>Form</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
