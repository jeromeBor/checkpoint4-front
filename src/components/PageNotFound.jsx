import React from 'react';
import { useHistory } from 'react-router-dom';

import { Col, Row, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  let history = useHistory();

  return (
    <Container className='h-100'>
      <Col>
        <Row className='text-center'>
          <h1>
            Oops ! <br />
          </h1>
          <p> La page que vous cherchez d'existe pas ! (WIP)</p>
          <Link to='/'>Revenir à l'acceuil</Link>

          <Button
            size='md'
            variant='outline-primary'
            className='col-12 col-sm-4 mx-auto'
            onClick={() => history.goBack()}
          >
            Revenir à la page précédente
          </Button>
        </Row>
      </Col>
    </Container>
  );
};

export default PageNotFound;
