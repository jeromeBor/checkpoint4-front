import React, { useState, useEffect } from 'react';
import '../styles/home.css';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav } from 'react-bootstrap';

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
    <article className='lastdrawing-container'>
      <div className='homepage-drawing'>
        <div className='welcome p-0 typewriter d-flex justify-content-center align-items-center'>
          <h1 className='text-secondary fw-bold text-center p-0 bg-transparent'>
            Welcome in my Art Gallery
          </h1>
        </div>
      </div>
      {/* <div className='mt-4 bg-transparent text-center text-secondary '>
        <h1 className='bg-transparent fw-bold mb-0'>Lastest drawing</h1>
      </div> */}
      <h1 className='page-title fw-bold text-center bg-transparent mx-auto mt-3'>
        Latest drawing
      </h1>
      <Row className='lastdrawing p-3 mx-auto my-0 mb-sm-5'>
        <Col className='lastdrawing-imgcontainer mx-auto col-12 col-md-6 '>
          <img
            src={drawings && drawings[drawings.length - 1].imageLink}
            alt={drawings && drawings[drawings.length - 1].title}
          />
        </Col>
        <Col className='lastdrawing-textcontainer'>
          <Col>
            <h2 className='p-1 ps-3 text-secondary bg-primary'>
              {drawings && drawings[drawings.length - 1].title}
            </h2>
          </Col>
          <Col className='fw-light pt-3'>
            <p>{drawings && drawings[drawings.length - 1].postContent}</p>
            <Link
              to={`/drawing/${drawings && drawings[drawings.length - 1].id}`}
              className='backto d-inline my-auto'
            >
              <Button size='sm'> See this drawing</Button>{' '}
            </Link>
          </Col>
        </Col>
      </Row>
    </article>
  );
};

export default Home;
