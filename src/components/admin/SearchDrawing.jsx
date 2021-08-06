import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import searchDrawingByName from '../../utils/searchDrawingByName';

const SearchDrawing = () => {
  const { searchValue } = useParams();

  const [searchedDrawings, setSearchedDrawings] = useState();

  useEffect(() => {
    async function fetchDrawingsByName() {
      const data = await searchDrawingByName(searchValue);
      setSearchedDrawings(data);
      console.log(data);
    }
    fetchDrawingsByName();
  }, [searchValue]);

  return (
    <div>
      <h1>coucou</h1>
      {searchedDrawings && searchedDrawings.title}
      {searchedDrawings && searchedDrawings.postContent}
    </div>
  );
};

export default SearchDrawing;
