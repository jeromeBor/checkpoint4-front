import React, { useState } from 'react';
import '../../styles/validationpopup.css';
import { Button, Modal } from 'react-bootstrap';

function ConfirmationPopup({
  itemIdToDelete,
  show,
  setShow,
  handleClose,
  onValidation,
}) {
  return (
    <>
      {/* <Button variant='primary' onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Attention !</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Êtes-vous sûr de vouloir supprimer cette entrée ?
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            En fait, non
          </Button>
          <Button variant='primary' onClick={onValidation()}>
            J'en suis sûr
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    // <Col
    //   className={`col-6 popup-container flexcenter ${
    //     popupIsOpen ? 'opened' : 'closed'
    //   }`}
    // >
    //   <Alert
    //     variant='danger'
    //     className={`popup ${popupIsOpen ? 'opened2' : 'closed2'}`}
    //   >
    //     Voulez-vous vraiment supprimer cette actualité ?
    //     <br />
    //     <Button variant='warning' onClick={() => onValidation()}>
    //       Oui
    //     </Button>
    //     <Button variant='warning' onClick={(e) => togglePopup(e)}>
    //       Non
    //     </Button>
    //   </Alert>
    // </Col>
  );
}
export default ConfirmationPopup;
