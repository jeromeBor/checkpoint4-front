import { Toast, Col, Row } from 'react-bootstrap';
import '../../styles/toasts.css';

export default function NewsUpdateToast({
  updateNewsToast,
  setUpdateNewsToast,
}) {
  return (
    <Row>
      <Col className='updatenewstoast-container'>
        <Toast
          onClose={() => setUpdateNewsToast(false)}
          deleteNewsToast={updateNewsToast}
          delay={3000}
          autohide
        >
          <Toast.Header closeButton={false}>
            <strong className='me-auto'>Mise a jour d'actualité</strong>
          </Toast.Header>
          <Toast.Body>Actualité modifiée avec succès !</Toast.Body>
        </Toast>
      </Col>
    </Row>
  );
}
