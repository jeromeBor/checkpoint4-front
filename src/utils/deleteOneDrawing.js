import axios from 'axios';

const deleteOneDrawing = (id) => {
  axios.delete(`${process.env.REACT_APP_API_URL}/drawings/${id}`);
};

export default deleteOneDrawing;
