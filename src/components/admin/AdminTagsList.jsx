import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Row, Col, Button } from 'react-bootstrap';

const AdminTagsList = ({ tags, onValidation }) => {
  const [validationButtonTag, setValidationButtonTag] = useState(false);

  function toggleValidationButtonTag() {
    setValidationButtonTag(!validationButtonTag);
  }

  return (
    <div>
      <Row className='bg-secondary d-flex justify-content-center align-items-center'>
        <Col className='fw-bold col-auto'>ID</Col>
        <Col className='fw-bold'>Nom</Col>
        <Col className='fw-bold'>Actions</Col>
      </Row>
      {tags &&
        tags.map((tag) => (
          <Row className=' d-flex justify-content-center align-items-center'>
            <Col className='col-auto  text-center'>{tag.id}</Col>{' '}
            <Col>{tag.title}</Col>
            <Col className='d-flex flex-column justify-content-center flex-sm-row'>
              <Button className='m-1' size='sm' variant='warning'>
                <Link className='text-white' to='/admin/update-tag/:id'>
                  Editer
                </Link>
              </Button>
              <Button
                data-id={tag.id}
                data-name={tag.titme}
                onclick={toggleValidationButtonTag}
                className='m-1'
                size='sm'
                variant='danger'
              >
                Supprimer
              </Button>

              <Button
                onClick={() => onValidation()}
                className='m-1'
                size='sm'
                variant='danger'
              >
                Supprimer
              </Button>
            </Col>
          </Row>
        ))}
    </div>
  );
};

export default AdminTagsList;
