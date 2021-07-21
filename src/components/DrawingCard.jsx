import React from 'react';
import '../styles/drawingcard.css';
import { Card, Badge } from 'react-bootstrap';

const DrawingCard = ({ drawing, tags }) => {
  return (
    <Card className='drawing-card m-2'>
      <div className='cardimage-container'>
        <Card.Img variant='top' src={drawing.imageLink} />
      </div>
      <Card.Body variant='primary'>
        <Card.Title>
          {drawing.title}{' '}
          <Badge bg='secondary' className='badge'>
            {' '}
            {tags &&
              tags.filter((tag) => tag.idCategory === tag.idCategory)[0].title}
          </Badge>
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default DrawingCard;
