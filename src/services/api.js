import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.vife.dev',
});

export default api;
