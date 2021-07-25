import React, { useEffect, useState } from 'react';
import '../styles/drawingpage.css';
import { useParams } from 'react-router-dom';
import fetchOneDrawing from '../utils/fetchOneDrawing';
import { Row, Col } from 'react-bootstrap';

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
    <article className='drawingpage-container m-5 p-3'>
      <Row>
        <Col className='drawingpage-imgcontainer col-md-auto '>
          <img
            src={drawingData && drawingData[0].imageLink}
            alt={drawingData && drawingData[0].title}
          />
        </Col>
        <Col className='drawingpage-textcontainer'>
          <h1 className='p-1 ps-3 text-white '>
            {' '}
            {drawingData && drawingData[0].title}
          </h1>
          <Row>
            <Col>
              <p>{drawingData && drawingData[0].postContent}</p>
            </Col>
          </Row>
          <p>{drawingData && drawingData[0].dateOfWrite}</p>
        </Col>
      </Row>
    </article>
  );
};

export default DrawingPage;
