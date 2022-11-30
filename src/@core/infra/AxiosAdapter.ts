import axios from 'axios';

import HttpClient from './HttpClient';

export default class AxiosAdapter implements HttpClient {
  async get(url: string) {
    return await axios.get(url);
  }
}
