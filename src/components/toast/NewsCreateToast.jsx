import { Toast, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import '../../styles/toasts.css';

export default function NewsCreateToast({
  CreateNewsToast,
  setCreateNewsToast,
}) {
  return (
    <Row>
      <Col className='createnewstoast-container'>
        <Toast
          onClose={() => setCreateNewsToast(false)}
          CreateNewsToast={CreateNewsToast}
          // delay={3000}
          // autohide
        >
          <Toast.Header closeButton={false}>
            <FontAwesomeIcon icon={faCheckCircle} size='lg' />
            <strong className='me-auto'>Création d'actualité</strong>
            <FontAwesomeIcon icon={faCheckCircle} size='lg' />
          </Toast.Header>
          <Toast.Body>Actualité créé avec succès !</Toast.Body>
        </Toast>
      </Col>
    </Row>
  );
}
