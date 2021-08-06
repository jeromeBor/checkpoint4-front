import axios from 'axios';

const fetchOneTag = (id) => {
  return axios.get(`/tags/${id}`).then((r) => r.data);
};

export default fetchOneTag;
