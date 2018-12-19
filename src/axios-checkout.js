import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://styleshare-1bdde.firebaseio.com/'
});

export default instance;