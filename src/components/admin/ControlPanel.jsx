import React from 'react';
import { Row, Col, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ControlPanel = ({ panel, togglePanel }) => {
  return (
    <Row className='flex-column flex-md-row'>
      <Col className='d-flex flex-sm-column flex-column align-items-center justify-content-center p-1'>
        <Button size='sm' variant='success' className='m-1  w-100'>
          <Link className='text-white' to='/admin/create-drawing'>
            Créer un dessin
          </Link>
        </Button>
        <Button size='sm' variant='success' className='m-1  w-100'>
          <Link className='text-white' to='/admin/create-tag'>
            Créer un tag
          </Link>
        </Button>
      </Col>
      <Col className='d-flex flex-column align-items-center justify-content-center p-2'>
        {panel ? (
          <Button className='w-100 m-1' size='sm' onClick={togglePanel}>
            Afficher les tags
          </Button>
        ) : (
          <Button className='w-100 m-1' size='sm' onClick={togglePanel}>
            Afficher les dessins
          </Button>
        )}
        <Form className='d-flex flex-row m-1 w-100'>
          <Form.Control
            className='form-control-sm'
            type='email'
            placeholder='Rechercher par nom'
          />
          <Button size='sm' onClick={togglePanel}>
            Rechercher
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default ControlPanel;
