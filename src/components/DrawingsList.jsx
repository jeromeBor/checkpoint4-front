import React, { useState, useEffect } from 'react';
import fetchDrawings from '../utils/fetchDrawings';
import fetchTags from '../utils/fetchTags';
import { Container, Button } from 'react-bootstrap';

import '../styles/drawinglist.css';
import DrawingCard from './DrawingCard';

const DrawingsList = () => {
  const [drawings, setDrawings] = useState();
  const [filteredDrawings, setFilteredDrawings] = useState(drawings);
  const [tags, setTags] = useState();

  const filter1 = drawings && drawings.filter((e) => e.tagsId === 1);

  function removeFiter() {
    setFilteredDrawings(drawings);
  }

  useEffect(() => {
    async function fetchApiTags() {
      await fetchTags(setTags);
      setTags();
    }
    fetchApiTags();
    console.log(tags);
  }, []);

  useEffect(() => {
    async function fetchApiDrawings() {
      await fetchDrawings(setDrawings);
      setFilteredDrawings(drawings);
    }
    fetchApiDrawings();
    console.log(drawings);
    console.log(filteredDrawings);
  }, []);

  function showFilter1() {
    setFilteredDrawings(filter1);
  }

  return (
    <Container fluid className='drawingcard container my-5'>
      <h1 className='page-title fw-bold text-center'>La gallerie</h1>
      <div className='filter-card'>
        <span>Filter par : </span>
        <Button onClick={() => showFilter1()}>Aquarelle</Button>
        <Button>Promarker</Button>
        <Button>Digital</Button>
        <Button>Autres</Button>
        <Button onClick={() => removeFiter()}>Remove Filter</Button>
      </div>
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
