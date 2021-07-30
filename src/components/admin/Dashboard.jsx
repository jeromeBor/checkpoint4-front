import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import fetchDrawings from '../../utils/fetchDrawings';
import fetchTags from '../../utils/fetchTags';
import deleteOneDrawing from '../../utils/deleteOneDrawing';
import deleteOneTag from '../../utils/deleteOneTag';
import ValidationPopup from './ValidationPopup';
import ControlPanel from './ControlPanel';
import AdminDrawingsList from './AdminDrawingsList';
import AdminTagsList from './AdminTagsList';

const Dashboard = () => {
  const [drawings, setDrawings] = useState();
  const [tags, setTags] = useState();
  const [panel, setPanel] = useState(true);
  const [show, setShow] = useState(false);
  const [itemIdToDelete, setItemIdToDelete] = useState();
  const [itemNameToDelete, setItemNameToDelete] = useState();
  const [validationButtonTag, setValidationButtonTag] = useState(false);

  const handleDeleteAndCloseDrawing = async (id) => {
    await deleteOneDrawing(id);
    setDrawings(drawings.filter((drawing) => drawing.id !== id));
    setShow(false);
  };

  const handleDeleteTag = async (id) => {
    await deleteOneTag(id);
    setTags(tags.filter((tag) => tag.id !== id));
    setValidationButtonTag(false);
    console.log(validationButtonTag);
  };

  const handleShow = (e) => {
    setItemIdToDelete(parseInt(e.target.dataset.id, 10));
    setItemNameToDelete(e.target.dataset.name, 10);
    setShow(true);
  };

  function toggleValidationButtonTag(e) {
    setItemIdToDelete(parseInt(e.target.dataset.id, 10));
    setItemNameToDelete(e.target.dataset.name, 10);
    setValidationButtonTag(!validationButtonTag);
  }

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
        itemNameToDelete={itemNameToDelete}
        handleClose={handleClose}
        show={show}
        setShow={setShow}
        onValidation={() => handleDeleteAndCloseDrawing(itemIdToDelete)}
      />
      <Row>
        <Col className='mx-auto '>
          <h1 className='page-title fw-bold text-center bg-transparent mx-auto mt-3'>
            Administration
          </h1>
        </Col>
      </Row>
      <ControlPanel togglePanel={togglePanel} panel={panel} />

      {panel ? (
        <AdminDrawingsList
          handleShow={handleShow}
          show={show}
          drawings={drawings}
        />
      ) : (
        <AdminTagsList
          setValidationButtonTag={setValidationButtonTag}
          validationButtonTag={validationButtonTag}
          tags={tags}
          toggleValidationButtonTag={toggleValidationButtonTag}
          setItemIdToDelete={setItemIdToDelete}
          onValidation={() => handleDeleteTag(itemIdToDelete)}
        />
      )}
    </Container>
  );
};

export default Dashboard;
