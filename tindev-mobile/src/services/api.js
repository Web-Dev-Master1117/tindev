import axios from 'axios';

let apiURL;
if (process.env.NODE_ENV === 'development') {
  apiURL = 'http://192.168.0.10:3333';
} else if (process.env.NODE_ENV === 'production') {
  apiURL = 'https://tindev.herokuapp.com';
}

const api = axios.create({
  baseURL: apiURL,
});

export default api;
