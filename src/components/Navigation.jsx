import React, { useState, useContext } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

import { LinkContainer } from 'react-router-bootstrap';
import { Divide as Hamburger } from 'hamburger-react';
import UserContext from "./contexts/UserContext"


import '../styles/navigation.css';

const Navigation = () => {
  const [isOpen, setOpen] = useState(false);
  const closeMenu = () => {
    setOpen(false);
  };

  const { user } = useContext(UserContext)


  return (
    <Navbar bg='primary' variant='dark' expand='sm' collapseOnSelect>
      <Container fluid>
        <Navbar.Brand className='text-secondary fs-3'>
          La galerie de Jérôme{' '}
        </Navbar.Brand>
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
            <LinkContainer to='/contact' onClick={closeMenu}>
              <Nav.Link className='mx-2' active={false}>
                Contact
              </Nav.Link>
            </LinkContainer>
            {user ? <div onClick={closeMenu}>
              <div>Vous êtes connecté en tant qu'admin !</div>
            </div> : ""}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  );
};

export default Navigation;
