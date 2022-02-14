import React from 'react';
import '../styles/drawingcard.css';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import LazyImage from './LazyLoad/LazyLoad';

const DrawingCard = ({ filteredDrawings, tags }) => {

  return (
    <>
      {filteredDrawings &&
        filteredDrawings.map((drawing) => (
          <div className='d-flex justify-content-center'>
            <Card key={drawing.id} className='drawing-card m-2'>
              <Link to={`/drawing/${drawing.id}`}>
                <div className='cardimage-overlay-text fw-bold text-secondary'>
                  <span className='cardtitle fs-2'> {drawing.title}</span>
                  <span className='cardtag fs-5 fw-light text-light'>
                    {tags &&
                      tags.filter((tag) => tag.id === drawing.tagsId)[0].title}
                  </span>
                </div>
                <div className='cardimage-overlay d-flex align-items-center justify-content-center'></div>
                <div className='cardimage-container'>
                  <LazyImage
                    src={drawing.imageLink}
                  />
                  {/* <Card.Img variant='top' src={drawing.imageLink} /> */}
                </div>
              </Link>
            </Card>
          </div>
        ))}
    </>
  );
};

export default DrawingCard;
