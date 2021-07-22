import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import axios from 'axios';
import fetchTags from '../utils/fetchTags';

import '../styles/form.css';
import { Form, Button, Alert, Spinner } from 'react-bootstrap';

function FormDrawing() {
  const [tags, setTags] = useState();

  // const [drawginContent, setDrawingContent] = useState();
  const [drawingIsCreating, setIsDrawingCreating] = useState(false);

  useEffect(() => {
    async function fetchApiTags() {
      const data = await fetchTags();
      setTags(data);
    }
    fetchApiTags();
  }, []);

  const createDrawing = (formFields) =>
    axios
      .post('http://localhost:4000/drawings', formFields)
      .then(setIsDrawingCreating(true))
      .then((res) => res.data)
      .finally(
        setTimeout(() => {
          setIsDrawingCreating(false);
        }, 2000),
        console.log(formFields)
      );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (values, e) => {
    const date = Date.now();
    const formFields = {
      ...values,
      dateOfWrite: date,
    };
    createDrawing(formFields);
    e.target.reset();
    console.log('sent');
  };

  return (
    <div className='pagecontainer p-4'>
      <h1>Add new Drawing</h1>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        encType='multipart/form-data'
        method='post'
      >
        <Form.Group className='mb-3'>
          <Form.Label>Title</Form.Label>
          <Form.Control
            placeholder='Drawing title'
            type='text'
            name='title'
            {...register('title', { required: 'Merci de spécifier un titre' })}
          />
        </Form.Group>
        {errors.title && (
          <Alert variant='danger'> {errors.title.message}</Alert>
        )}
        <Form.Group className='mb-3'>
          <Form.Label>Image link</Form.Label>
          <Form.Control
            {...register('imageLink', {
              required: 'Merci de choisir une image',
            })}
            name='imageLink'
            type='text'
            placeholder='wwww.imageThatIsSTW.png'
          />
        </Form.Group>
        {errors.imageLink && (
          <Alert variant='danger'> {errors.imageLink.message}</Alert>
        )}
        <Form.Group className='mb-3'>
          <Form.Label>Content</Form.Label>
          <Form.Control
            {...register('postContent', {
              required: 'Merci de rentrer du contenu',
            })}
            name='postContent'
            as='textarea'
            rows={3}
            placeholder='Description'
          />
        </Form.Group>
        {errors.postContent && (
          <Alert variant='danger'> {errors.postContent.message}</Alert>
        )}
        <Form.Group className='mb-3' value=''>
          <Form.Label>Tag</Form.Label>
          <Form.Select
            name='tagsId'
            size='sm'
            {...register('tagsId', {
              required: 'Merci de choisir un tag',
            })}
          >
            <option value='default'>Choisir un tag</option>
            {tags &&
              tags.map((tag) => (
                <option key={tag.id} value={tag.id}>
                  {tag.title}
                </option>
              ))}
          </Form.Select>
        </Form.Group>
        {errors.tagsId && (
          <Alert variant='danger'> {errors.postContent.tagsId}</Alert>
        )}

        <div class='d-grid gap-2'>
          <Button
            type='submit'
            variant='primary'
            className=' btn-default btn-block'
          >
            Send drawing
          </Button>
          <Button
            disabled
            type='submit'
            variant='primary'
            className='btn-default btn-block d-flex justify-content-center align-items-center '
          >
            <Spinner animation='border' size='sm' />
            <span className='ms-2'> Drawing sending...</span>
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default FormDrawing;
