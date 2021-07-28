import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import fetchDrawings from '../../utils/fetchDrawings';
import fetchTags from '../../utils/fetchTags';

import { formatDateUnix } from '../../utils/formatDate';

const Dashboard = () => {
  const [drawings, setDrawings] = useState();
  const [tags, setTags] = useState();
  const [panel, setPanel] = useState(true);

  function togglePanel() {
    setPanel(!panel);
  }

  useEffect(() => {
    async function fetchApiTags() {
      const data = await fetchTags();
      setTags(data);
    }
    fetchApiTags();
  }, []);

  useEffect(() => {
    async function fetchApiDrawings() {
      const data = await fetchDrawings();
      setDrawings(data);
    }
    fetchApiDrawings();
  }, []);

  return (
    <Container>
      <Row>
        <Col className='mx-auto '>
          <h1 className='page-title fw-bold text-center bg-transparent mx-auto mt-3'>
            Administration
          </h1>
        </Col>
      </Row>
      <Row>
        <Col className='d-flex align-items-center justify-content-center p-2'>
          {panel ? (
            <Button onClick={togglePanel}>Afficher les tags</Button>
          ) : (
            <Button onClick={togglePanel}>Afficher les dessins</Button>
          )}
        </Col>
      </Row>
      <Row className='bg-secondary d-flex justify-content-center align-items-center'>
        <Col className='fw-bold'>Nom</Col>
        <Col className='fw-bold'>Date de création</Col>
        <Col className='fw-bold'>Tag</Col>
        <Col className='fw-bold'>Actions</Col>
      </Row>
      {drawings &&
        drawings.map((drawing) => (
          <Row className=' d-flex justify-content-center align-items-center'>
            <Col>{drawing.title}</Col>{' '}
            <Col>{formatDateUnix(drawing.dateOfWrite)}</Col>{' '}
            <Col> {drawing.tagsId}</Col>{' '}
            <Col className='d-flex flex-diretion-row justify-content-center'>
              <Button className='m-1' size='sm' variant='warning'>
                Editer
              </Button>
              <Button className='m-1' size='sm' variant='danger'>
                Supprimer
              </Button>
            </Col>
          </Row>
        ))}
      <Row className='bg-secondary d-flex justify-content-center align-items-center'>
        <Col className='fw-bold'>Nom</Col>
        <Col className='fw-bold'>ID</Col>
        <Col className='fw-bold'>Actions</Col>
      </Row>
      {tags &&
        tags.map((tag) => (
          <Row className=' d-flex justify-content-center align-items-center'>
            <Col>{tag.title}</Col>
            <Col> {tag.id}</Col>
            <Col className='d-flex flex-diretion-row justify-content-start'>
              <Button className='m-1' size='sm' variant='warning'>
                Editer
              </Button>
              <Button className='m-1' size='sm' variant='danger'>
                Supprimer
              </Button>
            </Col>
          </Row>
        ))}
    </Container>
  );
};

export default Dashboard;
