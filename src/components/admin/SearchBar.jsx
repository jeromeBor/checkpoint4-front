import React from 'react';
import { useForm } from 'react-hook-form';

import { Button, Form } from 'react-bootstrap';

const SearchBar = ({ searchValue, setSearchValue, panel }) => {
  const storeSearchValue = (e) => {
    setSearchValue(e.target.value);
    console.log(searchValue);
  };

  const onSubmit = (data, e) => {};

  const { handleSubmit } = useForm();

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      className='d-flex flex-row m-1 w-100'
    >
      {panel ? (
        <>
          <Form.Control
            name='searchValue'
            onChange={(e) => storeSearchValue(e)}
            size='sm'
            type='text'
            placeholder='Rechercher par titre'
          />
          <Button size='sm' type='reset' onClick={(e) => setSearchValue('')}>
            X
          </Button>
        </>
      ) : (
        <>
          <Form.Control
            size='sm'
            type='text'
            placeholder='Disponible pour les dessins seulement'
            readOnly
          />{' '}
          <Button disabled size='sm'>
            X
          </Button>
        </>
      )}
    </Form>
  );
};

export default SearchBar;
