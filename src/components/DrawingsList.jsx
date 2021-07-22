import React, { useState, useEffect } from 'react';
import axios from 'axios';

import fetchDrawings from '../utils/fetchDrawings';
import fetchTags from '../utils/fetchTags';
import { Container, Spinner } from 'react-bootstrap';

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
      await fetchTags(setTags);
    }
    fetchApiTags();
  }, []);

  // useEffect(() => {
  //   setIsLoading(true);
  //   function fetchApiDrawings() {
  //     axios
  //       .get('http://localhost:4000/drawings')
  //       .then((r) => r.data)
  //       .then((r) => setDrawings(r))
  //       .then((r) => setFileteredDrawings(r))
  //       .finally(
  //         setTimeout(() => {
  //           setFileteredDrawings(false);
  //         }, 2000)
  //       );
  //   }
  //   fetchApiDrawings();
  // }, []);

  useEffect(() => {
    setIsLoading(true);
    async function fetchApiDrawings() {
      const data = await fetchDrawings(setDrawings);
      setFileteredDrawings(data);
      console.log(drawings);
      console.log(filteredDrawings);
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
    <Container fluid className='drawingcard container my-5'>
      <h1 className='page-title fw-bold text-center'>La gallerie</h1>
      <div className='filter-card'>
        <FilterButtons tags={tags} filter={filter} showAll={showAll} />
      </div>
      <div className='drawingcard-wrapper'>
        {isLoading ? (
          <span>
            <Spinner animation='border' role='status' /> Loading...
          </span>
        ) : (
          <DrawingCard filteredDrawings={filteredDrawings} />
        )}
      </div>
    </Container>
  );
};

export default DrawingsList;
