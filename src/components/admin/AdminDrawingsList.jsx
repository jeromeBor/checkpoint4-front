import React from 'react';
import { Link } from 'react-router-dom';

import { Row, Col, Button } from 'react-bootstrap';
import { formatDateUnix } from '../../utils/formatDate';

const AdminDrawingsList = ({ drawings, handleShow }) => {
  return (
    <div>
      <>
        <Row className='bg-secondary d-flex justify-content-center align-items-center'>
          <Col className='fw-bold col-auto'>ID</Col>
          <Col className='fw-bold'>Nom</Col>
          <Col className='fw-bold'>Date de création</Col>
          <Col className='fw-bold'>Tag</Col>
          <Col className='fw-bold'>Actions</Col>
        </Row>

        {drawings &&
          drawings.map((drawing) => (
            <Row
              key={drawing.id}
              className='d-flex justify-content-center align-items-center'
            >
              <Col className='col-auto'>{drawing.id}</Col>{' '}
              <Col className='col-3'>{drawing.title}</Col>
              <Col>{formatDateUnix(drawing.dateOfWrite)}</Col>
              <Col> {drawing.tagsId}</Col>
              <Col className='d-flex flex-column justify-content-center flex-sm-row'>
                <Button className='m-1 ' size='sm' variant='warning'>
                  <Link
                    to={`/admin/update-drawing/${drawing.id}`}
                    className='text-white'
                  >
                    Editer
                  </Link>
                </Button>
                <Button
                  data-id={drawing.id}
                  data-name={drawing.title}
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
