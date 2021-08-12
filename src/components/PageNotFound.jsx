import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <Container className='h-100'>
      <Col>
        <Row className='text-center'>
          <h1>
            Oops ! <br />
          </h1>
          <p> La page que vous cherchez d'existe pas ! (WIP)</p>
          <Link to='/'>Revenir à l'acceuil</Link>
          <a href='javascript:history.back()'>Go Back</a>
        </Row>
      </Col>
    </Container>
  );
};

export default PageNotFound;
