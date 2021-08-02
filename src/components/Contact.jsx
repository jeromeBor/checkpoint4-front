import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';

export default function ContactUs() {
  const [messageHasBeenSent, setMessageHasBeenSent] = useState(false);

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_wu3vxgp',
        'template_9qxbqpi',
        e.target,
        'user_Tx3bN6eUsqDxtQEocM37H'
      )
      .then(setMessageHasBeenSent(true))
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      )
      .finally(
        setTimeout(() => {
          setMessageHasBeenSent(false);
        }, 3000)
      );
    e.target.reset();
  }

  return (
    <Form onSubmit={sendEmail} className='p-5 col-12 col-md-6 mx-auto'>
      {/* {messageHasBeenSent ? (
        <MessageSentToast
          messageHasBeenSent={messageHasBeenSent}
          setMessageHasBeenSent={setMessageHasBeenSent}
        />
      ) : null} */}
      <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
        <Form.Label>Adresse Mail</Form.Label>
        <Form.Control
          type='email'
          placeholder='email@exemple.com'
          name='sender_email'
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
        <Form.Label>Votre nom</Form.Label>
        <Form.Control
          name='sender_name'
          type='text'
          placeholder='
        Jean'
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
        <Form.Label>Votre message</Form.Label>
        <Form.Control
          placeholder='Vos dessins sont top !'
          name='sender_message'
          as='textarea'
          rows={3}
        />
      </Form.Group>
      {messageHasBeenSent ? (
        <Button type='submit' variant='success' className='w-100'>
          Message envoyé !
        </Button>
      ) : (
        <Button type='submit' className='w-100'>
          Envoyer le message
        </Button>
      )}
    </Form>
  );
}
