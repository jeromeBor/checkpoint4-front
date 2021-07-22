import axios from 'axios';

const fetchDrawings = () => {
  return axios.get('http://localhost:4000/drawings').then((r) => r.data);
};

export default fetchDrawings;
