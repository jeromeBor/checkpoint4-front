import React from "react";
import { Link } from "react-router-dom";

import { Row, Col, Button } from "react-bootstrap";
import { formatDateUnix } from "../../utils/formatDate";

const AdminDrawingsList = ({ searchValue, drawings, handleShow }) => {
  return (
    <div>
      <>
        <Row className="bg-secondary d-flex justify-content-center align-items-center">
          <Col className="fw-bold col-auto px-2">ID</Col>
          <Col className="fw-bold px-2">Nom</Col>
          <Col className="fw-bold px-2">Date de création</Col>
          <Col className="fw-bold px-2">Tag</Col>
          <Col className="fw-bold px-2">Actions</Col>
        </Row>

        {drawings &&
          drawings
            .filter(
              (drawing) =>
                drawing.title.toLowerCase().includes(searchValue) ||
                drawing.tagsId === parseInt(searchValue)
            )
            .map((drawing) => (
              <Row
                key={drawing.id}
                className="d-flex justify-content-center align-items-center fw-light"
              >
                <Col className="col-1 px-2">{drawing.id}</Col>{" "}
                <Col className="col-3 px-2">{drawing.title}</Col>
                <Col className="px-2">
                  {formatDateUnix(drawing.dateOfWrite)}
                </Col>
                <Col className="px-2"> {drawing.tagsId}</Col>
                <Col className="d-flex flex-column justify-content-center flex-sm-row px-2">
                  <Button className="m-1 " size="sm" variant="warning">
                    <Link
                      to={`/admin/update-drawing/${drawing.id}`}
                      className="text-white"
                    >
                      Editer
                    </Link>
                  </Button>
                  <Button
                    data-id={drawing.id}
                    data-name={drawing.title}
                    onClick={handleShow}
                    className="m-1"
                    size="sm"
                    variant="danger"
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
