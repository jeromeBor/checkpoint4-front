import axios from 'axios';

const deleteOneTag = (id) => {
  axios.delete(`${process.env.REACT_APP_API_URL}/tags/${id}`);
};

export default deleteOneTag;
