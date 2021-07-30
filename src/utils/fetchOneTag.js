import axios from 'axios';

const fetchOneTag = (id) => {
  return axios.get(`http://localhost:4000/tags/${id}`).then((r) => r.data);
};

export default fetchOneTag;
