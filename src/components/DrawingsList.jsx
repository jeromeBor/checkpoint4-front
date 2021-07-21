import React, { useState, useEffect } from 'react';
import fetchDrawings from '../utils/fetchDrawings';
import fetchTags from '../utils/fetchTags';
import { Container } from 'react-bootstrap';

import '../styles/drawinglist.css';
import DrawingCard from './DrawingCard';

const DrawingsList = () => {
  const [drawings, setDrawings] = useState();
  const [tags, setTags] = useState();

  useEffect(() => {
    fetchTags(setTags);
  }, []);
  useEffect(() => {
    fetchDrawings(setDrawings);
  }, []);

  return (
    <Container fluid className='drawingcard container my-5'>
      <h1 className='page-title fw-bold text-center'>La gallerie</h1>
      <div className='drawingcard-wrapper'>
        {drawings &&
          drawings.map((drawing) => (
            <DrawingCard drawing={drawing} tags={tags} />
          ))}
      </div>
    </Container>
  );
};

export default DrawingsList;
