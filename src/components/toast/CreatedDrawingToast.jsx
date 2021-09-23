import { Toast, Col, Row } from "react-bootstrap";
import React, { useState } from "react";

import "../../styles/toasts.css";

export default function NewsCreateToast({
  CreateNewsToast,
  setCreateNewsToast,
}) {
  const [timer, setTimer] = useState(3);

  setInterval(function () {
    setTimer(timer - 1);
  }, 1000);

  return (
    <Row>
      <Col className="createnewstoast-container">
        <Toast
          onClose={() => setCreateNewsToast(false)}
          CreateNewsToast={CreateNewsToast}
          delay={3000}
          autohide
        >
          <Toast.Header closeButton={false}>
            <span className="fw-bold me-auto text-success">
              Création d'actualité
            </span>
          </Toast.Header>
          <Toast.Body>
            Actualité créé avec succès !<br />
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
