import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import '../../styles/form.css';
import { Form, Button, Alert, Spinner } from 'react-bootstrap';
import Title from "./../common/Title";


function CreateDrawing() {
  const [tagIsCreating, setIsTagCreating] = useState(false);

  const createTag = (formFields) =>
    axios
      .post('http://localhost:4000/tags', formFields)
      .then(setIsTagCreating(true))
      .then((res) => res.data)
      .finally(
        setTimeout(() => {
          setIsTagCreating(false);
        }, 2000)
      );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (values, e) => {
    const formFields = {
      ...values,
    };
    createTag(formFields);
    e.target.reset();
  };

  return (
    <div className='pagecontainer p-4'>
      <Title text="Créer un tag" />
      <Form
        onSubmit={handleSubmit(onSubmit)}
        encType='multipart/form-data'
        method='post'
        className="col-12 col-md-6 mx-auto"

      >
        <Form.Group className='mb-3'>
          <Form.Label>Title</Form.Label>
          <Form.Control
            placeholder='Tag title'
            type='text'
            name='title'
            {...register('title', {
              required: 'Merci de spécifier un nom de tag',
            })}
          />
        </Form.Group>
        {errors.title && (
          <Alert variant='danger'> {errors.title.message}</Alert>
        )}

        <div class='d-grid gap-2'>
          {!tagIsCreating ? (
            <Button
              type='submit'
              variant='primary'
              className='fw-bold btn-default btn-block'
            >
              Create tag
            </Button>
          ) : (
            <Button
              disabled
              type='submit'
              variant='primary'
              className='text-white btn-default btn-block d-flex justify-content-center align-items-center '
            >
              <Spinner animation='border' size='sm' />
              <span className='ms-2'> Tag is creating...</span>
            </Button>
          )}
        </div>
      </Form>
    </div>
  );
}

export default CreateDrawing;
