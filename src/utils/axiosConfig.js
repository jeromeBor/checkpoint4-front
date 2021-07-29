import axios from 'axios';

const $axios = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL || ''}`,
});

export default $axios;
