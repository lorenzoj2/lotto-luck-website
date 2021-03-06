import axios from 'axios';

// base url to make requests to lottery database
const instance = axios.create({
  baseUrl: process.env.REACT_APP_DEV,
});

export default instance;
