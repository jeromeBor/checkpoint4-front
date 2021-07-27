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
    <article className='drawingpage-container'>
      <div className='homepage-drawing'>
        <Col className='welcome p-0 typewrite d-flex justify-content-center align-items-center'>
          <h1 className='text-secondary fw-bold text-center p-0 bg-transparent'>
            Welcome in my Art Gallery
          </h1>
        </Col>
      </div>

      <Row className='lastimage p-3 mx-auto  my-0 my-sm-3'>
        <Col className='drawingpage-imgcontainer mx-auto col-12 col-md-6 '>
          <img
            src={drawings && drawings[drawings.length - 1].imageLink}
            alt={drawings && drawings[drawings.length - 1].title}
          />
        </Col>
        <Col className='drawingpage-textcontainer'>
          <Col>
            <h1 className='p-1 ps-3 text-white '>
              {drawings && drawings[drawings.length - 1].title}
            </h1>
          </Col>
          <Col className='fw-light pt-3'>
            <p>{drawings && drawings[drawings.length - 1].postContent}</p>
            <Link
              to={`/drawing/${drawings && drawings[drawings.length - 1].id}`}
              className='backto d-inline'
            >
              <Button> See this drawing</Button>{' '}
            </Link>
          </Col>
        </Col>
      </Row>
    </article>
  );
};

export default Home;
