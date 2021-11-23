import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'http://localhost:8000',
  // CORS で、認証情報も送信するように設定
  withCredentials: true,
});

export default axios;
