import axios from 'axios';

const fetchTags = (setTags) => {
  axios
    .get('http://localhost:4000/tags')
    .then((r) => r.data)
    .then((r) => setTags(r));
};

export default fetchTags;
