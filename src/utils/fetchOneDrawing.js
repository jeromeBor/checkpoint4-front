import axios from "axios";

const fetchOneDrawing = (id) => {
  return axios.get(`/drawings/${id}`).then((r) => r.data);
};

export default fetchOneDrawing;
