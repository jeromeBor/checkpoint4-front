import { Toast, Col, Row } from "react-bootstrap";
import React, { useState } from "react";

import "../../styles/toasts.css";

export default function NewsDeleteToast({
  deleteNewsToast,
  setDeleteNewsToast,
}) {
  const [timer, setTimer] = useState(3);

  setInterval(function () {
    setTimer(timer - 1);
  }, 1000);

  return (
    <Row>
      <Col className="deletenewstoast-container">
        <Toast
          onClose={() => setDeleteNewsToast(false)}
          deleteNewsToast={deleteNewsToast}
          delay={3000}
          autohide
        >
          <Toast.Header closeButton={false}>
            <strong className="me-auto">Suppression d'actualité</strong>
          </Toast.Header>
          <Toast.Body>
            Actualité supprimée de la base de donnée avec succès
          </Toast.Body>
        </Toast>
      </Col>
    </Row>
  );
}
