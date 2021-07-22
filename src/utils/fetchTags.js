import axios from 'axios';

const fetchTags = () => {
  return axios.get('http://localhost:4000/tags').then((r) => r.data);
};

export default fetchTags;
