import axios from './axiosConfig';

const searchDrawingByName = (searchValue) => {
  return axios.get(`/drawings/${searchValue}`).then((r) => r.data);
};

export default searchDrawingByName;
