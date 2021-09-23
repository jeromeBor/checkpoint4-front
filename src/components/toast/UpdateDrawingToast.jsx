import { Toast, Col, Row } from "react-bootstrap";
import React, { useState } from "react";

import "../../styles/toasts.css";

export default function NewsUpdateToast({
  updateNewsToast,
  setUpdateNewsToast,
}) {
  const [timer, setTimer] = useState(3);
  setInterval(function () {
    setTimer(timer - 1);
  }, 1000);

  return (
    <Row>
      <Col className="updatenewstoast-container">
        <Toast
          onClose={() => setUpdateNewsToast(false)}
          deleteNewsToast={updateNewsToast}
          // delay={3000}
          // autohide
        >
          <Toast.Header closeButton={false}>
            <strong className="me-auto">Mise a jour d'actualité</strong>
          </Toast.Header>
          <Toast.Body>
            Actualité modifiée avec succès !
            <div>
              Vous allez être redirigé dans{" "}
              <span className="fw-bold" id="countdown">
                {timer} secondes
              </span>
            </div>
          </Toast.Body>
        </Toast>
      </Col>
    </Row>
  );
}
