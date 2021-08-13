import React from 'react';
import { Link } from 'react-router-dom';

import { Form, Button, Col, Row } from 'react-bootstrap';

const Login = () => {
  return (
    <div
      style={{ 'min-height': 'inherit' }}
      className='logincontainer w-100 d-flex justify-content-center align-items-sm-center flex-column'
    >
      <Row>
        <Col className='bg-light rounded p-3 col-12 col'>
          <Form>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label className='text-primary fs-5'>Identifiant</Form.Label>
              <Form.Control
                className='fs-6'
                type='email'
                placeholder='Votre identifiant'
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label className='text-primary fs-5'>
                Mot de passe
              </Form.Label>
              <Form.Control type='password' placeholder='Password' />
            </Form.Group>

            <Button variant='primary' type='submit' className='w-100'>
              Se connecter
            </Button>
          </Form>
        </Col>
      </Row>
      <Col className='col-6  mx-auto m-2'>
        <Button variant='outline-white' type='submit' className='w-100 '>
          <Link to='/'> Revenir à l'accueil</Link>
        </Button>
      </Col>
    </div>
  );
};

export default Login;
