import React from 'react';
import { BlockLoading } from 'react-loadingg';

const Loader = () => {
  return (
    <div className='m-auto'>
      <BlockLoading speed='3' size='custom' color='#dacc3e' />
    </div>
  );
};

export default Loader;
