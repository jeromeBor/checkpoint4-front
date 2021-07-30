import { Toast, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import '../../styles/toasts.css';

export default function NewsDeleteToast ({ deleteNewsToast, setDeleteNewsToast }){ 
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
          <FontAwesomeIcon icon={faTrashAlt} size="lg" />
          <strong className="me-auto">Suppression d'actualité</strong>
          <FontAwesomeIcon icon={faTrashAlt} size="lg" />
        </Toast.Header>
        <Toast.Body>Actualité supprimée de la base de données</Toast.Body>
      </Toast>
    </Col>
  </Row>
)}
