import axios from './axiosConfig';

const fetchDrawings = () => {
  return (
    axios
      .get(`/drawings`)
      // .get('http://localhost:4000/drawings')
      .then((r) => r.data)
  );
};

export default fetchDrawings;
