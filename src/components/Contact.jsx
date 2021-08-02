import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';

export default function ContactUs() {
  const [messageHasBeenSent, setMessageHasBeenSent] = useState(false);

  const handleSubmit = (e) => {
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
  };

  return (
    <Form
      noValidate
      onSubmit={handleSubmit}
      className='p-5 col-12 col-md-6 mx-auto'
    >
      <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
        <Form.Label>Votre nom</Form.Label>
        <Form.Control required name='sender_name' type='text' />
      </Form.Group>
      <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
        <Form.Label>Adresse Mail</Form.Label>
        <Form.Control required type='email' name='sender_email' />
      </Form.Group>
      <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
        <Form.Label>Votre message</Form.Label>
        <Form.Control required name='sender_message' as='textarea' rows={3} />
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
