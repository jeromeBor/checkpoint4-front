import React, { useState, useEffect } from 'react';
import '../styles/home.css';
import { formatDateUnix } from '../utils/formatDate';

import fetchDrawings from '../utils/fetchDrawings';

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
    <div className='homepage'>
      <div className='homepage-drawing d-flex justify-content-center align-items-center flex-column'>
        <div className='welcome typewriter d-flex justify-content-center align-items-center'>
          <h1 className='text-secondary fw-bold text-center p-0'>
            Welcome in my Art Gallery
          </h1>
        </div>
        <section className=' lastdrawing bg-light p-3 m-3'>
          <img src={drawings && drawings[0].imageLink} alt='homeimg' />
          <article className='p-3'>
            <h1 className='d-inline'>{drawings && drawings[0].title}</h1>
            <span className='ms-2 text-primary'>
              {drawings && formatDateUnix(drawings[0].dateOfWrite)}
            </span>{' '}
            <br />
            <span>{drawings && drawings[0].postContent}</span>
          </article>
        </section>
      </div>
    </div>
  );
};

export default Home;
