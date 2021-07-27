import React, { useState, useEffect } from 'react';

import fetchDrawings from '../utils/fetchDrawings';
import fetchTags from '../utils/fetchTags';
import { Container } from 'react-bootstrap';
import Loader from '../components/Loader';
import '../styles/drawinglist.css';
import DrawingCard from './DrawingCard';
import FilterButtons from './FilterButtons';

const DrawingsList = () => {
  const [drawings, setDrawings] = useState();
  const [tags, setTags] = useState();

  const [filteredDrawings, setFileteredDrawings] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchApiTags() {
      const data = await fetchTags();
      setTags(data);
    }
    fetchApiTags();
  }, []);

  useEffect(() => {
    setIsLoading(true);
    async function fetchApiDrawings() {
      const data = await fetchDrawings();
      setDrawings(data);
      setFileteredDrawings(data);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
    fetchApiDrawings();
  }, []);

  function showAll() {
    setFileteredDrawings(drawings);
  }

  const filter = (tagId) => {
    const filteredData = drawings.filter((drawing) => drawing.tagsId === tagId);
    setFileteredDrawings(filteredData);
  };

  return (
    <Container fluid className='pagecontainer  my-5'>
      <h1 className='page-title fw-bold text-center mx-auto'>La gallerie</h1>
      <div className='filter-button  d-flex justify-content-center '>
        <FilterButtons tags={tags} filter={filter} showAll={showAll} />
      </div>
      <div className='drawingcard-wrapper'>
        {!isLoading ? (
          <DrawingCard filteredDrawings={filteredDrawings} tags={tags} />
        ) : null}
      </div>
      {isLoading ? <Loader /> : null}
    </Container>
  );
};

export default DrawingsList;
