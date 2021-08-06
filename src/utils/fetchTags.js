import axios from 'axios';

const fetchTags = () => {
  return axios.get('/tags').then((r) => r.data);
};

export default fetchTags;
