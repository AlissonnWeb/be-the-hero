import axios from 'axios';

const api = axios.create({
  baseURL: 'IP do servidor backend'
})

export default api;