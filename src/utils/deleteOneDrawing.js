import axios from 'axios';

const deleteOneDrawing = (id) => {
  axios.delete(`/drawings/${id}`);
};

export default deleteOneDrawing;
