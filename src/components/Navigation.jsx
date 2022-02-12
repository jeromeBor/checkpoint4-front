import React, { useState, useContext } from 'react';
import { Navbar, Container, Nav, Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Divide as Hamburger } from 'hamburger-react';
import UserContext from "./contexts/UserContext"

import { BiLogOut } from 'react-icons/bi';



import '../styles/navigation.css';

const Navigation = () => {
  const [isOpen, setOpen] = useState(false);
  const closeMenu = () => {
    setOpen(false);
  };

  const { user, setUser } = useContext(UserContext)

  const history = useHistory()

  const logOut = () => {
    localStorage.removeItem('gallery-access-token')
    setUser(null)
    history.push('/')
  }


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
            {user ?
              <div className="fw-light fs-6 p-1">
                <Button
                  onClick={logOut}
                  className="m-1"
                  size="sm"
                  variant="secondary"
                >
                  <BiLogOut class="me-1" style={{ fontSize: '20px' }} />
                  Déconnection administrateur
                </Button>
              </div>
              : ""}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  );
};

export default Navigation;
