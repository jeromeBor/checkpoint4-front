import axios from "axios";

const fetchImages = (imageName) => {
  return axios.get(`/upload/${imageName}`).then((r) => r.data);
};

export default fetchImages;
