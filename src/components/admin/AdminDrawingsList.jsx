import React from 'react';
import { Link } from 'react-router-dom';

import { Row, Col, Button } from 'react-bootstrap';
import { formatDateUnix } from '../../utils/formatDate';

const AdminDrawingsList = ({ drawings, handleShow }) => {
  return (
    <div>
      <>
        <Row className='bg-secondary d-flex justify-content-center align-items-center'>
          <Col className='fw-bold'>Nom</Col>
          <Col className='fw-bold'>Date de création</Col>
          <Col className='fw-bold'>Tag</Col>
          <Col className='fw-bold'>Actions</Col>
        </Row>

        {drawings &&
          drawings.map((drawing) => (
            <Row className='d-flex justify-content-center align-items-center'>
              <Col>{drawing.title}</Col>{' '}
              <Col>{formatDateUnix(drawing.dateOfWrite)}</Col>{' '}
              <Col> {drawing.tagsId}</Col>{' '}
              <Col className='d-flex flex-diretion-row justify-content-center'>
                <Button className='m-1' size='sm' variant='warning'>
                  <Link to='/admin/update-drawing/:id'>Editer</Link>
                </Button>
                <Button
                  data-id={drawing.id}
                  onClick={handleShow}
                  className='m-1'
                  size='sm'
                  variant='danger'
                >
                  Supprimer
                </Button>
              </Col>
            </Row>
          ))}
      </>
    </div>
  );
};

export default AdminDrawingsList;
