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
  const [searchedDrawing, setSearchedDrawing] = useState();
  const [tags, setTags] = useState();
  const [panel, setPanel] = useState(true);
  const [show, setShow] = useState(false);
  const [itemIdToDelete, setItemIdToDelete] = useState();
  const [itemNameToDelete, setItemNameToDelete] = useState();
  const [toggleDeleteTag, setToggleDeleteTag] = useState({});

  const [searchValue, setSearchValue] = useState('');

  const storeSearchValue = (e) => {
    setSearchValue(e.target.value);
    // console.log(searchValue);
    console.log(drawings);
  };

  const handleDeleteAndCloseDrawing = async (id) => {
    await deleteOneDrawing(id);
    setDrawings(drawings.filter((drawing) => drawing.id !== id));
    setShow(false);
  };

  const handleDeleteTag = async (id) => {
    await deleteOneTag(id);
    setTags(tags.filter((tag) => tag.id !== id));
  };

  const handleShow = (e) => {
    setItemIdToDelete(parseInt(e.target.dataset.id, 10));
    setItemNameToDelete(e.target.dataset.name, 10);
    setShow(true);
  };

  const toggleConfirmationTag = (id) => {
    setToggleDeleteTag((prevtoggleDeleteTag) => ({
      ...prevtoggleDeleteTag,
      [id]: !prevtoggleDeleteTag[id],
    }));
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
      <ControlPanel
        storeSearchValue={storeSearchValue}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        togglePanel={togglePanel}
        panel={panel}
        setSearchedDrawing={setSearchedDrawing}
        searchedDrawing={searchedDrawing}
        setDrawings={setDrawings}
      />

      {panel ? (
        <AdminDrawingsList
          searchValue={searchValue}
          handleShow={handleShow}
          show={show}
          drawings={drawings}
        />
      ) : (
        <AdminTagsList
          toggleDeleteTag={toggleDeleteTag}
          toggleConfirmationTag={toggleConfirmationTag}
          tags={tags}
          handleDeleteTag={handleDeleteTag}
        />
      )}
    </Container>
  );
};

export default Dashboard;
