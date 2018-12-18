import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://gist.githubusercontent.com/KRAhn/cbbde449ee64b2c5488ce1a48f7bb6b5/raw/a3359d35c3efdf7d180dde74ae48fc38b627357d/'
});

export default instance;