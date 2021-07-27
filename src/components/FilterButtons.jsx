import React from 'react';
import { Button } from 'react-bootstrap';

const FilterButtons = ({ tags, filter, showAll }) => {
  return (
    <div>
      <Button size='sm' className='m-2' onClick={() => showAll()}>
        Voir tout
      </Button>

      {tags &&
        tags.map((tag, i) => (
          <Button
            size='sm'
            className='m-1 m-sm-2'
            key={tag.id}
            onClick={() => filter(tag.id)}
          >
            {tag.title}
          </Button>
        ))}
    </div>
  );
};

export default FilterButtons;
