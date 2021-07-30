import axios from 'axios';

const updateOneTag = (id, data) => {
  axios.put(`${process.env.REACT_APP_API_URL}/tags/${id}`, data);
};

export default updateOneTag;
