import React from 'react';
import ReactLoading from 'react-loading';

const Loader = ({ }) => {
  return (
    <div className='d-flex justify-content-center align-self-stretch'>
      <ReactLoading type="cubes" color="#dacc3e" height={'20%'} width={'20%'} />    </div>
  );
};

export default Loader;
