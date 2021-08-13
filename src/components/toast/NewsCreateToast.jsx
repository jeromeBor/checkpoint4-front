import { Toast, Col, Row } from 'react-bootstrap';
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
            <strong className='me-auto'>Création d'actualité</strong>
          </Toast.Header>
          <Toast.Body>Actualité créé avec succès !</Toast.Body>
        </Toast>
      </Col>
    </Row>
  );
}
