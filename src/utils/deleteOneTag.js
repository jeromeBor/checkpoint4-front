import axios from 'axios';

const deleteOneTag = (id) => {
  axios.delete(`/tags/${id}`);
};

export default deleteOneTag;
