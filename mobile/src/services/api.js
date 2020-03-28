import axios from 'axios';

const api = axios.create({
     baseURL: 'exp://192.168.11.9:3333'
});

export default api;