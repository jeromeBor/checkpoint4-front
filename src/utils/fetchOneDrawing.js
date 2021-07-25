import axios from 'axios';

const fetchOneDrawing = (id) => {
  return axios.get(`http://localhost:4000/drawings/${id}`).then((r) => r.data);
};

export default fetchOneDrawing;
