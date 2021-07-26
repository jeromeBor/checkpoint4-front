import React, { useState, useEffect } from 'react';
import '../styles/home.css';
import { Link } from 'react-router-dom';

import { formatDateUnix } from '../utils/formatDate';
import fetchDrawings from '../utils/fetchDrawings';
import { Col, Row, Button } from 'react-bootstrap';

const Home = () => {
  const [drawings, setDrawings] = useState();

  useEffect(() => {
    async function fetchApiDrawings() {
      const data = await fetchDrawings();
      setDrawings(data);
    }
    fetchApiDrawings();
  }, []);

  return (
    <article className='drawingpage-container p-3 '>
      <Row className='homepage-drawing p-0'>
        <Col className='welcome typewriter p-0 d-flex justify-content-center align-items-center'>
          <h1 className='text-secondary fw-bold text-center p-0 bg-transparent'>
            Welcome in my Art Gallery
          </h1>
        </Col>
      </Row>

      <Row>
        <Col className='drawingpage-imgcontainer mx-auto col-12 col-md-6 '>
          <img
            src={drawings && drawings[0].imageLink}
            alt={drawings && drawings[0].title}
          />
        </Col>
        <Col className='drawingpage-textcontainer'>
          <Col>
            <h1 className='p-1 ps-3 text-white '>
              {drawings && drawings[0].title}
            </h1>
          </Col>
          <Col className='fw-light pt-3'>
            <p>{drawings && drawings[0].postContent}</p>
            <Link to='/drawings' className='backto d-inline'>
              <Button> Back to Gallery</Button>{' '}
            </Link>
          </Col>
        </Col>
      </Row>
    </article>
  );
};

export default Home;
