import axios from 'axios';

const fetchDrawings = async (setDrawings) => {
  await axios
    .get('http://localhost:4000/drawings')
    .then((r) => r.data)
    .then((r) => setDrawings(r));
};

export default fetchDrawings;