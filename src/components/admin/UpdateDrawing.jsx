import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Form, Button, Alert, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import fetchTags from '../../utils/fetchTags';
import fetchOneDrawing from '../../utils/fetchOneDrawing';
import updateOneDrawing from '../../utils/updateOneDrawing';

import '../../styles/form.css';

function UpdateDrawing() {
  let history = useHistory();

  const { id } = useParams();

  const [drawingIsUpdating, setDrawingIsUpdating] = useState(false);
  const [tags, setTags] = useState();
  const [drawingData, setDrawingData] = useState(null);

  const preloadedValues = {
    title: 'Chargement...',
    imageLink: 'Chargement...',
    postContent: 'Chargement...',
    tagsId: 'Chargement...',
  };

  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: preloadedValues });

  useEffect(() => {
    async function fetchOneDrawingData() {
      const data = await fetchOneDrawing(id);
      setDrawingData(data[0]);
      setValue('title', data[0].title);
      setValue('imageLink', data[0].imageLink);
      setValue('postContent', data[0].postContent);
      setValue('tagsId', data[0].tagsId);
    }
    fetchOneDrawingData();
  }, [setValue]);

  useEffect(() => {
    async function fetchApiTags() {
      const data = await fetchTags();
      setTags(data);
    }
    fetchApiTags();
  }, []);

  const onSubmit = (data) => {
    setDrawingIsUpdating(true);
    updateOneDrawing(id, data);
    setTimeout(() => {
      setDrawingIsUpdating(false);
    }, 1000);
    setTimeout(() => {
      history.goBack();
    }, 2000);
  };

  return (
    <div className='pagecontainer p-4'>
      <h1 className='page-title fw-bold text-center bg-transparent mx-auto mt-3'>
        Modification <br />
        de dessin
      </h1>{' '}
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
            {...register('title', {
              required: 'Merci de spécifier un titre',
            })}
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
            // defaultValue={drawingData && drawingData[0].tagsId}
            name='tagsId'
            size='md'
            {...register('tagsId', {
              required: 'Merci de choisir un tag',
            })}
          >
            <option value='default'>Choisir un tag</option>
            {tags &&
              tags.map((tag) => (
                <option
                  selected={drawingData.tagsId === tag.id}
                  key={tag.id}
                  value={tag.id}
                >
                  {tag.title}
                </option>
              ))}
          </Form.Select>
        </Form.Group>
        {errors.tagsId && (
          <Alert variant='danger'> {errors.postContent.tagsId}</Alert>
        )}
        <div class='d-grid gap-2'>
          {!drawingIsUpdating ? (
            <Button
              type='submit'
              variant='primary'
              className='fw-bold btn-default btn-block'
            >
              Mettre à jour le dessin
            </Button>
          ) : (
            <Button
              disabled
              type='submit'
              variant='primary'
              className='text-white btn-default btn-block d-flex justify-content-center align-items-center '
            >
              <Spinner animation='border' size='sm' />
              <span className='ms-2'>Mise à jour...</span>
            </Button>
          )}
        </div>
      </Form>
    </div>
  );
}

export default UpdateDrawing;
