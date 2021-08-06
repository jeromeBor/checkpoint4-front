import axios from './axiosConfig';

const fetchDrawings = () => {
  return axios.get(`/drawings`).then((r) => r.data);
};

export default fetchDrawings;
