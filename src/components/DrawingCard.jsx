import React from 'react';
import '../styles/drawingcard.css';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { formatDateUnix } from '../utils/formatDate';

const DrawingCard = ({ filteredDrawings, tags }) => {
  return (
    <>
      {filteredDrawings &&
        filteredDrawings.map((drawing) => (
          <Link key={drawing.id} to={`/drawing/${drawing.id}`}>
            <Card key={drawing.id} className='drawing-card m-2'>
              <div className='cardimage-overlay-text fw-bold text-secondary'>
                <span className='cardtitle fs-2'> {drawing.title}</span>
                <span className='cardtag fs-5 fw-light text-light'>
                  {tags &&
                    tags.filter((tag) => tag.idCategory === tag.idCategory)[0]
                      .title}
                </span>
                {/* <span className='carddate fs-6 fw-light text-info'>
                  {drawing.dateOfWrite && formatDateUnix(drawing.dateOfWrite)}
                </span> */}
              </div>
              <div className='cardimage-overlay d-flex align-items-center justify-content-center'></div>
              <div className='cardimage-container'>
                <Card.Img variant='top' src={drawing.imageLink} />
              </div>
            </Card>
          </Link>
        ))}
    </>
  );
};

export default DrawingCard;
