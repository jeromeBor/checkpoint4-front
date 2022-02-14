import React, { useState, useEffect } from 'react';

import fetchDrawings from '../utils/fetchDrawings';
import fetchTags from '../utils/fetchTags';
import { Container } from 'react-bootstrap';
import '../styles/drawinglist.css';
import DrawingCard from './DrawingCard';
import FilterButtons from './FilterButtons';
import Title from "./common/Title";

import Loader from '../components/Loader';



const DrawingsList = () => {
  const [drawings, setDrawings] = useState();
  const [tags, setTags] = useState();

  const [filteredDrawings, setFileteredDrawings] = useState();

  useEffect(() => {
    async function fetchApiTags() {
      const data = await fetchTags();
      setTags(data);
    }
    fetchApiTags();
  }, []);

  useEffect(() => {
    async function fetchApiDrawings() {
      const data = await fetchDrawings();
      setDrawings(data);
      setFileteredDrawings(data);
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
      <Title text="La gallerie" />
      <div className='filter-button  d-flex justify-content-center '>
        <FilterButtons tags={tags} filter={filter} showAll={showAll} />
      </div>

      {drawings && drawings.length ?
        <div className='drawingcard-wrapper'>
          <DrawingCard filteredDrawings={filteredDrawings} tags={tags} />
        </div>
        :
        <Loader />
      }
    </Container>

  );
};

export default DrawingsList;
