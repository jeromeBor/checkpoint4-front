import { Toast, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import '../../styles/toasts.css';

export default function NewsUpdateToast ({ updateNewsToast, setUpdateNewsToast }) {
  return (
  <Row>
    <Col className="updatenewstoast-container">
      <Toast
        onClose={() => setUpdateNewsToast(false)}
        deleteNewsToast={updateNewsToast}
        delay={3000}
        autohide
      >
        <Toast.Header closeButton={false}>
          <FontAwesomeIcon icon={faPen} size="lg" />
          <strong className="me-auto">Mise a jour d'actualité</strong>
          <FontAwesomeIcon icon={faPen} size="lg" />
        </Toast.Header>
        <Toast.Body>Actualité modifiée avec succès !</Toast.Body>
      </Toast>
    </Col>
  </Row>
);}

