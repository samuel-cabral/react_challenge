import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://morning-inlet-69134.herokuapp.com',
});
