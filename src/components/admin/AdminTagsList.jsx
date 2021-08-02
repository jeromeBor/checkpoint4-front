import React from 'react';
import { Link } from 'react-router-dom';

import { Row, Col, Button } from 'react-bootstrap';

const AdminTagsList = ({
  toggleDeleteTag,
  toggleConfirmationTag,
  tags,
  handleDeleteTag,
}) => {
  return (
    <>
      <Row className='bg-secondary d-flex justify-content-center align-items-center'>
        <Col className='fw-bold col-auto'>ID</Col>
        <Col className='fw-bold'>Nom</Col>
        <Col className='fw-bold'>Actions</Col>
      </Row>
      {tags &&
        tags.map((tag) => (
          <Row
            key={tag.id}
            className=' d-flex justify-content-center align-items-center'
          >
            <Col className='col-auto  text-center'>{tag.id}</Col>{' '}
            <Col>{tag.title}</Col>
            <Col className='d-flex flex-column justify-content-center flex-sm-row'>
              <Button className='m-1' size='sm' variant='warning'>
                <Link className='text-white' to={`/admin/update-tag/${tag.id}`}>
                  Editer
                </Link>
              </Button>

              {toggleDeleteTag[tag.id] ? (
                <Button
                  onClick={() => handleDeleteTag(tag.id)}
                  className='m-1'
                  size='sm'
                  variant='danger'
                >
                  Confirmer ?
                </Button>
              ) : (
                <Button
                  data-id={tag.id}
                  data-name={tag.title}
                  onClick={() => toggleConfirmationTag(tag.id)}
                  className='m-1'
                  size='sm'
                  variant='danger'
                >
                  Supprimer
                </Button>
              )}
            </Col>
          </Row>
        ))}
    </>
  );
};

export default AdminTagsList;
