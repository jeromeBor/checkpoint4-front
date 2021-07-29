import axios from 'axios';

const updateOneDrawing = (id, data) => {
  axios.put(`${process.env.REACT_APP_API_URL}/drawings/${id}`, data);
};

export default updateOneDrawing;
