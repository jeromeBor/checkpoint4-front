import React from 'react';
import '../styles/drawingcard.css';
import { Card } from 'react-bootstrap';
import { formatDate } from '../utils/formatDate';

const DrawingCard = ({ filteredDrawings, tags }) => {
  return (
    <>
      {filteredDrawings &&
        filteredDrawings.map((drawing) => (
          <Link>
            <Card className='drawing-card m-2'>
              <div className='cardimage-overlay-text fw-bold text-secondary'>
                <span className='cardtitle fs-2'> {drawing.title}</span>
                <span className='cardtag fs-5 fw-light text-light'>
                  {tags &&
                    tags.filter((tag) => tag.idCategory === tag.idCategory)[0]
                      .title}
                </span>
                <span className='carddate fs-6 fw-light text-info'>
                  {drawing.dateOfWrite && formatDate(drawing.dateOfWrite)}
                </span>
              </div>
              <div className='cardimage-overlay d-flex align-items-center justify-content-center'></div>
              <div className='cardimage-container'>
                <Card.Img variant='top' src={drawing.imageLink} />
              </div>
              {/* <Card.Body variant='light' className='card-label'>
              <Card.Title>
                {drawing.title}{' '}
                <Badge bg='primary' className='badge'>
                  {tags &&
                    tags.filter((tag) => tag.idCategory === tag.idCategory)[0]
                      .title}
                </Badge>
              </Card.Title>
            </Card.Body> */}
            </Card>
          </Link>
        ))}
    </>
  );
};

export default DrawingCard;
