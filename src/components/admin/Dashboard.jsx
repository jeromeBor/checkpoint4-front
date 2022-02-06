import React, { useEffect, useState } from "react";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import fetchDrawings from "../../utils/fetchDrawings";
import fetchTags from "../../utils/fetchTags";
import deleteOneDrawing from "../../utils/deleteOneDrawing";
import deleteOneTag from "../../utils/deleteOneTag";
import ValidationPopup from "./ValidationPopup";
import ControlPanel from "./ControlPanel";
import AdminList from "./AdminList";
import AdminTagsList from "./AdminTagsList";
import ValidationToast from "../toast/ValidationToast";
import SearchBar from "./SearchBar";
import Title from "./../common/Title";


import { AiFillCheckSquare } from "react-icons/ai";

const Dashboard = () => {
  const [drawings, setDrawings] = useState();
  const [searchedDrawing, setSearchedDrawing] = useState();
  const [tags, setTags] = useState();
  const [panel, setPanel] = useState(true);
  const [show, setShow] = useState(false);
  const [itemIdToDelete, setItemIdToDelete] = useState();
  const [itemNameToDelete, setItemNameToDelete] = useState();
  const [toggleDeleteTag, setToggleDeleteTag] = useState({});
  const [toggleToast, setToggleToast] = useState(false);

  const [searchValue, setSearchValue] = useState("");
  const [key, setKey] = useState("drawings");

  const storeSearchValue = (e) => {
    setSearchValue(e.target.value);
    // console.log(searchValue);
    console.log(drawings);
  };

  const handleDeleteAndCloseDrawing = async (id) => {
    await deleteOneDrawing(id);
    setDrawings(drawings.filter((drawing) => drawing.id !== id));
    setShow(false);
    setToggleToast(true);
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
      {toggleToast ? (
        <ValidationToast
          setToggleToast={setToggleToast}
          title="Suppression de dessin"
          subtitle="Dessin supprimé avec succès"
          textColor="text-success"
          icon={<AiFillCheckSquare color="green" size="24" />}
          isRedirected={false}
        />
      ) : null}
      <ValidationPopup
        itemNameToDelete={itemNameToDelete}
        handleClose={handleClose}
        show={show}
        setShow={setShow}
        onValidation={() => handleDeleteAndCloseDrawing(itemIdToDelete)}
      />
      <Title text="Administration" />
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

      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="m-0 p0 bg-light"

      >
        <Tab eventKey="drawings" title="Dessins" className="text-black bg-light mb-0 p-3" variant="pills">
          <SearchBar
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          <AdminList
            searchValue={searchValue}
            handleShow={handleShow}
            show={show}
            items={drawings}
            listHeader={["ID", "Nom", "Date de création", "Tag"]}
          />
        </Tab>
        <Tab eventKey="tags" title="Tags" className="bg-light mb-0 p-3">
          <SearchBar
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          <AdminList
            toggleDeleteTag={toggleDeleteTag}
            searchValue={searchValue}
            handleShow={handleShow}
            show={show}
            items={tags}
            listHeader={["ID", "Nom"]}
          />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Dashboard;
