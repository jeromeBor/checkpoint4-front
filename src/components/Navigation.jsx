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
      <Container fluid>
        <Navbar.Toggle className='p-0'>
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            size={40}
            color='#dacc3e '
            rounded
          />
        </Navbar.Toggle>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <LinkContainer exact to='/' onClick={closeMenu}>
              <Nav.Link className='mx-2' active={false}>
                Accueil
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/drawings' onClick={closeMenu}>
              <Nav.Link className='mx-2' active={false}>
                Galerie
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/form' onClick={closeMenu}>
              <Nav.Link className='mx-2' active={false}>
                Form
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
