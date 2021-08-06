import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Button, Form } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import searchDrawingByName from '../../utils/searchDrawingByName';

const SearchBar = ({ searchValue, setSearchValue }) => {
  // const [searchValue, setSearchValue] = useState('');

  const storeSearchValue = (e) => {
    setSearchValue(e.target.value);
    console.log(searchValue);
  };

  // const fetchDrawingsByName = async (e) => {
  //   e.preventDefault();
  //   const data = await searchDrawingByName(searchValue);
  //   console.log(data);
  //   console.log(searchValue);
  // };

  return (
    <Form className='d-flex flex-row m-1 w-100'>
      <Form.Control
        name='searchValue'
        onChange={(e) => storeSearchValue(e)}
        className='form-control-sm'
        type='text'
        placeholder='Rechercher par titre'
      />
    </Form>
  );
};

export default SearchBar;
