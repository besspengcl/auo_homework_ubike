import axios from 'axios';

const source = axios.create({
  baseURL: 'https://tcgbusfs.blob.core.windows.net', // 只寫 domain
});

export const apiUbike = () =>
  source.get('/dotapp/youbike/v2/youbike_immediate.json');
