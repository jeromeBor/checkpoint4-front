import { Toast, Col, Row } from "react-bootstrap";
import React, { useState } from "react";

import "../../styles/toasts.css";

export default function NewsCreateToast({
  CreateNewsToast,
  setToggleToast,
  title,
  subtitle,
  textColor,
  icon,
  isRedirected,
}) {
  const [timer, setTimer] = useState(3);

  setInterval(function () {
    setTimer(timer - 1);
  }, 1000);

  return (
    <Row>
      <Col className="validationtoast-container">
        <Toast
          onClose={() => setToggleToast(false)}
          CreateNewsToast={CreateNewsToast}
          delay={3000}
          autohide
        >
          <Toast.Header closeButton={false}>
            {icon}
            <strong className={`me-auto ms-2 ${textColor}`}>{title}</strong>
          </Toast.Header>
          <Toast.Body>
            {subtitle}
            <br />

            {isRedirected ? (
              <div>
                Vous allez être redirigé dans{" "}
                <span className="fw-bold" id="countdown">
                  {timer} secondes
                </span>
              </div>
            ) : null}
          </Toast.Body>
        </Toast>
      </Col>
    </Row>
  );
}
