import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';
import { Form, Button, Alert } from 'react-bootstrap';

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
      <Form.Group className='mb-3'>
        <Form.Label>Votre nom</Form.Label>
        <Form.Control
          {...register('sender_name', {
            required: 'Merci de spécifier un nom',
            maxLength: 20,
          })}
          name='sender_name'
          type='text'
          placeholder='Jean-Eude'
        />
      </Form.Group>
      {errors.sender_name && (
        <Alert variant='danger'> {errors.sender_name.message}</Alert>
      )}
      <Form.Group className='mb-3'>
        <Form.Label>Adresse Mail</Form.Label>
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
          placeholder='wwww.jean-eude@gmail.com'
        />
      </Form.Group>
      {errors.sender_email && (
        <Alert variant='danger'> {errors.sender_email.message}</Alert>
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
          rows={3}
        />
      </Form.Group>
      {errors.sender_message && (
        <Alert variant='danger'> {errors.sender_message.message}</Alert>
      )}

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
