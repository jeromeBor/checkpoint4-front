import { Toast, Col, Row } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import '../../styles/toasts.css';

export default function MessageSentToast({
  messageHasBeenSent,
  setMessageHasBeenSent,
}) {
  return (
    <Row>
      <Col className='messagesenttoast-container'>
        <Toast
          onClose={() => setMessageHasBeenSent(false)}
          messageHasBeenSent={messageHasBeenSent}
          delay={3000}
          autohide
        >
          <Toast.Header>
            {/* <FontAwesomeIcon icon={faCheckCircle} size='lg' /> */}
            <strong className='me-auto'>Message envoyé avec succès !</strong>
            {/* <FontAwesomeIcon icon={faCheckCircle} size='lg' /> */}
          </Toast.Header>
        </Toast>
      </Col>
    </Row>
  );
}
