import React, { useState, useEffect } from 'react';
import '../styles/home.css';
import { Link } from 'react-router-dom';

import fetchDrawings from '../utils/fetchDrawings';
import { Col, Row, Button } from 'react-bootstrap';
import Title from "./common/Title";


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
            Bienvenue dans ma galerie d'art
          </h1>
        </div>
      </div>
     
     <Title text="Ma dernière oeuvre"/>
      <Row className='lastdrawing p-3 mx-auto my-0 mb-sm-5'>
        <Col className='lastdrawing-imgcontainer mx-auto col-12 col-md-6 '>
          <img
            src={drawings && drawings[drawings.length - 1].imageLink}
            alt={drawings && drawings[drawings.length - 1].title}
          />
        </Col>
        <Col className='lastdrawing-textcontainer'>
          <Col>
            <h2 className='p-1 ps-3 text-white bg-primary text-center'>
              {drawings && drawings[drawings.length - 1].title}
            </h2>
          </Col>
          <Col className='fw-light pt-3'>
            <p>{drawings && drawings[drawings.length - 1].postContent}</p>
            <Link
              to={`/drawing/${drawings && drawings[drawings.length - 1].id}`}
              className='backto d-inline my-auto'
            >
              <Button variant='primary' size='sm'>
                Voir cette oeuvre
              </Button>
            </Link>
          </Col>
        </Col>
      </Row>
    </article>
  );
};

export default Home;
