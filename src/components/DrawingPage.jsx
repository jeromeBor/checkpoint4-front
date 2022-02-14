import React, { useEffect, useState } from 'react';
import Lightbox from 'react-awesome-lightbox';
import 'react-awesome-lightbox/build/style.css';
import '../styles/drawingpage.css';
import { useParams, Link } from 'react-router-dom';
import fetchOneDrawing from '../utils/fetchOneDrawing';
import { BiChevronLeft } from 'react-icons/bi';

import LazyImage from './LazyLoad/LazyLoad';

import { Row, Col, Button, Card } from 'react-bootstrap';

const DrawingPage = () => {
  const { id } = useParams();
  const [isLightboxOn, setIsLightboxOff] = useState(false);
  const [drawingData, setDrawingData] = useState();

  function toggleLightbox() {
    setIsLightboxOff(!isLightboxOn);
    console.log(isLightboxOn);
  }

  useEffect(() => {
    async function fetchOneApiDrawing() {
      const data = await fetchOneDrawing(id);
      setDrawingData(data);
    }
    fetchOneApiDrawing();
  }, [id]);

  return (
    <article className='drawingpage-container m-3 p-3'>
      <Row>
        <Col className='drawingpage-imgcontainer mx-auto col-12 col-md-6'>
          <div onClick={() => toggleLightbox()} className='imagecontainer'>
            <div className='lightbox-hover'></div>
            <span className='lightbox-hover-tooltip m-0 p-2 '>
              Cliquez pour agrandir l'image
            </span>
            <LazyImage
              src={drawingData && `${process.env.REACT_APP_API_URL}/${drawingData[0].imageLink}`}
              alt={drawingData && drawingData[0].title}
            />
            {/* <img
              src={drawingData && `${process.env.REACT_APP_API_URL}/${drawingData[0].imageLink}`}
              alt={drawingData && drawingData[0].title}
            /> */}

          </div>
        </Col>
        <Col className='drawingpage-textcontainer'>
          <Col>
            <h1 className='p-1 ps-3 text-white text-center'>
              {drawingData && drawingData[0].title}
            </h1>
          </Col>
          <Col className='fw-light pt-3'>
            <Card.Text class="form">{drawingData && drawingData[0].postContent}</Card.Text>
            <Link to='/drawings' className='backto d-inline'>
              <Button size='sm'>
                <BiChevronLeft style={{ fontSize: '20px' }} /> Revenir la
                galerie
              </Button>{' '}
            </Link>
          </Col>
        </Col>

        {isLightboxOn ? (
          <Lightbox
            image={`${process.env.REACT_APP_API_URL}/${drawingData[0].imageLink}`}
            title={drawingData[0].title}
            onClose={toggleLightbox}
          ></Lightbox>
        ) : null}
      </Row>
    </article>
  );
};

export default DrawingPage;
