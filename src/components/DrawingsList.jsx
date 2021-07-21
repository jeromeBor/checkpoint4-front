import React, { useState } from 'react';
import axios from 'axios';
import '../styles/drawinglist.css';
import DrawingCard from './DrawingCard';

const DrawingsList = () => {
  const [drawings, setDrawings] = useState();

  const fetDrawings = (API, setThing) => {
    axios
      .get('localhost:5000/drawings')
      .then((r) => r.data)
      .then((r) => setDrawings(r));
  };

  return (
    <div>
      <h1>DrawingsList</h1>

      <DrawingCard drawings={drawings} />
    </div>
  );
};

export default DrawingsList;
