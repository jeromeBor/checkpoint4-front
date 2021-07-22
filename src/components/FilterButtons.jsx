import React from 'react';
import { Button } from 'react-bootstrap';

const FilterButtons = ({ tags, filter, showAll }) => {
  return (
    <div>
      <Button onClick={() => showAll()}>Voir tout</Button>

      {tags &&
        tags.map((tag, i) => (
          <Button key={tag.id} onClick={() => filter(tag.id)}>
            {tag.title}
          </Button>
        ))}
    </div>
  );
};

export default FilterButtons;
