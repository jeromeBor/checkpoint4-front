import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import fetchDrawings from '../../utils/fetchDrawings';
import fetchTags from '../../utils/fetchTags';
import deleteOneDrawing from '../../utils/DeleteOneDrawing';
import ValidationPopup from './ValidationPopup';

import AdminDrawingsList from './AdminDrawingsList';
import AdminTagsList from './AdminTagsList';

const Dashboard = () => {
  const [drawings, setDrawings] = useState();
  const [tags, setTags] = useState();
  const [panel, setPanel] = useState(true);
  const [show, setShow] = useState(false);
  const [itemIdToDelete, setItemIdToDelete] = useState();

  // const handleClose = () => setPopupIsOpen(false);
  // const handleShow = () => setPopupIsOpen(true);

  const togglePopup = (e) => {
    setItemIdToDelete(parseInt(e.target.dataset.id, 10));
    // setShowPopup(!showPopup);
  };

  const handleDeleteAndClose = async (id) => {
    await deleteOneDrawing(id);
    setDrawings(drawings.filter((drawing) => drawing.id !== id));
    setShow(false);
  };

  const handleShow = (e) => {
    setItemIdToDelete(parseInt(e.target.dataset.id, 10));
    setShow(true);
  };

  const handleClose = () => setShow(false);

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
      <ValidationPopup
        handleClose={handleClose}
        show={show}
        setShow={setShow}
        onValidation={() => handleDeleteAndClose(itemIdToDelete)}
      />
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
        <Col className='d-flex align-items-center justify-content-center p-2'>
          <Form>
            <Form.Group controlId='formBasicEmail'>
              <Form.Control type='email' placeholder='Rechercher par nom' />
            </Form.Group>
            <Form.Group />
          </Form>
        </Col>
        <Col>
          <Button variant='success'>
            <Link to='/admin/create-drawing'>Créer un nouveau dessin</Link>
          </Button>
        </Col>
      </Row>
      {panel ? (
        <AdminDrawingsList
          handleShow={handleShow}
          show={show}
          drawings={drawings}
          setItemIdToDelete={setItemIdToDelete}
        />
      ) : (
        <AdminTagsList
          togglePopup={togglePopup}
          tags={tags}
          setItemIdToDelete={setItemIdToDelete}
        />
      )}
    </Container>
  );
};

export default Dashboard;
