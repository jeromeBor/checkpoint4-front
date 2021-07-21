import React from 'react';
import '../styles/drawingcard.css';
import { Card } from 'react-bootstrap';

const DrawingCard = ({ drawings }) => {
  return (
    <div>
      <Card className='drawing-card'>
        <Card.Img variant='top' src='holder.js/100px180' />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DrawingCard;
