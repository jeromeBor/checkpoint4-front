import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

const ControlPanel = ({
  setSearchValue,
  searchValue,
  panel,
  togglePanel,
  fetchDrawingsByName,
}) => {
  return (
    <Row className='flex-column flex-md-row mb-3'>
      <Col className='d-flex flex-sm-column flex-column align-items-center justify-content-center p-1'>
        <Button size='sm' variant='success' className='m-1  w-100'>
          <Link className='text-white' to='/admin/create-drawing'>
            Créer un dessin
          </Link>
        </Button>
        <Button size='sm' variant='success' className='m-1  w-100'>
          <Link className='text-white' to='/admin/create-tag'>
            Créer un tag
          </Link>
        </Button>
      </Col>
      <Col className='d-flex flex-column align-items-center justify-content-center p-2'>
        {panel ? (
          <Button className='w-100 m-1' size='sm' onClick={togglePanel}>
            Afficher les tags
          </Button>
        ) : (
          <Button className='w-100 m-1' size='sm' onClick={togglePanel}>
            Afficher les dessins
          </Button>
        )}

        <SearchBar
          panel={panel}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          // fetchDrawingsByName={fetchDrawingsByName}
        />
      </Col>
    </Row>
  );
};

export default ControlPanel;
