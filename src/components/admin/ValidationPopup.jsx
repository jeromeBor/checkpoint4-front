import React from "react";
import "../../styles/validationpopup.css";
import { Button, Modal } from "react-bootstrap";

function ConfirmationPopup({
  itemNameToDelete,
  show,
  handleClose,
  onValidation,
}) {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-danger">Attention !</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Êtes-vous sûr de vouloir supprimer '{itemNameToDelete}' de la base de
          donnée ?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            En fait, non
          </Button>
          <Button variant="danger" onClick={() => onValidation()}>
            J'en suis sûr
          </Button>
        </Modal.Footer>
      </Modal>
    </>

  );
}
export default ConfirmationPopup;
