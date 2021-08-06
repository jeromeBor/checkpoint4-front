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
            className='form-control-sm'
            type='text'
            placeholder='Rechercher par titre'
          />
          <Button type='reset' onClick={(e) => setSearchValue('')}>
            X
          </Button>
        </>
      ) : (
        <>
          <Form.Control
            className='form-control-sm'
            type='text'
            placeholder='Disponible pour les dessins seulement'
            readOnly
          />{' '}
          <Button type='reset' onClick={(e) => setSearchValue('')} disabled>
            X
          </Button>
        </>
      )}
    </Form>
  );
};

export default SearchBar;
