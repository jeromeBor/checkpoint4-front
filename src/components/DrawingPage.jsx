import React, { useEffect, useState } from 'react';
import '../styles/drawingpage.css';
import { useParams, Link } from 'react-router-dom';
import fetchOneDrawing from '../utils/fetchOneDrawing';
import { formatDateUnix } from '../utils/formatDate';

import { Row, Col, Button } from 'react-bootstrap';

const DrawingPage = () => {
  const { id } = useParams();

  const [drawingData, setDrawingData] = useState();

  useEffect(() => {
    async function fetchOneApiDrawing() {
      const data = await fetchOneDrawing(id);
      setDrawingData(data);
    }
    fetchOneApiDrawing();
  }, [id]);

  return (
    <article className='drawingpage-container p-3 '>
      <Row>
        <Col className='drawingpage-imgcontainer mx-auto col-12 col-md-6 '>
          <img
            src={drawingData && drawingData[0].imageLink}
            alt={drawingData && drawingData[0].title}
          />
        </Col>
        <Col className='drawingpage-textcontainer'>
          <Col>
            <h1 className='p-1 ps-3 text-white '>
              {drawingData && drawingData[0].title}
            </h1>
          </Col>
          <Col className='fw-light pt-3'>
            <p>{drawingData && drawingData[0].postContent}</p>
            <Link to='/drawings' className='backto d-inline'>
              <Button> Back to Gallery</Button>{' '}
            </Link>
          </Col>
        </Col>
      </Row>
    </article>
  );
};

export default DrawingPage;
