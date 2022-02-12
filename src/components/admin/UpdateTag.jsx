import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Form, Button, Alert, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import fetchOneTag from '../../utils/fetchOneTag';
import updateOneTag from '../../utils/updateOneTag';

import '../../styles/form.css';

function UpdateDrawing() {
  const { id } = useParams();

  const [tagIsUpdating, setTagIsUpdating] = useState(false);

  const preloadedValues = {
    title: 'Chargement...',
  };

  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: preloadedValues });

  useEffect(() => {
    async function fetchOneTagData() {
      const data = await fetchOneTag(id);
      setValue('title', data[0].title);
    }
    fetchOneTagData();
  }, []);

  const onSubmit = (data) => {
    setTagIsUpdating(true);
    updateOneTag(id, data);
    console.log(data);
    setTimeout(() => {
      setTagIsUpdating(false);
    }, 1000);
  };

  return (
    <div className='pagecontainer p-4'>
      <h1 className='page-title fw-bold text-center mx-auto'>
        Mise à jour de Tag
      </h1>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        encType='multipart/form-data'
        method='post'
      >
        <Form.Group className='mb-3'>
          <Form.Label>Tag name</Form.Label>
          <Form.Control
            placeholder='Tag name'
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
          {!tagIsUpdating ? (
            <Button
              type='submit'
              variant='primary'
              className='fw-bold btn-default btn-block'
            >
              Mettre à jour le tag
            </Button>
          ) : (
            <Button
              disabled
              type='submit'
              variant='primary'
              className='text-white btn-default btn-block d-flex justify-content-center align-items-center '
            >
              <Spinner animation='border' size='sm' />
              <span className='ms-2'> Mise à jour... </span>
            </Button>
          )}
        </div>
      </Form>
    </div>
  );
}

export default UpdateDrawing;
