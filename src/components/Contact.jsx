import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';
import { Form, Button, Alert, Card } from 'react-bootstrap';
import { AiFillWarning, AiOutlineSend } from 'react-icons/ai';

export default function ContactForm() {
  const [messageHasBeenSent, setMessageHasBeenSent] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
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
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <Form
      onSubmit={handleSubmit(onSubmit)}
      className='p-5 col-12 col-md-6 mx-auto'
    >
      <Card.Title className='text-center p-2 my-2 bg-transparent text-secondary'>
        Formulaire de contact
      </Card.Title>
      <Form.Group className='mb-3'>
        <Form.Label>Votre nom</Form.Label>
        <Form.Control
          {...register('sender_name', {
            required: 'Merci de spécifier un nom',
            maxLength: 20,
          })}
          name='sender_name'
          type='text'
          placeholder='Jean'
        />
      </Form.Group>
      {errors.sender_name && (
        <Alert variant='danger p-2 fw-light'>
          <AiFillWarning style={{ fontSize: '20px' }} />{' '}
          {errors.sender_name.message}
        </Alert>
      )}
      <Form.Group className='mb-3'>
        <Form.Label>Votre adresse mail</Form.Label>
        <Form.Control
          {...register('sender_email', {
            required: 'Merci de spécifier un email',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "L'adresse mail n'est pas valide",
            },
          })}
          type='text'
          name='sender_email'
          placeholder='wwww.jean@gmail.com'
        />
      </Form.Group>
      {errors.sender_email && (
        <Alert variant='danger p-2 fw-light'>
          <AiFillWarning style={{ fontSize: '20px' }} />{' '}
          {errors.sender_email.message}
        </Alert>
      )}
      <Form.Group className='mb-3'>
        <Form.Label>Votre message</Form.Label>
        <Form.Control
          {...register('sender_message', {
            required: 'Merci de rentrer un message',
            minLength: {
              value: 10,
              message: 'Votre message doit contenir au moins 10 caractères',
            },
            maxLength: {
              value: 200,
              message: 'Votre message est trop long !',
            },
          })}
          name='sender_message'
          as='textarea'
          placeholder='Vos dessins sont superbes !'
          rows={5}
        />
      </Form.Group>
      {errors.sender_message && (
        <Alert variant='danger p-2 fw-light'>
          <AiFillWarning style={{ fontSize: '20px' }} />{' '}
          {errors.sender_message.message}
        </Alert>
      )}

      {messageHasBeenSent ? (
        <Button type='submit' variant='success' size='sm' className='w-100'>
          Message envoyé !
        </Button>
      ) : (
        <Button
          type='submit'
          variant='secondary'
          size='sm'
          className='w-100 text-white'
        >
          <AiOutlineSend style={{ fontSize: '20px' }} /> Envoyer le message
        </Button>
      )}
    </Form>
  );
}
